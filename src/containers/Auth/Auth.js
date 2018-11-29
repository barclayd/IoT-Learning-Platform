import React, {Component} from 'react';
import {updateObject} from "../../store/utility";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';


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
        formIsValid: false,
        isSignup: false
    };

    componentDidMount() {
        if(!this.props.buildingBurger && this.props.authRedirect !== '/') {
            this.props.onSetAuthRedirectPath('/');
        }
    };

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup
            }
        });
    };

    inputChangedHandler = (event, controlName) => {

        // const updatedControls = updateObject(this.state.controls, {
        //     [controlName]: updateObject(this.state.controls[controlName], {
        //         value: event.target.value,
        //         valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
        //         touched: true
        //     })
        // });

        // this.setState({
        //     controls: updatedControls
        // })
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    };

    render() {
        const formElementsArray = [];
        for(let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        // let form = formElementsArray.map(formElement => (
            {/*<Input*/}
                {/*key={formElement.id}*/}
                {/*elementType={formElement.config.elementType}*/}
                {/*elementConfig={formElement.config.elementConfig}*/}
                {/*value={formElement.config.value}*/}
                {/*invalid={!formElement.config.valid}*/}
                {/*shouldValidate={formElement.config.validation}*/}
                {/*touched={formElement.config.touched}*/}
                {/*changed={(event) => this.inputChangedHandler(event, formElement.id)} />*/}
        // ));
        if(this.props.loading) {
            // ant.d spinner goes here
        }

        const errorMessageLookUp = {
            'INVALID_EMAIL': 'Email is not registered to an account',
            'USER_DISABLED': 'This user account has been disabled',
            'USER_NOT_FOUND': 'User not found',
            'TOKEN_EXPIRED': 'Please sign-in again to refresh credentials',
            'INVALID_PASSWORD': 'Username/password combination hasn\'t been found',
            'EMAIL_NOT_FOUND': 'There is no user record corresponding to this email',
            'EMAIL_EXISTS': 'Email is already registered to an account. Please login in'
        };

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <div>
                    <p>{errorMessageLookUp[this.props.error.message.toString()]}</p>
                </div>
            )
        }

        let authRedirect = null;
        // if(this.props.isAuthenticated) {
        //     authRedirect = <Redirect to={this.props.authRedirect}/>
        // }

        return (
            <div>
                {authRedirect}
                {errorMessage}
                {this.state.isSignup ? <h2>SIGN UP</h2> : <h2>SIGN IN</h2>}
                <form onSubmit={this.submitHandler}>
                    {/*{form}*/}
                    {/*<Button btnType='Success'>SUBMIT</Button>*/}
                </form>
                {/*<Button btnType='Danger' clicked={this.switchAuthModeHandler}>SWITCH TO {this.state.isSignup ? 'SIGN-IN' : 'SIGN-UP'}</Button>*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
