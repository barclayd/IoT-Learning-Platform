import React from 'react';
import styles from './UseCase.module.scss';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import UseCaseRouter from '../../routers/UseCaseRouter';
import {connect} from 'react-redux';


class UseCase extends React.Component {
    
    navLinkOnClick = (e) => {
        console.log('Link clicked',e);
        
    };
    
    // useCaseData = (id) => {
    //     const useCases = this.props.useCases;
    //     for(var i = 0; i < useCases.length; i++){
    //         if(useCases[i].id === id){
    //             return useCases[i];
    //         }
    //     }
    // }

    render() {
        const useCases = this.props.useCases;
        let useCase;
        for(var i = 0; i < useCases.length; i++){
            if(useCases[i].id === this.props.match.params.id){
                useCase = useCases[i];
            }
        }
        console.log(useCase);
        return (
            <div className={styles.UseCase}>
                <Row gutter={15} >
                    <Col span={6}>
                        <div className={styles.Sider}>
                            <Menu onClick={this.navLinkOnClick} style={{fontSize: '24px'}} mode="inline">

                                <Menu.Item key="info">
                                    <Link to={this.props.match.url + "/information"}><span><Icon type="notification" /><span>Information</span></span></Link>
                                </Menu.Item>

                                <Menu.Item key="link">
                                    <Link to={this.props.match.url + "/connections"}><span><Icon type="link" /><span>Connections</span></span></Link>
                                </Menu.Item>

                                <Menu.Item key="readings">
                                    <Link to={this.props.match.url + "/readings"}><span><Icon type="dot-chart" /><span>Readings</span></span></Link>
                                </Menu.Item>

                                <Menu.Item key="historic-data">
                                    <Link to={this.props.match.url + "/historicData"}><span><Icon type="pie-chart" /><span>Historic Data</span></span></Link>
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
        useCases: state.useCaseData.useCases,
    }
};



export default connect(mapStateToProps)(UseCase);
