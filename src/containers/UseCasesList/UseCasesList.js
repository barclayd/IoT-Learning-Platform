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
        this.props.onFetchUseCaseData();
    }

    render() {

        console.log(this.props.useCases);
        let useCases = this.props.useCases.map((useCase, index) => {
                    console.log(useCase.access.listedUsers);
                    if(useCase.access.listedUsers.includes(localStorage.getItem("userId"))) {
                        return <Col key={index} span={8} >
                            <Link to={"/usecases/" + (index +1)}>
                                <UseCaseCard isLoading={this.props.loading} {...useCase} aria-label={'Use case cards list'}/>
                            </Link>
                        </Col>
                    } else {
                        return null
                    }
            }
        );

        const arrayIsEmpty = currentArray => currentArray === null;

        const printedUseCases = (useCases.every(arrayIsEmpty)) ? <p>No use cases are currently linked to your account. Please contact your trainer.</p> : useCases;



        return (
            <div className={styles.UseCasesList} aria-label={`Select a use case`}>
                <Row gutter={16}>
                    {printedUseCases}
                </Row>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        useCases: state.useCaseFirebase.data,
        error: state.useCaseFirebase.error,
        loading: state.useCaseFirebase.loading,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUseCaseData: () => dispatch(actions.fetchUseCaseData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UseCasesList);
