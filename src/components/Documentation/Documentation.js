import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import {Link, Redirect} from 'react-router-dom';
import DocRouter from '../../routers/DocumentationRouter';
import docData from './Data/docs.json';


class Documentation extends Component {

    render() {

        return(
            <div aria-label={'Documentation'}>
                <Row gutter={15}>
                    <Col span={6}>
                        <div>
                            <Menu style={{fontSize: '24px'}} mode="inline">
                                {
                                    Object.keys(docData).map((key) => {
                                        return (
                                            <Menu.Item key={key}>
                                                <Link to={this.props.match.url + "/" + key}>
                                                    <span>
                                                        <Icon type="read" aria-label={'Link to ' + docData[key].title}/>
                                                        <span>{key}</span>
                                                    </span>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </Menu>
                        </div>
                    </Col>

                    <Col span={18}>
                            <div>

                                <DocRouter content={docData}/>
                            </div>
                        </Col>

                </Row>
            </div>
        )
    }
}

export default Documentation;
