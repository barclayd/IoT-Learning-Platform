import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Input, Col, Select, Cascader, InputNumber, Button} from "antd";
import * as actions from "../../store/actions";
import FormItem from "antd/lib/form/FormItem";

class Settings extends Component {

    componentWillMount() {
                this.props.onFetchUseCaseData();
    }


    render() {
        const FormItem = Form.Item;
        const Option = Select.Option;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };

        let sensors = [];
        let emails = {};

        let settings = this.props.data.forEach((useCase) => {
            if (useCase.id === this.props.id) {
                console.log('local id: ', this.props.id, 'firebaseId: ', useCase.id );
                for(let sensor in useCase.sensors) {
                    console.log(sensor);
                    console.log(useCase.sensors[sensor]);
                    sensors.push(useCase.sensors[sensor]);
                }
                emails = {...useCase.email};
            }
        });

        let emailSettings = Object.keys(emails).map((email) => {
            return <FormItem {...formItemLayout} key={email} label={email}> <Input defaultValue={emails[email]} /> </FormItem>
        });

        let sensorsSettings = sensors.map((sensor) => {
            return Object.keys(sensor).map((setting) => {
                console.log(parseInt(sensor[setting]));
                if(parseInt(sensor[setting]) !== undefined) {
                    return (<span key={setting}>
                        <FormItem {...formItemLayout} label={setting}>
                            <InputNumber defaultValue={sensor[setting]} style={{ width: '65%', marginRight: '3%' }}/>
                             <Select style={{ width: '32%' }}>
                                <Option value='celsius'>°C</Option>
                                <Option value='fahrenheit'>°F</Option>
                            </Select>
                        </FormItem>
                    </span>)
                } else {
                    return <FormItem {...formItemLayout} key={setting} label={setting}> <Input defaultValue={sensor[setting]} style={{ width: '100%' }}/> </FormItem>
                }
            });
        });

        let button = <Button type="primary" htmlType="submit">Submit</Button>;



        return (
            <React.Fragment>
                <h2>Email Settings </h2>
                <Form>
                {emailSettings}
                <h2>Sensor Settings </h2>
                {sensorsSettings}
                {button}
                </Form>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.useCaseFirebase.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUseCaseData: () => dispatch(actions.fetchUseCaseData())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
