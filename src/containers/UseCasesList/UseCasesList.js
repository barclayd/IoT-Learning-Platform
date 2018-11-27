import React, {Component} from 'react';
import UseCaseCard from "../../components/UseCaseCard/UseCaseCard";
import styles from './UseCasesList.module.scss'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';


class UseCasesList extends Component {

    componentDidMount() {
        document.title = 'Use Cases';
        this.props.onFetchUseCase();
    }

    render() {

        console.log(this.props.useCases);

        return (
            <div className={styles.UseCasesList}>
                <Row gutter={16}>
                   {
                    this.props.useCases.map((useCase, index) =>
                        <Col key={index} span={8} >
                        <Link to={"/usecases/" + (index +1)}>
                            <UseCaseCard isLoading={this.props.loading} {...useCase} aria-label={'Use case cards list'}/>
                        </Link>
                        </Col>
                    )
                   }
                </Row>
            </div>

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
