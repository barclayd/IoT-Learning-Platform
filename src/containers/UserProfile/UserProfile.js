import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import {Form, Input, Select, Radio, Button, notification, Tabs, Divider} from "antd";
import {updateObject} from "../../store/utility";

let id;
const TabPane = Tabs.TabPane;

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

    savedSettingsNotification = (type) => {
        notification[type]({
            message: 'Settings successfully saved!',
            description: `Your profile has been successfully updated`,
        });
    };


    submitSettings() {
        let updateObject = {...this.state.user};
        this.props.onUpdateProfile(updateObject, id);
        if(this.props.saved) {
            this.savedSettingsNotification('success');
        }
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
        let found;
        const userDetails = this.props.users.map((user, index) => {
            if(user.userUUID === userId) {
                [userName, userEmail, id] = [user.name, user.email, user.id];
                return (
                    <div>
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
                    </div>
                )
            }
        });
        const userRole = this.props.users.map((user, index) => {
            if(user.userUUID === userId && (localStorage.getItem('role') === 'Trainer')) {
                return (
                    <FormItem {...formItemLayout} label='Account Type' key={user.uuid}>
                        <RadioGroup defaultValue={user.role} style={{width: '125%'}} onChange={(e) => this.radioButtonForm(e)}>
                            <RadioButton value="Apprentice">Apprentice</RadioButton>
                            <RadioButton value="Trainer">Trainer</RadioButton>
                            <RadioButton value="Community">Community</RadioButton>
                        </RadioGroup>
                    </FormItem>
                )} else if (user.userUUID === userId && (localStorage.getItem('role') === 'Apprentice' || localStorage.getItem('role') === 'Community')){
                return (
                    <FormItem {...formItemLayout} label='Account Type'>
                        <RadioGroup defaultValue={user.role} style={{width: '100%'}} onChange={(e) => this.radioButtonForm(e)}>
                            <RadioButton value={user.role}>{user.role}</RadioButton>
                        </RadioGroup>
                    </FormItem>)
            }});

        let button = <Button type="primary" htmlType="submit" onClick={() => this.submitSettings()} loading={this.props.updateLoading}>Save</Button>;


        return (
        <React.Fragment>
            <h1>User Profile</h1>
            <h3>Welcome, {userName !== null ? userName : localStorage.getItem('email')}</h3>
            <Tabs defaultActiveKey='1' tabPosition='left'>
                <TabPane tab="User Details" key="1">
                    {userDetails}
                </TabPane>
            <TabPane tab="Account Role" key="4">
            {userRole}
            </TabPane>
            </Tabs>
            <Divider />
            {button}
        </React.Fragment>
    )
    }
}

const mapStateToProps = state => {
    const {users} = state;
    const {userProfile} = state;
    return {
        users: users.users,
        loading: users.loading,
        updateLoading: userProfile.loading,
        saved: userProfile.saved
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsersData()),
        onUpdateProfile: (data, id) => dispatch(actions.updateProfile(data, id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
