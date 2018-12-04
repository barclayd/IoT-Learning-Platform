import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Input, Col, Select, Cascader, InputNumber, Button} from "antd";
import * as actions from "../../store/actions";
import FormItem from "antd/lib/form/FormItem";
import {updateObject} from '../../store/utility';

class Settings extends Component {

    state = {};

    componentDidMount() {
                this.props.onFetchUseCaseData();
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.loading) {
            nextProps.data.forEach((useCase) => {
                if (useCase.id === this.props.id) {
                    for(let sensor in useCase.sensorsData) {
                        this.setState({
                            sensors: useCase.sensorsData[sensor],
                            email: useCase.email
                        }, () => console.log(this.state))
                    }
                }
            });
        }
    }

    submitSettings() {
        let sensorsData = [];
        sensorsData.push(this.state.sensors);
        let email = {
            email: {...this.state.email}
        };
        let mergedObject = {...email, sensorsData};
        this.props.onSubmitSettings(this.props.id, mergedObject);
    }


    getSensorName = (settingName, settingValue) => {
        const updatedSensors = updateObject(this.state.sensors, {
            [settingName]: settingValue
        } );
        this.setState({
            sensors: updatedSensors
        });
    };

    changeEmailSetting = (settingName, settingValue) => {

        const updatedEmails = updateObject(this.state.email, {
            [settingName]: settingValue
        } );

      this.setState({
          email: updatedEmails
      })
    };

    changeEmailSettingOther = (settingName, settingValue) => {
        const updatedEmails = updateObject(this.state.email, {
            [settingName]: settingValue.target.value
        } );
        this.setState({
            email: updatedEmails
        })
    };

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
                for(let sensor in useCase.sensorsData) {
                    sensors.push(useCase.sensorsData[sensor]);
                }
                emails = {...useCase.email};
            }
        });

        let emailSettings = Object.keys(emails).map((email) => {
            switch (email) {
                        case('senders'):
                            return <FormItem {...formItemLayout} key={email} label={email}>
                                <Select settingType={email} mode='multiple' placeholder='Please select email addresses' value={this.state.email.senders} onChange={(e) => this.changeEmailSetting(email, e)}>
                                <Option value={emails[email]} key={Math.random()}>{emails[email]}</Option>
                                    <Option value='test@gmail.com'>test@gmail.com</Option>
                                    <Option value='peter.trott@gmail.com'>peter.trott@gmail.com</Option>
                                </Select>
                            </FormItem>;
                        default:
                            return <FormItem {...formItemLayout} key={email} label={email}> <Input defaultValue={emails[email]} onChange={(e) => this.changeEmailSettingOther(email, e)}/> </FormItem>

            }
        });

        let sensorsSettings = sensors.map((sensor) => {
            return Object.keys(sensor).map((setting) => {
                if(!isNaN(parseInt(sensor[setting]))) {
                    return (
                        <FormItem {...formItemLayout} label={setting} key={sensor[setting]}>
                            <InputNumber defaultValue={sensor[setting]} style={{ width: '65%', marginRight: '3%' }}  onChange={(e) => this.getSensorName(setting, e)}/>
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
                                <Select defaultValue={sensor[setting]} onChange={(e) => this.getSensorName(setting, e)}>
                                    <Option value={sensor[setting]}>{sensor[setting]}</Option>
                                    <Option value='motion sensor'>Motion Sensor</Option>
                                </Select>
                            </FormItem>);
                        case('sensorComponent'):
                            switch(this.state.sensorName) {
                                case('motion') :
                                    return (
                                        <FormItem {...formItemLayout} label={setting} key={sensor[setting]}>
                                            {/*<Select defaultValue={this.changeSetting(sensor[setting])}*/}
                                            <Select value={this.state.sensorComponent}
                                                    onChange={(e) => this.getSensorName(setting, e)}>
                                                <Option value='motion'>Motion Sensor</Option>
                                            </Select>
                                        </FormItem>);
                                case('temperature') :
                                    return (
                                        <FormItem {...formItemLayout} label={setting} key={sensor[setting]}>
                                            <Select defaultValue={(sensor[setting])}
                                                    onChange={(e) => this.getSensorName(setting, e)}>
                                                <Option value={sensor[setting]}>{sensor[setting]}</Option>
                                            </Select>
                                        </FormItem>);
                                default:
                                    return (
                                        <FormItem {...formItemLayout} label={setting} key={sensor[setting]}>
                                            <Select defaultValue={sensor[setting]}
                                                    onChange={(e) => this.getSensorName(setting, e)}>
                                                <Option value={sensor[setting]}>{sensor[setting]}</Option>
                                                <Option value='motion'>Motion Sensor</Option>
                                            </Select>
                                        </FormItem>);
                            }
                            default:
                            return <FormItem {...formItemLayout} key={setting} label={setting}> <Input
                                defaultValue={sensor[setting]} style={{width: '100%'}}/>
                            </FormItem>
                    }
                }
            });
        });


        let button = <Button type="primary" htmlType="submit" onClick={() => this.submitSettings()}>Submit</Button>;



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
        data: state.useCaseFirebase.data,
        loading: state.useCaseFirebase.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUseCaseData: () => dispatch(actions.fetchUseCaseData()),
        onSubmitSettings: (useCaseId, settings) => dispatch(actions.submitSettings(useCaseId, settings))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
