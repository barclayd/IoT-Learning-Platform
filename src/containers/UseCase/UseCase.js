import React from 'react';
import styles from './UseCase.module.scss';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';


class UseCase extends React.Component {

    navLinkOnClick = (e) => {
        console.log('Link clicked',e)
    }

    render() {
        return (
            <div className={styles.UseCase}>
                <Row gutter={15} >
                    <Col span={6}>
                        <div className={styles.Sider}>
                            <Menu onClick={this.navLinkOnClick} style={{fontSize: '24px'}} mode="inline">
                                
                                <Menu.Item key="info">
                                    <span><Icon type="notification" /><span>Information</span></span>
                                </Menu.Item>
                            
                                <Menu.Item key="link">
                                    <span><Icon type="link" /><span>Connections</span></span>
                                </Menu.Item>

                                <Menu.Item key="readings">
                                    <span><Icon type="dot-chart" /><span>Readings</span></span>
                                </Menu.Item>

                                <Menu.Item key="historic-data">
                                    <span><Icon type="pie-chart" /><span>Historic Data</span></span>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Col>

                    <Col span={18}>
                        <div className={styles.Content}>
                           Content Here
                        </div>
                    </Col>
                </Row>
            </div>
           
        )
    }
}

export default UseCase;