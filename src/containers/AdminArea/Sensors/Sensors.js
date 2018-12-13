import React from 'react';
import {Select, Button, Collapse, Form, Input, Icon, Row, Col, notification, Divider, Tooltip} from 'antd';
import {connect} from 'react-redux';
import * as text from "../../../assets/staticText";

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const { TextArea } = Input;

const formItemLayout = {

};

const Sensors = (props) => {


    let content = (<div>No Sensors</div>);
    let notification = (props.deleted ? props.deletedUseCaseNotification('warning') : null);
    const questionMarkStyle = {position: 'absolute', fontSize: '35px', left: '645px',top: '0px'};

    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 20, offset: 4 },
        },
    };

    if (props.sensors){
        content =
            (
                <Collapse accordion>
                    {Object.keys(props.sensors).map((sensor, index) => {
                        const currentSensor = props.sensors[sensor];
                        return (
                            <Panel header={currentSensor.name} key={index}>
                                <h3>Information:</h3>
                                <div key={index}>
                                    <FormItem {...formItemLayout} label='Name'>
                                        <Input style={{width: '100%'}} value={currentSensor.name} onChange={(e) => props.updateSensors('name', e, index)}/>
                                    </FormItem>
                                    <FormItem {...formItemLayout} label='Sensor Components'>
                                    {currentSensor.sensorComponents.map((cmp, cmpIndex) => {
                                        return <Input style={{width: '100%'}} value={cmp} key={cmpIndex} onChange={(e) => props.updateSensorsComponent(e, index, cmpIndex)}/>
                                    })}
                                    </FormItem>
                                    <FormItem {...formItemLayoutWithOutLabel}>
                                        <Button type="dashed" onClick={props.add} style={{ width: '60%' }}>
                                            <Icon type="plus" /> Add field
                                        </Button>
                                    </FormItem>
                                    <Divider />
                                    <Button onClick={props.handleUseCasesSave} type="primary">
                                        Save
                                    </Button>
                                </div>
                            </Panel>

                        );
                    })}
                </Collapse>
            )
    }

    return (
        <React.Fragment>
            {notification}
            <h2 style={{display: 'inline'}}>Sensors</h2>
            <Tooltip title={text.sensorsList}>
                <Icon type="question-circle" theme="filled" style={questionMarkStyle}/>
            </Tooltip>
            <Divider/>
            {content}
        </React.Fragment>);
};


const mapStateToProps = state => {
    return {
        deleted: state.useCaseFirebase.deleted,
        lastDeletedUseCase: state.useCaseFirebase.deletedUseCase
    }
};

export default connect(mapStateToProps)(Sensors);
