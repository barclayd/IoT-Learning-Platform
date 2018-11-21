import React from 'react'
import styles from './Toolbar.module.scss';
import { Row, Col, Icon, Avatar} from 'antd';
// import { NavLink } from 'react-router-dom'


const Toolbar = (props) => {
    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <Row type="flex" justify="start" align="middle">
                    <Col span={3}>
                        <div className={styles.Logo}>
                            <a href="/">LOGO</a>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div className={styles.Links}>
                            <ul>
                                <li><a href='/'>User Cases</a></li>
                                <li><a href='/'>Documentation</a></li>
                                <li><a href='/'>About</a></li>
                            </ul>
                        </div>
                    </Col>
                   

                    <Col span={7} offset={5} >
                        <div className={styles.User}>
                            <div className={styles.Actions}>
                                <Icon style={{ fontSize: '18px'}} type="bell" />
                                <Icon  style={{ fontSize: '18px', marginLeft: '25px'}} type="search" />
                            </div>
                            <div className={styles.Info}>
                                <Avatar size={28} icon="user" />
                                <p>Patrick Morrow</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </nav>
        </header>

    );
};

export default Toolbar;
