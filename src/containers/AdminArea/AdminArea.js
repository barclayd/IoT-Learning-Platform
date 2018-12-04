import React, {Component} from 'react';
import styles from './AdminArea.module.scss'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import { Select, Button} from 'antd';

const Option = Select.Option;

class AdminArea extends Component {

   state = {
       useCases: []
   }

    componentDidMount() {
      this.props.onFetchUsers();
      this.props.onFetchUseCases();
    }

    componentWillReceiveProps(nexProps) {
        if(!nexProps.useCasesLoading) {
            this.setState({useCases: nexProps.useCases}, ()=> console.log(this.state))
        }
    }

    handleUserSelected = (useCase, ids) =>{
        const useCases = {...this.state.useCases};
        const useCaseIndex = Object.keys(useCases).findIndex((key)=> key === useCase.id)
        useCases[useCaseIndex] = {...useCase, 
            access: {...useCase.access, listedUsers:ids},
        }
        this.setState({useCases});
    }

    getUseCaseUsers = (useCase) => {
        const users = this.props.users.filter(user => useCase.access.listedUsers.includes(user.userUUID));
        return users;
    }

    handleUseCasesSave = () => {
        this.props.onUpdateUseCase(this.state.useCases);
    }

    render() {

        
        const {useCases, users} = this.props;

        return (
            <div className={styles.AdminArea}>
                <h2>Use Cases Permitted Users</h2>
                {useCases.map((useCase, index) => {
                    const useCaseUsersIDs = this.getUseCaseUsers(useCase).map(user => user.userUUID)
                    return (
                    <div className={styles.UseCase} key={index}>
                        <h3>{useCase.name}</h3>
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            defaultValue={useCaseUsersIDs}
                            onChange={(value) => this.handleUserSelected(useCase, value)}
                        >
                            {users.map((user, index) => {
                                return (<Option value={user.userUUID} key={index}>{user.email}</Option>)
                            })}
                        </Select>
                    </div>);
                })}
                <Button className={styles.saveBtn} onClick={this.handleUseCasesSave}type="primary" loading={this.props.useCasesLoading}>
                    Save
              </Button>
            </div>

        )
    }
}


const mapStateToProps = state => {
    const {users, useCaseFirebase} = state
    return {
       users: users.users, 
       useCases: useCaseFirebase.data,
       useCasesLoading: useCaseFirebase.loading
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


