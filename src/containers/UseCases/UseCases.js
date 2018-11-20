import React, {Component} from 'react';
import UseCase from "../../components/UseCases/UseCase";
import { Row, Col } from 'antd';

class UseCases extends Component {
    render() {
        return (
            <Row gutter={16}>

                <Col span={6} >
                    <UseCase />
                </Col>

                <Col span={6} >
                    <UseCase />
                </Col>

                <Col span={6} >
                    <UseCase />
                </Col>

                <Col span={6} >
                    <UseCase />
                </Col>

                <Col span={6} >
                    <UseCase />
                </Col>

                <Col span={6} >
                    <UseCase />
                </Col>

                <Col span={6} >
                    <UseCase />
                </Col>
            </Row>
        )
    }
}

export default UseCases;