import React from 'react';
import styles from './UseCasesController.module.scss'
import {Select, Button, Collapse, Form, Input, Icon, Row, Col, notification, Divider, Tooltip} from 'antd';
import {connect} from 'react-redux';
import AddNewUseCase from '../../AddNewUseCase/AddNewUseCase';
import * as text from "../../../assets/staticText";

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const { TextArea } = Input;

const formItemLayout = {

};

const UseCasesController = (props) => {


    let content = (<div> No Use Cases</div>);
    let notification = (props.deleted ? props.deletedUseCaseNotification('warning') : null);
    const questionMarkStyle = {position: 'absolute', fontSize: '35px', left: '645px',top: '0px'};


    if (props.useCases){
        content =
        (
            <Collapse accordion>
                {Object.keys(props.useCases).map((useCaseKey, index) => {
                    const useCase = props.useCases[useCaseKey];
                    const useCaseUsersIDs = props.getUseCaseUsers(useCase).map(user => user.userUUID);
                    return (
                    <Panel header={useCase.name} key={index}>
                        <h3>Information:</h3>
                        <div className={styles.UseCase} key={index}>
                        <FormItem {...formItemLayout} label='Name'>
                            <Input style={{width: '100%'}} value={useCase.name} onChange={(e) => props.updateUseCase('name', e, useCase)}/>
                        </FormItem>
                        <FormItem {...formItemLayout} label='Summary'>
                            <Input style={{width: '100%'}} value={useCase.shortDesc}  onChange={(e) => props.updateUseCase('shortDesc', e, useCase)}/>
                        </FormItem>
                        <FormItem {...formItemLayout} label='Description'>
                            <TextArea rows={4} style={{width: '100%'}} value={useCase.longDesc} onChange={(e) => props.updateUseCase('longDesc', e, useCase)}/>
                        </FormItem>
                        <h3>Users' Permissions:</h3>
                        <p>Manage the users who can see and access this use case</p>
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            value={useCaseUsersIDs}
                            onChange={(value) => props.handleUseCasePermissionsChanged(useCase, value)}
                        >
                            {props.users.map((user, index) => {
                                return (<Option value={user.userUUID} key={index}>{user.name}</Option>)
                            })}
                        </Select>
                            <Divider/>
                    <Button className={styles.saveBtn} onClick={props.handleUseCasesSave} type="primary">
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
            <h2 style={{display: 'inline'}}>Use Cases List</h2>
            <Tooltip title={text.useCaseList} style={{display: 'block'}}>
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

export default connect(mapStateToProps)(UseCasesController);
