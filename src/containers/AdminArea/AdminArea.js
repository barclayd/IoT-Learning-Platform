import React, {Component} from 'react';
import styles from './AdminArea.module.scss'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { Select, Button} from 'antd';

const Option = Select.Option;

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

    handleUserSelected = (useCase, ids) =>{
        const useCases = {...this.state.useCases};
        const useCaseIndex = Object.keys(useCases).findIndex((key)=> key === useCase.id)
        useCases[useCaseIndex] = {...useCase,
            access: {...useCase.access, listedUsers:ids},
        };
        this.setState({useCases});
    };

    getUseCaseUsers = (useCase) => {
        return this.props.users.filter(user => useCase.access.listedUsers.includes(user.userUUID));
    };

    handleUseCasesSave = () => {
        this.props.onUpdateUseCase(this.state.useCases);
    };

    render() {


        const {useCases} = this.state;
        let content = (<div> No Use Cases</div>);
        if (useCases){
            content =
            (
                <div>
                {Object.keys(useCases).map((useCaseKey, index) => {
                    const useCase = useCases[useCaseKey];
                    const useCaseUsersIDs = this.getUseCaseUsers(useCase).map(user => user.userUUID);
                    return (
                    <div className={styles.UseCase} key={index}>
                        <h3>{useCase.name}</h3>
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            value={useCaseUsersIDs}
                            onChange={(value) => this.handleUserSelected(useCase, value)}
                        >
                            {this.props.users.map((user, index) => {
                                return (<Option value={user.userUUID} key={index}>{user.name}</Option>)
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
        return (
            <div className={styles.AdminArea}>
                <h2>Use Cases Permitted Users</h2>
                {content}
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


