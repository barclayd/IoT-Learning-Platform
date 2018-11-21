import React, {Component} from 'react';
import UseCaseCard from "../../components/UseCaseCard/UseCaseCard";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { Row, Col } from 'antd';

class UseCasesList extends Component {

    componentDidMount() {
        this.props.onFetchUseCase();
    }

    render() {

        console.log(this.props.useCases);

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

const mapStateToProps = state => {
    return {
        useCases: state.useCaseData.useCases,
        error: state.useCaseData.error,
        loading: state.useCaseData.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUseCase: () => dispatch(actions.fetchUseCase())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UseCasesList);
