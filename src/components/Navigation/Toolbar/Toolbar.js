import React from 'react'
import styles from './Toolbar.module.scss';
import { Row, Col, Icon, Avatar} from 'antd';
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
// import { NavLink } from 'react-router-dom'


const Toolbar = (props) => {
    const userAuthenticatedCheck = () => {
        console.log('This check was called');
        let path;
        path = localStorage.getItem("email") !== null ?  '/logout' : '/login';
        console.log(path);
        props.history.push(path);
    };

 const styleUsername = (email) => {
     const accountType = email.split('@').pop();
     const communityName = email.substr(0, email.indexOf('@'));
     const titleDisplayName = communityName.split(' ').map((letter) => {
         return letter.replace(communityName[0], communityName[0].toUpperCase());
     });
     console.log(communityName);
     return (accountType === 'gov.uk') ? `${titleDisplayName} Community` : email;
 };

    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <Row type="flex" justify="start" align="middle">
                    <Col span={3}>
                        <div className={styles.Logo}>
                            <a href="/usecases" aria-label={'logo'}>LOGO</a>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div className={styles.Links}>
                            <ul>
                                <li aria-label={'Link to User Cases'}><a href='/usecases'>User Cases</a></li>
                                <li aria-label={'Link to Documentation'}><a href='/usecases'>Documentation</a></li>
                                <li aria-label={'Link to About'}><a href='/'>About</a></li>
                            </ul>
                        </div>
                    </Col>


                    <Col span={7} offset={5} >
                        <div className={styles.User}>
                            <div className={styles.Actions}>
                                <Icon style={{ fontSize: '18px'}} type="bell" aria-label={'notification icon'}/>
                                <Icon  style={{ fontSize: '18px', marginLeft: '25px'}} type="search" aria-label={'search field'} />
                            </div>
                            <div className={styles.Info} onClick={() => userAuthenticatedCheck()} style={{cursor: 'pointer'}}>
                                <Avatar size={28} icon="user" aria-label={'avatar picture'}/>
                                <p aria-label={'username'} style={{fontStyle: 'italic'}}>{localStorage.getItem("email") ? styleUsername(localStorage.getItem("email")) : 'Login'}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </nav>
        </header>
    );
};

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
};

export default withRouter(connect(mapStateToProps)(Toolbar));
