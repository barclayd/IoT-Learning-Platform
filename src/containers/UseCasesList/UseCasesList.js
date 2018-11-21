import React, {Component} from 'react';
import UseCaseCard from "../../components/UseCaseCard/UseCaseCard";
import styles from './UseCasesList.module.scss';
import { Row, Col } from 'antd';

class UseCasesList extends Component {
    render() {
        return (
            <div className={styles.UseCasesList}>
                <Row gutter={16}>

                    <Col span={8} >
                        <UseCaseCard />
                    </Col>

                    <Col span={8} >
                        <UseCaseCard />
                    </Col>

                    <Col span={8} >
                        <UseCaseCard />
                    </Col>

                    <Col span={8} >
                        <UseCaseCard />
                    </Col>

                    <Col span={8} >
                        <UseCaseCard />
                    </Col>

                    <Col span={8} >
                        <UseCaseCard />
                    </Col>
                </Row>
            </div>
           
        )
    }
}

export default UseCasesList;