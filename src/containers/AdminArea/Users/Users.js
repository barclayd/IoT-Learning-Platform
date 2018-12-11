import React from 'react';
import {
    Select,
    Button,
    Collapse,
    Form,
    Input,
    Icon,
    Row,
    Col,
    notification,
    Radio,
    Divider,
    List,
    Card,
    Popconfirm, Tooltip
} from 'antd';
import {connect} from 'react-redux';
import styles from "../UseCasesController/UseCasesController.module.scss";
import * as text from "../../../assets/staticText";

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const { TextArea } = Input;

const formItemLayout = {

};

const Users = (props) => {


    let content = (<div>No Users</div>);
    let notification = (props.deleted ? props.deletedUseCaseNotification('warning') : null);

    const RadioGroup = Radio.Group;
    const RadioButton = Radio.Button;

    const questionMarkStyle = {position: 'absolute', fontSize: '35px', left: '645px',top: '0px'};


    if (props.users){
        content =
            (
                <Collapse accordion>
                    {Object.keys(props.users).map((user, index) => {
                        const selectedUser = props.users[user];
                        console.log(selectedUser);
                        console.log(user);
                        if(selectedUser.name !== undefined) {
                            console.log(selectedUser.name);
                            return (
                                <Panel header={selectedUser.name} key={index}>
                                    <h3>Information:</h3>
                                    <div key={index}>
                                        <FormItem {...formItemLayout} label='Name'>
                                            <Input style={{width: '100%'}} value={selectedUser.name} onChange={(e) => props.updateForm('name', e, user, selectedUser)}/>
                                        </FormItem>
                                        <FormItem label='Email'>
                                            <p>{selectedUser.email}</p>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label='Role'>
                                            <RadioGroup defaultValue={selectedUser.role} style={{width: '125%'}} onChange={(e) => props.updateForm('role', e, user, selectedUser)}>
                                                <RadioButton value="Apprentice">Apprentice</RadioButton>
                                                <RadioButton value="Trainer">Trainer</RadioButton>
                                                <RadioButton value="Community">Community</RadioButton>
                                            </RadioGroup>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label='Use Cases'>
                                            <List bordered size='small'>
                                                {props.usersUseCases(selectedUser).map((useCase) => {
                                                    console.log(useCase);
                                                    return (props.usersUseCases(selectedUser).length ? <List.Item>
                                                            {useCase.name}
                                                        </List.Item> : <List.Item> User currently has no assigned Use Cases.</List.Item>
                                                    )
                                                })}
                                            </List>
                                        </FormItem>
                                        <Divider/>
                                        <Button className={styles.saveBtn} onClick={() => props.submitSettings()} type="primary">
                                            Save
                                        </Button>
                                        <Popconfirm title={`Are you sure delete ${selectedUser.name}?`} onConfirm={() => props.confirmDelete(selectedUser.id)} onCancel={props.cancelDelete} okText="Yes" cancelText="No">
                                            <Button type="danger" htmlType="submit" loading={props.loading} style={{backgroundColor: '#f5222d', color: '#f5f5f5', left:'500px'}}>Remove</Button>
                                        </Popconfirm>
                                    </div>
                                </Panel>
                            );
                        }})}
                </Collapse>
            )
    }

    return (
        <React.Fragment>
            {notification}
            <h2 style={{display: 'inline'}}>Users</h2>
            <Tooltip title={text.usersList}>
                <Icon type="question-circle" theme="filled" style={questionMarkStyle} defaultVisible={true}/>
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

export default connect(mapStateToProps)(Users);
