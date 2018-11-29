import React from 'react'
import styles from './Toolbar.module.scss';
import { Row, Col, Icon, Avatar} from 'antd';
import {connect} from 'react-redux'
// import { NavLink } from 'react-router-dom'


const Toolbar = (props) => {

    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <Row type="flex" justify="start" align="middle">
                    <Col span={3}>
                        <div className={styles.Logo}>
                            <a href="/" aria-label={'logo'}>LOGO</a>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div className={styles.Links}>
                            <ul>
                                <li aria-label={'Link to User Cases'}><a href='/'>User Cases</a></li>
                                <li aria-label={'Link to Documentation'}><a href='/'>Documentation</a></li>
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
                            <div className={styles.Info}>
                                <Avatar size={28} icon="user" aria-label={'avatar picture'}/>
                                <p aria-label={'username'}>Howdy, {localStorage.getItem("email") ? localStorage.getItem("email") : `Guest`}</p>
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

export default connect(mapStateToProps)(Toolbar);
