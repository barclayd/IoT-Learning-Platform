import React, {Component} from 'react';
import {Modal, Card, Icon, Form, Select, Input, InputNumber, Upload, Button, Radio} from "antd";
import classes from './AddNewUseCase.module.scss';
const { Meta } = Card;

class AddNewUseCase extends Component {

    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
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

        const newUseCaseForm = (
            <React.Fragment>
                <FormItem {...formItemLayout} label='Name'>
                    <Input style={{width: '100%'}}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Summary'>
                    <Input style={{width: '100%'}}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Description'>
                    <TextArea rows={4} style={{width: '100%'}}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Number of Sensors'>
                    <InputNumber style={{width: '50%'}}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Sensor Type'>
                    <Select style={{width: '100%'}} mode='multiple' placeholder='Please a sensor type'>
                        <Option value='Temperature'>Temperature</Option>
                        <Option value='Motion'>Motion</Option>
                    </Select>
                </FormItem>
                <FormItem {...formItemLayout} label='Sensor Component'>
                    <Select style={{width: '100%'}} mode='multiple' placeholder='Please select a sensor type'>
                        <Option value='Temperature'>Temperature</Option>
                        <Option value='Motion'>Motion</Option>
                    </Select>
                </FormItem>
                <FormItem {...formItemLayout} label='Min/Max Value'>
                    <InputNumber style={{width: '50%'}}/>
                    <InputNumber style={{width: '50%'}}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Image for Use Case'>
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                    </Upload>
                </FormItem>
                <FormItem {...formItemLayout} label='Access to Use Cases'>
                    <p style={{lineHeight: '1.7em'}}>This can be configured further, after creation, in Admin Area</p>
                    <RadioGroup defaultValue="Apprentice" style={{width: '150%'}}>
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
            addNewUseCaseCard = <Card
                hoverable
                bordered={true}
                style={{ width: 300}}
                bodyStyle= {{ minHeight: 150}}
                cover={<img height='150px' alt='add new usecase' src='/images/add-new.png' />}
                actions={[<Icon type="check-circle" theme="twoTone" style={{fontSize:'22px'}} aria-label={'experiment icon'}/>]}
                aria-label={`Use case card, Use case name is add new use case card, Use case description is click here to add a new use case`}
            >
                <div>
                    <Meta style={{textAlign: 'center'}} title='Add a New Use Case' description='Click on this card to add a new use case. Here you can set all properties for a new use case' aria-label='Add a new usecase card'/>
                </div>
            </Card>
        }

        const { visible, confirmLoading, ModalText } = this.state;


        return (
           <React.Fragment>
               <button className={classes.Button} onClick={this.showModal}>
               {localStorage.getItem("role") === 'Trainer' ? addNewUseCaseCard : null}
               </button>
               <Modal
                   title="Create a New Use Case"
                   visible={visible}
                   onOk={this.handleOk}
                   confirmLoading={confirmLoading}
                   onCancel={this.handleCancel}
               >
                   {newUseCaseForm}
               </Modal>
           </React.Fragment>
        )
    }

}

export default AddNewUseCase;
