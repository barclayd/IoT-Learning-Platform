import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import {Form, Input, Select, Radio, Button} from "antd";
import {updateObject} from "../../store/utility";

class UserProfile extends Component {

    componentDidMount() {
        this.props.onFetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.loading) {
            this.setState({users: nextProps.users})
        }
    }

    updateForm = (settingName, settingValue) => {
        const updatedForm = updateObject(this.state.user, {
            [settingName]: settingValue.target.value
        } );
        this.setState({
            user: updatedForm
        });
    };

    updateFormNumber = (settingName, settingValue) => {
        const updatedForm = updateObject(this.state.user, {
            [settingName]: settingValue
        } );
        this.setState({
            user: updatedForm
        });
    };

    radioButtonForm = (value) => {
        const setting = value.target.value;
        const updatedForm = updateObject(this.state.user, {
            role: setting
        } );
        this.setState({
            user: updatedForm
        });
    };

    submitSettings() {
        console.log(this.state.user);
    }


    render() {
        const RadioGroup = Radio.Group;
        const RadioButton = Radio.Button;

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

        let userId = localStorage.getItem("userId");
        let userName;
        let userEmail;
        const userDetails = this.props.users.map((user, index) => {
            if(user.userUUID === userId) {
                [userName, userEmail] = [user.name, user.email];
                return (
                    <React.Fragment>
                    <FormItem {...formItemLayout} label={'User Name'} key={index}>
                        <Input defaultValue={user.name} style={{width: '100%'}} onChange={(e) => this.updateForm('name', e)}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label={'User Email'} key={index+1}>
                        <p style={{width: '100%'}}>{user.email}</p>
                     </FormItem>
                        <FormItem {...formItemLayout} label={'Profile Picture'} key={index+2}>
                            <Select defaultValue={user.profileImage} style={{width: '100%'}} placeholder='Please select a sensor type' onChange={(e) => this.updateFormNumber('profileImage', e)}>
                                <Option value='road.jpg'>Road</Option>
                                <Option value='beach.jpg'>Beach</Option>
                            </Select>
                        </FormItem>
                        <FormItem {...formItemLayout} label={'Account held since'} key={index+3}>
                            <p style={{width: '100%'}}>{user.accountCreatedDate}</p>
                        </FormItem>
                    </React.Fragment>
                )
            }
        });
        const userRole = this.props.users.map((user, index) => {
            if(user.userUUID === userId && (localStorage.getItem('role') === 'Trainer')) {
                return (
                    <FormItem {...formItemLayout} label='Role'>
                        <RadioGroup defaultValue={user.role} style={{width: '100%'}} onChange={(e) => this.radioButtonForm(e)}>
                            <RadioButton value="Apprentice">Apprentice</RadioButton>
                            <RadioButton value="Trainer">Trainer</RadioButton>
                            <RadioButton value="Community">Community</RadioButton>
                        </RadioGroup>
                    </FormItem>
                )}});

        let button = <Button type="primary" htmlType="submit" onClick={() => this.submitSettings()} loading={this.props.loading}>Submit</Button>;


        return (
        <React.Fragment>
            <h1>User Profile</h1>
            <h3>Welcome, {userName !== null ? userName : localStorage.getItem('email')}</h3>
            {userDetails}
            {userRole}
            {button}
        </React.Fragment>
    )
    }
}

const mapStateToProps = state => {
    const {users} = state;
    return {
        users: users.users,
        loading: users.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsersData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
