import React, {Component} from 'react';
import UseCaseCard from "../../components/UseCaseCard/UseCaseCard";
import { Row, Col } from 'antd';

class UseCasesList extends Component {
    render() {
        return (
            <Row gutter={16}>

                <Col span={6} >
                    <UseCaseCard />
                </Col>

                <Col span={6} >
                    <UseCaseCard />
                </Col>

                <Col span={6} >
                    <UseCaseCard />
                </Col>

                <Col span={6} >
                    <UseCaseCard />
                </Col>

                <Col span={6} >
                    <UseCaseCard />
                </Col>

                <Col span={6} >
                    <UseCaseCard />
                </Col>

                <Col span={6} >
                    <UseCaseCard />
                </Col>
            </Row>
        )
    }
}

export default UseCasesList;