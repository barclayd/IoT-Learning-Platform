import React, {Component} from 'react';
import UseCaseCard from "../../components/UseCaseCard/UseCaseCard";
import styles from './UseCasesList.module.scss'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {Row, Col, Card, Icon} from 'antd';
import {Link} from 'react-router-dom';
const { Meta } = Card;


class UseCasesList extends Component {

    componentDidMount() {
        document.title = 'Use Cases';
        this.props.onFetchUseCaseData();
    }

    render() {
        let useCases = this.props.useCases.map((useCase, index) => {
                if(useCase.access.listedUsers !== null) {
                    if(useCase.access.listedUsers.includes(localStorage.getItem("userId")) || (useCase.access.listedUsers.includes(this.props.userId))) {
                        return <Col key={index} span={8} >
                            <Link to={"/usecases/" + (index)}>
                                <UseCaseCard isLoading={this.props.loading} {...useCase} aria-label={'Use case cards list'}/>
                            </Link>
                        </Col>
                    } else {
                        return null
                    }
                }
            }
        );

        const arrayIsEmpty = currentArray => currentArray === null;

        const printedUseCases = (useCases.every(arrayIsEmpty)) ? <p>No use cases are currently linked to your account. Please contact your trainer.</p> : useCases;

        let addNewUseCaseCard;
        if(this.props.loading) {
            addNewUseCaseCard = <Card bordered={true} loading={true} aria-label={'Use case card is loading'}></Card>
        } else {
            addNewUseCaseCard = <Card
                hoverable
                bordered={true}
                style={{ width: 300}}
                bodyStyle= {{ minHeight: 150}}
                cover={<img height='150px' alt='add new usecase' src='/images/add-new.png' />}
                actions={[<Icon type="check-circle" theme="twoTone" style={{fontSize:'22px'}} aria-label={'experiment icon'}/>]}
                aria-label={`Use case card, Use case name is add new use case card, Use case description is click here to add a new use case`}
            >
                <div>
                    <Meta title='Add a New Usecase' description='Click on this card to add a new use case. Here you can set all properties for a new use case' aria-label='Add a new usecase card'/>
                </div>
            </Card>
        }


        return (
            <div className={styles.UseCasesList} aria-label={`Select a use case`}>
                <Row gutter={16}>
                    {printedUseCases}
                </Row>
                {localStorage.getItem("role") === 'Trainer' ? addNewUseCaseCard : null}
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
