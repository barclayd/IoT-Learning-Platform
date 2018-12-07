import React, {Component} from 'react';
import {Modal, Card, Icon, Form, Select, Input, InputNumber, Upload, Button, Radio, notification, Avatar} from "antd";
import classes from './AddNewUseCase.module.scss';
import {updateObject} from "../../store/utility";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {Redirect} from "react-router-dom";
const { Meta } = Card;

const otherSettings = {
    arduino:'tmp36.jpg',
    arduinoName: 'TMP36',
    email: {
        body: 'Email body',
        senders: ['test.test@gmail.com'],
        subject: 'Email subject'
    }
};

class AddNewUseCase extends Component {

    state = {
        visible: false,
        confirmLoading: false,
        number: 0,
        numberSensors: [1],
        form: {
            name: '',
            image: 'new-image.jpg'
        }
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleSubmit = () => {

        let sensorsData = [];
        sensorsData.push(this.state.sensorsData);
        let form = {...this.state.form};
        let mergedObject = {...form, sensorsData};
        let access = {...this.state.access};
        access.listedUsers = [localStorage.getItem("userId")];
        let mergedAgain = {...mergedObject, access};
        let finalMerge = {...mergedAgain, ...otherSettings};

        this.props.onCreateNewUseCase(parseInt(this.props.id),finalMerge);

        setTimeout(() => {
            console.log(finalMerge);
        }, 500);
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    updateForm = (settingName, settingValue) => {
        const updatedForm = updateObject(this.state.form, {
            [settingName]: settingValue.target.value
        } );
        this.setState({
            form: updatedForm
        });
    };

    updateFormNumber = (settingName, settingValue) => {
        const updatedForm = updateObject(this.state.form, {
            [settingName]: settingValue
        } );
        this.setState({
            form: updatedForm
        });

        setTimeout(() => {
            console.log(this.state);
        }, 500);
    };

    radioButtonForm = (value) => {
        const setting = value.target.value;
        const updatedForm = updateObject(this.state.access, {
            [setting]: true
        } );
        this.setState({
            access: updatedForm
        });
    };

    updateSensorDataForm = (settingName, settingValue) => {
        const updatedForm = updateObject(this.state.sensorsData, {
            [settingName]: settingValue
        } );
        this.setState({
            sensorsData: updatedForm
        });
    };

    openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'Settings successfully saved!',
            description: `The settings have been successfully updated for ${this.state.name}`,
        });
    };

    render () {

        const FormItem = Form.Item;
        const Option = Select.Option;
        const { TextArea } = Input;
        const RadioGroup = Radio.Group;
        const RadioButton = Radio.Button;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };

        otherSettings.id = parseInt(this.props.id);
        otherSettings.key = this.state.form.name.toLowerCase();



        let numberSensors = this.state.numberSensors.map(sensor => {
            return (
                <React.Fragment>
                    <br />
                    <h2>{`Sensor Component ${sensor}`}</h2>
            <FormItem {...formItemLayout} label='Sensor Type'>
                <Select style={{width: '100%'}} placeholder='Please a sensor type' onChange={(e) => this.updateSensorDataForm('sensorName', e)}>
                    <Option value='Temperature'>Temperature</Option>
                    <Option value='Motion'>Motion</Option>
                </Select>
            </FormItem>
            <FormItem {...formItemLayout} label='Sensor Component'>
                <Select style={{width: '100%'}} placeholder='Please select a sensor type' onChange={(e) => this.updateSensorDataForm('sensorComponent', e)}>
        <Option value='TMP36'>TMP36</Option>
            <Option value='Motion'>Motion</Option>
            </Select>
        </FormItem>
        <FormItem {...formItemLayout} label='Min/Max Value'>
                <InputNumber style={{width: '50%'}} onChange={(e) => this.updateSensorDataForm('minValue', e)}/>
            <InputNumber style={{width: '50%'}} onChange={(e) => this.updateSensorDataForm('maxValue', e)}/>
            </FormItem>
                    <br />
                </React.Fragment>
            )});

        const newUseCaseForm = (
            <React.Fragment>
                <FormItem {...formItemLayout} label='Name'>
                    <Input style={{width: '100%'}} onChange={(e) => this.updateForm('name', e)}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Summary'>
                    <Input style={{width: '100%'}} onChange={(e) => this.updateForm('shortDesc', e)}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Description'>
                    <TextArea rows={4} style={{width: '100%'}} onChange={(e) => this.updateForm('longDesc', e)}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Number of Sensors'>
                    <InputNumber style={{width: '50%'}} onChange={(e) => this.updateFormNumber('numberSensors', e)}/>
                </FormItem>
                {numberSensors}
                <FormItem {...formItemLayout} label='Image for Use Case'>
                    <Upload name="logo" action="/upload.do" listType="picture" onChange={(e) => this.updateForm('image', e)}>
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                </FormItem>
                <FormItem {...formItemLayout} label='Image Description' >
                    <Input style={{width: '100%'}} onChange={(e) => this.updateForm('imageDesc', e)}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Access to Use Cases'>
                    <p style={{lineHeight: '1.7em'}}>This can be configured further, after creation, in Admin Area</p>
                    <RadioGroup defaultValue="Apprentice" style={{width: '150%'}} onChange={(e) => this.radioButtonForm(e)}>
                        <RadioButton value="Apprentice">Apprentices</RadioButton>
                        <RadioButton value="Trainer">Trainers</RadioButton>
                        <RadioButton value="Community">Communities</RadioButton>
                    </RadioGroup>
                </FormItem>
            </React.Fragment>
        );

        let addNewUseCaseCard;
        if(this.props.loading) {
            addNewUseCaseCard = <Card bordered={true} loading={true} aria-label={'Use case card is loading'}></Card>
        } else {
            addNewUseCaseCard =
                    <Card style={{marginTop: '100px'}} actions={[<Icon type="check-circle" theme="twoTone" style={{fontSize:'22px'}} aria-label={'experiment icon'}/>]}>

                        <Avatar style={{height: '100px', width: '100px'}} src='/images/add-new.png' />
                    <Meta style={{textAlign: 'center'}} title='Add a New Use Case' description='Click on this card to add a new use case. Here you can set all properties for a new use case' aria-label='Add a new usecase card'/>

                    </Card>
        }

        const { visible, confirmLoading } = this.state;

        let successRedirect = null;
        if(this.props.success){
            successRedirect = <Redirect to={`/usecases/${this.props.id}/settings`}/>
        }


        return (
           <React.Fragment>
               {successRedirect}
               {/*{notification}*/}
               <button className={classes.Button} onClick={this.showModal}>
               {localStorage.getItem("role") === 'Trainer' ? addNewUseCaseCard : null}
               </button>
               <Modal
                   title="Create a New Use Case"
                   visible={visible}
                   onOk={this.handleSubmit}
                   confirmLoading={confirmLoading}
                   onCancel={this.handleCancel}
               >
                   {newUseCaseForm}
               </Modal>
           </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        success: state.createUseCase.success
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateNewUseCase: (id, updateObject) => dispatch(actions.createUseCase(id, updateObject))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUseCase);
