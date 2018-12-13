import React from 'react';
import styles from './UseCase.module.scss';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import UseCaseRouter from '../../routers/UseCaseRouter';
import {connect} from 'react-redux';


class UseCase extends React.Component {

    render() {
        const useCases = this.props.useCases;
            let useCase;
            for (let i = 0; i < useCases.length; i++) {
                if (useCases[(i)].id === this.props.match.params.id) {
                    useCase = useCases[(i)];
                }
            }


            return (
                <div aria-label={'Use Cases'} className={styles.UseCase}>
                    <Row gutter={15}>
                        <Col span={6}>
                            <div className={styles.Sider}>
                                <Menu style={{fontSize: '24px'}} mode="inline">

                                    <Menu.Item key="info">
                                        <Link to={this.props.match.url + "/information"}><span><Icon type="notification"
                                                                                                     aria-label={'Link to Information'}/><span>Information</span></span></Link>
                                    </Menu.Item>

                                    <Menu.Item key="link">
                                        <Link to={this.props.match.url + "/configure-arduino"}><span><Icon type="link"
                                                                                                     aria-label={'Link to Connections'}/><span>Configure Your Arduino</span></span></Link>
                                    </Menu.Item>

                                    <Menu.Item key="readings">
                                        <Link to={this.props.match.url + "/readings"}><span><Icon type="dot-chart"
                                                                                                  aria-label={'Link to Readings'}/><span>Readings</span></span></Link>
                                    </Menu.Item>

                                    <Menu.Item key="historic-data">
                                        <Link to={this.props.match.url + "/historicData"}><span><Icon type="pie-chart"
                                                                                                      aria-label={'Link to Historic Data'}/><span>Historic Data</span></span></Link>
                                    </Menu.Item>
                                    { localStorage.getItem("role") !== 'Community' ? <Menu.Item key="feedback">
                                        <Link to={this.props.match.url + "/feedback"}><span><Icon type="message"
                                                                                                  aria-label={'Link to Feedback'}/><span>Feedback</span></span></Link>
                                    </Menu.Item> : null}
                                    { localStorage.getItem("role") === 'Community' ? <Menu.Item key="forum">
                                        <Link to={this.props.match.url + "/forum"}><span><Icon type="message"
                                                                                                  aria-label={'Link to Forum'}/><span>Forum</span></span></Link>
                                    </Menu.Item> : null}
                                    <Menu.Item key="settings">
                                        <Link to={this.props.match.url + "/settings"}><span><Icon type="setting"
                                                                                                      aria-label={'Link to Settings'}/><span>Settings</span></span></Link>
                                    </Menu.Item>
                                </Menu>
                            </div>
                        </Col>

                        <Col span={18}>
                            <div className={styles.Content}>
                                <UseCaseRouter url={this.props.match.url} useCase={useCase}/>
                            </div>
                        </Col>
                    </Row>
                </div>

            )
    }
}

const mapStateToProps = state => {
    return {
        useCases: state.useCaseFirebase.data
    }
};

export default connect(mapStateToProps)(UseCase);
