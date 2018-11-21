import React, {Component} from 'react';
import UseCaseCard from "../../components/UseCaseCard/UseCaseCard";
import styles from './UseCasesList.module.scss';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

class UseCasesList extends Component {
    render() {
        return (
            <div className={styles.UseCasesList}>
                <Row gutter={16}>

                   {
                    this.props.useCases.map((useCase, index) => {
                        return (
                            <Col span={8} >
                                <UseCaseCard key={index} {...useCase} />
                            </Col>
                        )           
                    })
                   }
                </Row>
            </div>
           
        )
    }
}

const mapStateToProps = state => {
    return {
        useCases: state.useCases,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetch: (sensorName, value) => {
          
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseCasesList);