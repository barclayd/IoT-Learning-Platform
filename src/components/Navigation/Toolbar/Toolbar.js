import React from 'react'
import styles from './Toolbar.module.scss';
import { Row, Col, Icon, Avatar} from 'antd';
import {connect} from 'react-redux'
import {Link, withRouter} from "react-router-dom";
// import { NavLink } from 'react-router-dom'


const Toolbar = (props) => {
    const userAuthenticatedCheck = () => {
        let path;
        path = localStorage.getItem("email") !== null ?  '/logout' : '/login';
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

    const login = <Link to='/logout'>Login</Link>;
    const logout = <Link to='/logout'>logout?</Link>;
    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <Row type="flex" justify="start" align="middle">
                    <Col span={3}>
                        <div className={styles.Logo}>
                            <Link to='/' aria-label={'Logo'}><img alt='Logo' aria-label='Logo' style={{height: '45px', width: '45px'}} src='/images/logo.png'/></Link>
                            {/*<Link to='/' aria-label={'Logo'}>LOGO</Link>*/}

                        </div>
                    </Col>

                    <Col span={8}>
                        <div className={styles.Links}>
                            <ul>
                                <li aria-label={'Link to User Cases'}><Link to='/usecases'>Usecases</Link></li>
                                <li aria-label={'Link to Documentation'}><Link to='/documentation'>Documentation</Link></li>
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
                                <div className={styles.login} aria-label={'username'}>{localStorage.getItem("email") ? <div>{styleUsername(localStorage.getItem("email"))}, {logout}</div> : login}</div>
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
