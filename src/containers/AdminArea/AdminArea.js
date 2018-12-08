import React, {Component} from 'react';
import styles from './AdminArea.module.scss'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {updateObject} from "../../store/utility";
import {Menu, Icon, Row, Col,  notification} from 'antd';
import {Link, Switch, Route} from 'react-router-dom';
import UseCasesController from './UseCasesController/UseCasesController';


class AdminArea extends Component {

   state = {
       useCases: null
   };

    componentDidMount() {
      this.props.onFetchUsers();
      this.props.onFetchUseCases();
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.useCasesLoading) {
            this.setState({useCases: nextProps.useCases})
        }
    }

    handleUseCasePermissionsChanged = (useCase, ids) =>{
        const useCases = {...this.state.useCases};
        const useCaseIndex = Object.keys(useCases).findIndex((key)=> key === useCase.id)
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
        const useCaseIndex = Object.keys(useCases).findIndex((key)=> key === useCase.id)
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
    }

    render() {

        const {users} = this.props;
        return (
            <div className={styles.AdminArea}>
                <div aria-label={'Use Cases'} className={styles.UseCase}>
                    <Row gutter={15}>
                        <Col span={6}>
                            <div className={styles.Sider}>
                                <Menu  onClick={this.onMenuItemClicked} selectedKeys={['useCasesController']} style={{fontSize: '24px'}} mode="inline">

                                    <Menu.Item key="useCasesController">
                                        <Link to="/admin-area"><span><Icon type="lock" aria-label={'Link to Information'}/>
                                            <span>Use Cases Controller</span></span>
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
                                     />}
                                    
                                    />
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
        saved: useCaseFirebase.saved
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsersData()),
        onFetchUseCases: () => dispatch(actions.fetchUseCaseData()),
        onUpdateUseCase: (newUseCases) => dispatch(actions.updateUseCaseData(newUseCases))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminArea);


