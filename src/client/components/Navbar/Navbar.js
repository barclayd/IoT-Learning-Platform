import React from 'react'
import styles from './Navbar.module.css';
import { Row, Col, Icon} from 'antd';

const Navbar = (props) => {

    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <Row type="flex" justify="start">
                    <Col span={4}>
                        <div className={styles.Logo}>
                            <a href="/">LOGO</a>
                        </div>
                    </Col>

                    <Col span={14}>
                        <div className={styles.Links}>
                            <ul>
                                <li><a href='#'>User Cases</a></li>
                                <li><a href='#'>Documentation</a></li>
                                <li><a href='#'>About</a></li>
                            </ul>
                        </div>
                    </Col>
                   

                    <Col span={6}>
                        <div className={styles.User}>
                            <div className={styles.Actions}>
                                <Icon type="bell" />
                                <Icon type="search" />
                            </div>
                            <div className={styles.Info}>
                                <p>Patrick Morrow</p>
                                
                            </div>
                        </div>
                    </Col>
                  
                </Row>
            </nav>
        </header>
        
    );



} 

export default Navbar;