import React, {Component} from 'react';
import styles from './AdminArea.module.scss'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {Menu, Icon, Row, Col, notification, Tooltip} from 'antd';
import {Link, Switch, Route} from 'react-router-dom';
import UseCasesController from './UseCasesController/UseCasesController';
import Users from './Users/Users';
import Sensors from './Sensors/Sensors';
import NewUseCase from './NewUseCase/NewUseCase'

const key = 'updatable';
let selectedUserName;
class AdminArea extends Component {

   state = {
       useCases: null
   };

    componentDidMount() {
      this.props.onFetchUsers();
      this.props.onFetchUseCases();
      this.props.onFetchSensors();
    }


    componentWillReceiveProps(nextProps) {
        if(!nextProps.useCasesLoading) {
            this.setState({
                useCases: nextProps.useCases,
                users: nextProps.users.filter(user => user.role !== 'Community'),
                community: nextProps.users.filter(user => user.role === 'Community'),
                allUsers: nextProps.users,
                sensors: nextProps.sensors
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

    getUserUseCase = (user) => {
        return this.state.useCases
            .filter(useCase => useCase.access.listedUsers.includes(user.userUUID));
    };


    savedSettingsNotification = (type) => {
        notification[type]({
            message: 'Settings Updated',
            description: `The changes you made have been successfully saved.`,
            duration: 1.5
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
            duration: 1.5
        });
    };

    deletedUserNotification = (type) => {
        notification[type]({
            key,
            message: 'User Successfully Deleted',
            description: `${selectedUserName} was successfully deleted. You can view all other remaining users here and make changes to them.`,
            duration: 1.5
        });
    };

    updateForm = (settingName, settingValue, userId, user) => {

        const users = {...this.state.users};
        users[userId] = {...user,
            [settingName]: settingValue.target.value
        };

        this.setState({
            users
        });
    };

    updateSensors = (settingName, settingValue, sensorId) => {
        let sensor = settingValue.target.value;
        console.log(sensor);
        console.log((this.state.sensors[0].sensorName));
        const sensorIndex = Object.keys(this.state.sensors).filter((sensor) => sensor === sensorId);
        console.log(sensorIndex);
        // sensors[sensorId] = {...sensor,
        //     [settingName]: settingValue.target.value
        // };
        //
        // this.setState({
        //     sensors
        // });
    };


    submitSettings = () => {

        const updateObject = {...this.state.users};
        const communitiesObject = {...this.state.community};

        let masterarray = Object.values(updateObject).concat(Object.values(communitiesObject));

        this.props.onUpdateUsers(masterarray);
        if(this.props.saved) {
            this.savedSettingsNotification('success');
        }
    };

    confirmDelete = (e) => {
        const id = this.state.allUsers.findIndex(user => user.id === e);
        const userName = this.state.allUsers.filter(user => user.id === e);

        selectedUserName = userName[0].name;
        this.props.onDeleteUsers(id, selectedUserName);
        if(this.props.deletedUser){
            this.deletedUserNotification('success');
        }
    };

    cancelDelete = (e) =>  {
        console.log(e);
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
                                    <Menu.Item key="new-use-case">
                                        <Link to="/new-use-case"><span><Icon type="plus-circle" aria-label={'Link to Information'}/>
                                            <span>Add a New Use Case</span></span>
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
                                               sensors={this.state.sensors}
                                               updateSensors={this.updateSensors}
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
                                                usersUseCases={this.getUserUseCase}
                                                confirmDelete={this.confirmDelete}
                                                cancelDelete={this.cancelDelete}
                                            />} />
                                     <Route path="/new-use-case"
                                            render={ props => <NewUseCase
                                                useCases={this.props.useCases}
                                                users={this.props.users}
                                                sensors={this.props.sensors}
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
        lastDeletedUseCase: state.useCaseFirebase.deletedUseCase,
        sensors: state.sensors.sensors,
        deletedUser: users.deleted,
        deletedUserName: users.deletedUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsersData()),
        onFetchUseCases: () => dispatch(actions.fetchUseCaseData()),
        onUpdateUseCase: (newUseCases) => dispatch(actions.updateUseCaseData(newUseCases)),
        onUpdateUsers: (data) => dispatch(actions.updateProfile(data)),
        onFetchSensors: () => dispatch(actions.fetchSensorsData()),
        onDeleteUsers: (id, userName) => dispatch(actions.deleteUser(id, userName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminArea);


