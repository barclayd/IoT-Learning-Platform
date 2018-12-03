import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, Avatar, Skeleton, Button} from "antd";
import * as actions from "../../store/actions";

class Settings extends Component {

    componentWillMount() {
                this.props.onFetchUseCaseData();
    }


    render() {
        let sensors = [];
        let emails = {};

        let settings = this.props.data.forEach((useCase) => {
            if (useCase.id === this.props.id) {
                console.log('local id: ', this.props.id, 'firebaseId: ', useCase.id );
                for(let sensor in useCase.sensors) {
                    console.log(sensor);
                    console.log(useCase.sensors[sensor]);
                    sensors.push(useCase.sensors[sensor]);
                }
                emails = {...useCase.email};
            }
        });

        console.log(sensors);
        const helq = {...sensors[0]};
        console.log(Object.keys(helq));
        // console.log(Object.keys(sensors['temperature']));
        // console.log(Object.keys(sensors[0]));

        const hello = (this.props.data.email !== null) ?
            <List
                className='settings'
                itemLayout='horizontal'
                dataSource = {Object.keys(emails)}
                renderItem = { item => (
                    <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                        <Skeleton avatar title={false} active>
                            <List.Item title={item} description={'Change setting for this sensor'}/>
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                    )}
                /> :
            <p> This didn't work </p>;

            let emailSettings = Object.keys(emails).map((email) => {
                return <p key={email}>{email} : {emails[email]} {}</p>
            });

            // let sensorsSettings = sensors.map((sensor) => {
            // console.log(sensor);
            // let shallowCopy = {...sensors[sensor]};
            // console.log(shallowCopy);
            // return Object.keys(shallowCopy).map((setting) => {
            //     return <p key={setting}>{setting} : {shallowCopy[setting]}</p>
            //     })
            // });

        let sensorsSettings = sensors.map((sensor) => {
            return Object.keys(sensor).map((setting) => {
                return <p key={setting}>{setting} : {sensor[setting]}</p>
            });
        });


        return (
            <React.Fragment>
                {hello}
                <h2>Email Settings </h2>
                {emailSettings}
                <h2>Sensor Settings </h2>
                {sensorsSettings}

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.useCaseFirebase.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUseCaseData: () => dispatch(actions.fetchUseCaseData())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
