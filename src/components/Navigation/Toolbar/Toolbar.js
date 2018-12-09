import React from 'react'
import styles from './Toolbar.module.scss';
import { Row, Col, Icon, Avatar} from 'antd';
import {connect} from 'react-redux'
import {Link, withRouter} from "react-router-dom";

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
     return (accountType === 'gov.uk') ? `${titleDisplayName} Community` : email;
 };

    const styleAvatar = (email) => {
        if(email !== null) {
            const letter = email.charAt(0).toUpperCase();
            return <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{letter}</Avatar>
        } else {
            return  <Avatar size={28} icon="user" aria-label={'avatar picture'} />
        }
    };

    const login = <Link to='/logout'>Login</Link>;
    const logout = <Link to='/logout'>logout?</Link>;

    const admin = (localStorage.getItem('role') === 'Trainer' || props.role === 'Trainer')  ? <li  aria-label={'Link to Admin Area'}><Link style={{color:'red', border: '3px dashed #ccc', padding: '10px', textAlign: 'center' }} to='/admin-area'>Admin Area</Link></li> : null;

    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <Row type="flex" justify="start" align="middle">
                    <Col span={3}>
                        <div className={styles.Logo}>
                            <Link exact to='/' aria-label={'Logo'}><img alt='Logo' aria-label='Logo' style={{height: '45px', width: '45px'}} src='/images/logo.png'/></Link>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div className={styles.Links}>
                            <ul>
                                <li aria-label={'Link to User Cases'}><Link to='/usecases'>Usecases</Link></li>
                                <li aria-label={'Link to Documentation'}><Link to='/documentation'>Documentation</Link></li>
                                <li aria-label={'Link to About'}><Link to='/about'>About</Link></li>
                                {admin}
                            </ul>
                        </div>
                    </Col>

                    <Col span={7} offset={5} >
                        <div className={styles.User}>
                            <div className={styles.Actions}>
                                <Icon style={{ fontSize: '18px'}} type="bell" aria-label={'notification icon'}/>
                                <Icon  style={{ fontSize: '18px', marginLeft: '25px'}} type="search" aria-label={'search field'} />
                            </div>
                            <div className={styles.Info} style={{cursor: 'pointer'}}>
                                <Link to='/profile'>{styleAvatar(localStorage.getItem("email"))}</Link>
                                <br />
                                <div onClick={() => userAuthenticatedCheck()} style={{cursor: 'pointer'}}>
                                    <div style={{padding: '10px'}} className={styles.login} aria-label={'username'}>{localStorage.getItem("email") ? <div>{styleUsername(localStorage.getItem("email"))}, {logout}</div> : login}</div>
                                </div>
                                <br />
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
        email: state.auth.email,
        role: state.auth.role
    }
};

export default withRouter(connect(mapStateToProps)(Toolbar));
