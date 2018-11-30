import React, {Component} from 'react';
import {updateObject} from "../../store/utility";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {Input, Button, Checkbox, Select, Spin} from 'antd';
import * as actions from '../../store/actions/index';
import * as classes from './Auth.module.css';
const Option = Select.Option;


class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: false,
        clickable: false,
        community: false,
        communityName: 'Newport',
    };

    componentDidMount() {
        console.log(this.props.isAuthenticated);
        if(this.props.isAuthenticated || localStorage.getItem("email") !== null) {
            // this.props.onSetAuthRedirectPath('/');
            this.props.history.push('/');
        }
    };

    handleSelection = (value) => {
        this.setState({
            communityName: value
        })
    };

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup,
                community: false
            }
        });
    };

    inputChangedHandler = (event, formItem ) => {

        const updatedControls = updateObject(this.state.controls, {
            [formItem]: updateObject(this.state.controls[formItem], {
                value: event.target.value,
                // valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });

        this.setState({
            controls: updatedControls
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        if(!this.state.community) {
            this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
        } else {
            const communityAddress = `${this.state.communityName}@gov.uk`;
            this.props.onAuth(communityAddress, this.state.controls.password.value, this.state.isSignup);
        }
        if(this.props.isAuthenticated) {
            this.props.history.push('/');
        }
    };

    render() {
        let user;

        if(this.state.community) {
            user = <Select allowClear={true} defaultValue='Newport' showSearch={true} onSelect={(value) => this.handleSelection(value)}>
                <Option value='Newport'>Newport</Option>
                <Option value='Rhonnda'>Rhonnda Cynon Taff</Option>
            </Select>
        } else {
            user =  <Input
                placeholder={this.state.controls.email.elementConfig.placeholder}
                type={this.state.controls.email.elementConfig.type}
                size='large'
                onChange={(e) => this.inputChangedHandler(e, 'email')}/>
        };
        console.log(this.state.communityName);
        let form = (
            <div style={{padding: '10px'}}>
                {user}
            <Input
                placeholder={this.state.controls.password.elementConfig.placeholder}
                type={this.state.controls.password.elementConfig.type}
                size='large'
                onChange={(e) => this.inputChangedHandler(e, 'password')}/>
            </div>
        );

        let communityLogin;
        communityLogin = !this.state.isSignup ? <p>Community Account <Checkbox onClick={() => this.setState({community: !this.state.community})} value='Community account'/></p> : null;

        const errorMessageLookUp = {
            'INVALID_EMAIL': 'Email is not registered to an account',
            'USER_DISABLED': 'This user account has been disabled',
            'USER_NOT_FOUND': 'User not found',
            'TOKEN_EXPIRED': 'Please sign-in again to refresh credentials',
            'INVALID_PASSWORD': 'Username/password combination hasn\'t been found',
            'EMAIL_NOT_FOUND': 'There is no user record corresponding to this email. Sign up to create an account',
            'EMAIL_EXISTS': 'Email is already registered to an account. Please login in'
        };

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <div className={classes.errorMessage}>
                    <p>{errorMessageLookUp[this.props.error.message.toString()]}</p>
                </div>
            )
        }

        let authRedirect = null;
        if(this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirect}/>
        }

        let clickable;
        console.log(this.state.community);
        if (this.state.community){
            clickable = (this.state.controls.password.value.length > 5 && this.state.communityName !== null);
        } else {
            clickable = (this.state.controls.password.value.length > 5 && this.state.controls.email.value.length > 5);
        }

        let loading;
        loading = this.props.loading ? <Spin size='large' /> :
            <form onSubmit={this.submitHandler} className={classes.Form}>
            {form}
            <Button type='primary' htmlType='submit' disabled={!clickable} size='large'>SUBMIT</Button>
            </form>;

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                {this.state.isSignup ? <h2>SIGN UP</h2> : <h2>SIGN IN</h2>}
                {communityLogin}
                {loading}
                <Button type='danger' onClick={this.switchAuthModeHandler} size='large'>{this.state.isSignup ? 'SWITCH TO SIGN-IN' : 'SWITCH TO SIGN-UP'}</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirect: state.auth.authRedirect
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
