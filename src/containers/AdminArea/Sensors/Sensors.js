import React from 'react';
import {Select, Button, Collapse, Form, Input, Icon, Row, Col, notification, Divider} from 'antd';
import {connect} from 'react-redux';

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const { TextArea } = Input;

const formItemLayout = {

};

const Sensors = (props) => {


    let content = (<div>No Sensors</div>);
    let notification = (props.deleted ? props.deletedUseCaseNotification('warning') : null);

    if (props.sensors){
        content =
            (
                <Collapse accordion>
                    {Object.keys(props.sensors).map((sensor, index) => {
                        const currentSensor = props.sensors[sensor];
                        console.log(currentSensor);
                        return (
                            <Panel header={currentSensor.name} key={index}>
                                <h3>Information:</h3>
                                <div key={index}>
                                    <FormItem {...formItemLayout} label='Name'>
                                        <Input style={{width: '100%'}} value={currentSensor.name} onChange={(e) => props.updateSensors('sensorName', e, index)}/>
                                    </FormItem>
                                    <FormItem {...formItemLayout} label='Sensor Components'>
                                    {currentSensor.sensorComponents.map((cmp) => {
                                        return <Input style={{width: '100%'}} value={cmp}  onChange={(e) => props.updateSensors('shortDesc', e)}/>
                                    })}
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
            <h2>Sensors</h2>
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
