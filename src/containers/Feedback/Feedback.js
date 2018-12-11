import React, {Component} from 'react';
import {Avatar, Form, Icon, List, Input, Rate} from 'antd';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import * as actions from '../../store/actions/index';


let id;


class Feedback extends Component {

    state = {
        useCase: {
            messages: []
        }
    };

    componentWillMount() {
        this.props.onFetchUseCases();
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.loading) {
            this.setState({
                useCase: nextProps.useCases[id],
            })
        }
    }

    render () {
        id = this.props.match.params.id;

        console.log(this.props);
        console.log(this.state);
        console.log(this.props.useCases[id]);
        let redirect;
        const useCaseMessages = [];

        const IconText = ({ type, text }) => (
            <span>
                    <Icon type={type} />
                {text}
              </span>
        );

        const data = this.state.useCase.messages.map((message) => {
            return useCaseMessages.push(message);
        });

        return (
            <React.Fragment>
                <h2>Feedback</h2>
                <List
                    itemLayout="vertical"
                    size="small"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={useCaseMessages}
                    footer={<div>Add a <b>comment below</b></div>}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText type="clock-circle" text={` ${item.date}`} />, <Rate disabled defaultValue={item.rating} />]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={`/images/${item.profileImage}`} />}
                                title={item.title}
                                description={item.authorName}
                            />
                            {item.message}
                        </List.Item>
                    )}
                />,
            </React.Fragment>

        )

    }
}

const mapStateToProps = state => {
    return {
        loading: state.useCaseFirebase.loading,
        useCases: state.useCaseFirebase.data,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUseCases: () => dispatch(actions.fetchUseCaseData()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
