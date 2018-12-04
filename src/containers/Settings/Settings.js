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
            console.log(email);
            switch (email) {
                        case('senders'):
                            return <FormItem {...formItemLayout} key={email} label={email}>
                                {/*<Input defaultValue={emails[email]} />*/}
                                <Select mode='multiple' placeholder='Please select email addresses' defaultValue={emails[email]}>
                                    <Option value='default'>{emails[email]}</Option>
                                    <Option value='email1'>test@gmail.com</Option>
                                    <Option value='fahrenheit'>peter.trott@gmail.com</Option>
                                </Select>
                            </FormItem>;
                        default:
                            return <FormItem {...formItemLayout} key={email} label={email}> <Input defaultValue={emails[email]} /> </FormItem>

            }
        });

        let sensorsSettings = sensors.map((sensor) => {
            return Object.keys(sensor).map((setting) => {
                if(!isNaN(parseInt(sensor[setting]))) {
                    return (
                        <FormItem {...formItemLayout} label={setting} key={sensor[setting]}>
                            <InputNumber defaultValue={sensor[setting]} style={{ width: '65%', marginRight: '3%' }}/>
                            <Select style={{ width: '32%' }} defaultValue='celsius'>
                                <Option value='celsius'>°C</Option>
                                <Option value='fahrenheit'>°F</Option>
                            </Select>
                        </FormItem>
                    )
                } else {
                    switch (setting) {
                        case('sensorName'):
                            return (
                                <FormItem {...formItemLayout} label={setting} key={sensor[setting]}>
                                <Select defaultValue={sensor[setting]}>
                                    <Option value={sensor[setting]}>{sensor[setting]}</Option>
                                    <Option value='motion'>Motion Sensor</Option>
                                </Select>
                            </FormItem>);
                        default:
                            return <FormItem {...formItemLayout} key={setting} label={setting}> <Input
                                defaultValue={sensor[setting]} style={{width: '100%'}}/>
                            </FormItem>
                    }
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
