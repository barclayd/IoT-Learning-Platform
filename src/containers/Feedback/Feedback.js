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
let messageId;

const userId = localStorage.getItem("userId");


class Feedback extends Component {

    state = {
        useCase: {
            messages: [{
                title: "Excellent Work",
                profileImage: "beach.jpg",
                authorName: "Peter Trott",
                message: "Excellent work on the Use Case",
                rating: 5,
                date: "11th Dec 2018"
            }]
        },
        newMessage: {
            message: '',
            title: '',
            rating: 2.5
        },
        messages: []
    };

    componentDidMount() {
        this.props.onFetchUseCases();
        this.props.onFetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        id = this.props.match.params.id;
        if (!nextProps.loading) {
            this.setState({
                useCase: nextProps.useCases[id]
            })
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
            'profileImage': profileImage,
            'rawDate': new Date()
        };
        messageId = this.state.useCase.messages.length;
        const messageObject = {...userData, ...this.state.newMessage};
      this.props.onPostMessage(id, messageId, messageObject);
      if(this.props.savedMessage) {
          this.setState({
              newMessage: {
                  message: '',
                  title: '',
                  rating: 2.5
              }
          })
      }
    };

    render () {

        console.log(id);

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
        const useCaseMessages = [];

        const IconText = ({ type, text }) => (
            <span>
                    <Icon type={type} />
                {text}
              </span>
        );

        if(this.state.useCase.messages !== undefined) {
            this.state.useCase.messages.map((message) => {
                return useCaseMessages.push(message);
            });
        }
        const newComment = <React.Fragment>
            <FormItem {...formItemLayout} label='Title'>
                <Input style={{width: '150%'}} value={this.state.newMessage.title} onChange={(e) => this.updateForm('title', e)}/>
            </FormItem>
            <FormItem {...formItemLayout} label='Message' className={classes.text}>
                <textarea rows={4} value={this.state.newMessage.message} onChange={(e) => this.updateForm('message', e)}/>
            </FormItem>
            <FormItem {...formItemLayout} label='Rating' className={classes.text}>
                <Rate allowHalf defaultValue={2.5} value={this.state.newMessage.rating} onChange={(e) => this.updateFormValue('rating', e)}/>
            </FormItem>

        </React.Fragment>;

        const button = <Button type="primary" htmlType="submit" onClick={() => this.handleSubmit()} loading={this.props.messageLoading}>Post</Button>;


          const messages = useCaseMessages.reverse().map((msg, index) => {
              if(msg !== null) {
                  return ( <List.Item
                      key={index}
                      actions={[<IconText type="clock-circle" text={` ${msg.date}`} />, <Rate allowHalf disabled value={msg.rating} />]}
                         >
                      <List.Item.Meta
                          avatar={<Avatar src={`/images/${msg.profileImage}`} />}
                          title={msg.title}
                          description={`Trainer: ${msg.authorName}`}
                                                        />
                      <p style={{color: 'black', fontSize: '14px'}}>{msg.message}</p>
                  </List.Item> )
              }});

        return (
            <React.Fragment>
                <h2>Feedback</h2>
                <List
                    loading={this.props.loading}
                    itemLayout="vertical"
                    size="small"
                    footer={<div><i>Feedback for {this.state.useCase.name} Use Case</i></div>}>
                    {messages}
                </List>
                <Divider />
                {localStorage.getItem('role') === 'Trainer' && !this.props.loading ?
                    <div className={classes.Comment}>
                        <h3>Add new Feedback</h3>
                        {newComment}
                        {button}
                    </div> : null
                }
            </React.Fragment>

        )

    }
}

const mapStateToProps = state => {
    return {
        users: state.users.users,
        loading: state.useCaseFirebase.loading,
        useCases: state.useCaseFirebase.data,
        savedMessage: state.messages.saved,
        messageLoading: state.messages.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUseCases: () => dispatch(actions.fetchUseCaseData()),
        onFetchUsers: () => dispatch(actions.fetchUsersData()),
        onPostMessage: (useCaseId, messageId, message) => dispatch(actions.postMessage(useCaseId, messageId, message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
