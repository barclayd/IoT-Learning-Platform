import React, {Component} from 'react';
import styles from './AdminArea.module.scss'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {updateObject} from "../../store/utility";
import {Menu, Icon, Row, Col,  notification} from 'antd';
import {Link, Switch, Route} from 'react-router-dom';
import UseCasesController from './UseCasesController/UseCasesController';
import Users from './Users/Users';
import Sensors from './Sensors/Sensors';

const key = 'updatable';
class AdminArea extends Component {

   state = {
       useCases: null
   };

    componentDidMount() {
      this.props.onFetchUsers();
      this.props.onFetchUseCases();
    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if(!nextProps.useCasesLoading) {
            this.setState({
                useCases: nextProps.useCases,
                users: nextProps.users.filter(user => user.role !== 'Community'),
                community: nextProps.users.filter(user => user.role === 'Community')
                // users: nextProps.users
            })
        }
    }

    handleUseCasePermissionsChanged = (useCase, ids) =>{
        const useCases = {...this.state.useCases};
        const useCaseIndex = Object.keys(useCases).findIndex((key)=> key === useCase.id);
        useCases[useCaseIndex] = {...useCase,
            access: {...useCase.access, listedUsers:ids},
        };
        this.setState({useCases});
    };

    getUseCaseUsers = (useCase) => {
        return this.props.users
            .filter(user => useCase.access.listedUsers.includes(user.userUUID));
    };


    savedSettingsNotification = (type) => {
        notification[type]({
            message: 'Successful!',
            description: `The changes you made has been successfully saved.`,
        });
    };

    updateUseCase = (key, event, useCase) => {
        const useCases = {...this.state.useCases};
        const useCaseIndex = Object.keys(useCases).findIndex((key)=> key === useCase.id);
        useCases[useCaseIndex] = {...useCase,
            [key]: event.target.value
        };
        this.setState({useCases});
    };

    handleUseCasesSave = () => {
        this.props.onUpdateUseCase(this.state.useCases);
        if(this.props.saved){
            this.savedSettingsNotification('success');
        }
    };

    onMenuItemClicked = ({ item, key, keyPath }) => {
        console.log(item, key, keyPath )
    };

    deletedUseCaseNotification = (type) => {
        notification[type]({
            key,
            message: 'Use Case Successfully Deleted',
            description: `The ${this.props.lastDeletedUseCase} Use Case was successfully deleted. You can view all other remaining use cases here and make changes to them.`,
        });
    };

    updateForm = (settingName, settingValue, userId, user) => {

        const users = {...this.state.users};
        // const userIndex = Object.keys(users).findIndex((id)=> id === userId);
        console.log(userId);
        // console.log(userIndex);

        users[userId] = {...user,
            [settingName]: settingValue.target.value
        };

        this.setState({
            users
        });
    };


    submitSettings = () => {

        const updateObject = {...this.state.users};
        const communitiesObject = {...this.state.community};

        console.log(Object.values(updateObject));
        console.log(Object.values(communitiesObject));
        let masterarray = Object.values(updateObject).concat(Object.values(communitiesObject));

        console.log(masterarray);
        // const fullObject = [...this.state.community, ...updateObject];
        // console.log(fullObject);

        this.props.onUpdateUsers(masterarray);
        if(this.props.saved) {
            this.savedSettingsNotification('success');
        }
    };

    render() {
        const {users} = this.props;
        const filteredUsers = this.props.users.filter(user => user.role !== 'Community');
        return (
            <div className={styles.AdminArea}>
                <div aria-label={'Use Cases'} className={styles.UseCase}>
                    <Row gutter={15}>
                        <Col span={6}>
                            <div className={styles.Sider}>
                                <Menu  onClick={this.onMenuItemClicked} style={{fontSize: '24px'}} mode="inline">

                                    <Menu.Item key="useCasesController">
                                        <Link to="/admin-area"><span><Icon type="lock" aria-label={'Link to Information'}/>
                                            <span>Use Cases Controller</span></span>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="sensors">
                                        <Link to="/sensors"><span><Icon type="line-chart" aria-label={'Link to Information'}/>
                                            <span>Sensors</span></span>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="users">
                                        <Link to="/users"><span><Icon type="team" aria-label={'Link to Information'}/>
                                            <span>Users</span></span>
                                        </Link>
                                    </Menu.Item>
                                </Menu>
                            </div>
                        </Col>

                        <Col span={18}>
                            <div className={styles.Content}>

                                 <Switch>
                                    <Route path="/admin-area"
                                    render={ props => <UseCasesController
                                        useCases={this.state.useCases}
                                        users={users}
                                        updateUseCase={this.updateUseCase}
                                        getUseCaseUsers={this.getUseCaseUsers}
                                        handleUseCasePermissionsChanged={this.handleUseCasePermissionsChanged}
                                        handleUseCasesSave={this.handleUseCasesSave}
                                        deletedUseCaseNotification = {this.deletedUseCaseNotification}
                                     />} />
                                    <Route path="/sensors"
                                           render={ props => <Sensors
                                               useCases={this.state.useCases}
                                               users={users}
                                               updateUseCase={this.updateUseCase}
                                               getUseCaseUsers={this.getUseCaseUsers}
                                               handleUseCasePermissionsChanged={this.handleUseCasePermissionsChanged}
                                               handleUseCasesSave={this.handleUseCasesSave}
                                               deletedUseCaseNotification = {this.deletedUseCaseNotification}
                                           />} />
                                     <Route path="/users"
                                            render={ props => <Users
                                                useCases={this.state.useCases}
                                                users={this.state.users}
                                                updateUseCase={this.updateUseCase}
                                                getUseCaseUsers={this.getUseCaseUsers}
                                                handleUseCasePermissionsChanged={this.handleUseCasePermissionsChanged}
                                                handleUseCasesSave={this.handleUseCasesSave}
                                                deletedUseCaseNotification = {this.deletedUseCaseNotification}
                                                radioButtonForm={this.radioButtonForm}
                                                updateForm={this.updateForm}
                                                submitSettings={this.submitSettings}
                                                name={this.state.name}
                                                role={this.state.role}
                                            />} />
                            </Switch>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        )
    }
}


const mapStateToProps = state => {
    const {users, useCaseFirebase} = state;
    return {
        users: users.users,
        useCases: useCaseFirebase.data,
        loading: useCaseFirebase.loading,
        saved: useCaseFirebase.saved,
        deleted: state.useCaseFirebase.deleted,
        lastDeletedUseCase: state.useCaseFirebase.deletedUseCase
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsersData()),
        onFetchUseCases: () => dispatch(actions.fetchUseCaseData()),
        onUpdateUseCase: (newUseCases) => dispatch(actions.updateUseCaseData(newUseCases)),
        onUpdateUsers: (data) => dispatch(actions.updateProfile(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminArea);


