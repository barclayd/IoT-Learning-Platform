import React, {Component} from 'react';
import {Avatar, Form, Icon, List, Input, Rate, Button, Divider} from 'antd';
import {connect} from "react-redux";
import dateformat from 'dateformat';
import * as actions from '../../store/actions/index';
import classes from './Feedback.module.css';
import {updateObject} from "../../store/utility";


let id;
let userDetails;
let userName;
let userEmail;
let profileImage;

const userId = localStorage.getItem("userId");


class Feedback extends Component {

    state = {
        useCase: {
            messages: []
        },
        newMessage: {}
    };

    componentWillMount() {
        this.props.onFetchUseCases();
        this.props.onFetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.loading) {
            this.setState({
                useCase: nextProps.useCases[id],
            });
        }
    }

    updateForm = (settingName, settingValue) => {
        const message = updateObject(this.state.newMessage, {
            [settingName]: settingValue.target.value
        } );
        this.setState({
            newMessage: message
        });
    };

    updateFormValue = (settingName, settingValue) => {
        console.log(settingValue);
        const message = updateObject(this.state.newMessage, {
            [settingName]: settingValue
        } );
        this.setState({
            newMessage: message
        });
    };

    handleSubmit = () => {
      const userData = {
            'authorName': userName,
            'date': dateformat(new Date(), "dS mmmm yyyy"),
            'profileImage': profileImage
        };
      const messageObject = [{...userData, ...this.state.newMessage}];
      console.log(messageObject);
    };

    render () {
        id = this.props.match.params.id;

        userDetails = this.props.users.map((user, index) => {
            if (user.userUUID === userId) {
                [userName, userEmail, id, profileImage] = [user.name, user.email, user.id, user.profileImage];
            }
        });

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        const FormItem = Form.Item;
        const { TextArea } = Input;
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
        const newComment = <React.Fragment>
            <FormItem {...formItemLayout} label='Title'>
                <Input style={{width: '150%'}} onChange={(e) => this.updateForm('title', e)}/>
            </FormItem>
            <FormItem {...formItemLayout} label='Message' className={classes.text}>
                <textarea rows={4}  onChange={(e) => this.updateForm('message', e)}/>
            </FormItem>
            <FormItem {...formItemLayout} label='Rating' className={classes.text}>
                <Rate allowHalf defaultValue={2.5} onChange={(e) => this.updateFormValue('rating', e)}/>
            </FormItem>

        </React.Fragment>;

        const button = <Button type="primary" htmlType="submit" onClick={() => this.handleSubmit()} loading={this.props.updateLoading}>Post</Button>;


        return (
            <React.Fragment>
                <h2>Feedback</h2>
                <React.Fragment>
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
                    footer={<div><i>Feedback for {this.state.useCase.name} Use Case</i></div>}
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
                />
            </React.Fragment>
                <Divider />
                <h2>Post a New Feedback</h2>
                <div className={classes.Comment}>
                {newComment}
                {button}
                </div>
            </React.Fragment>

        )

    }
}

const mapStateToProps = state => {
    return {
        users: state.users.users,
        loading: state.useCaseFirebase.loading,
        useCases: state.useCaseFirebase.data,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUseCases: () => dispatch(actions.fetchUseCaseData()),
        onFetchUsers: () => dispatch(actions.fetchUsersData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
