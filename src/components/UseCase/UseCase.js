import React from 'react';
import styles from './UseCase.module.scss';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import UseCaseRouter from '../../routers/UseCaseRouter';


class UseCase extends React.Component {

    navLinkOnClick = (e) => {
        console.log('Link clicked',e);
    };
    render() {
        return (
            <div aria-label={'Use Cases'} className={styles.UseCase}>
                <Row gutter={15} >
                    <Col span={6}>
                        <div className={styles.Sider}>
                            <Menu onClick={this.navLinkOnClick} style={{fontSize: '24px'}} mode="inline">

                                <Menu.Item key="info">
                                    <Link to={this.props.match.url + "/information"}><span><Icon type="notification" aria-label={'Link to Information'}/><span>Information</span></span></Link>
                                </Menu.Item>

                                <Menu.Item key="link">
                                    <Link to={this.props.match.url + "/connections"}><span><Icon type="link" aria-label={'Link to Connections'}/><span>Connections</span></span></Link>
                                </Menu.Item>

                                <Menu.Item key="readings">
                                    <Link to={this.props.match.url + "/readings"}><span><Icon type="dot-chart" aria-label={'Link to Readings'}/><span>Readings</span></span></Link>
                                </Menu.Item>

                                <Menu.Item key="historic-data">
                                    <Link to={this.props.match.url + "/historicData"}><span><Icon type="pie-chart" aria-label={'Link to Historic Data'}/><span>Historic Data</span></span></Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Col>

                    <Col span={18}>
                        <div className={styles.Content}>
                            <UseCaseRouter url={this.props.match.url}/>
                        </div>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default UseCase;
