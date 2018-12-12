import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { Alert, InputNumber, Tooltip, Icon} from 'antd';
import TempChart from '../Charts/TempChart';
import styles from './TemperatureData.module.scss'

import { Button, notification, Spin} from 'antd';
import {updateObject} from "../../store/utility";
import * as text from '../../assets/staticText';


class TemperatureData extends Component {


    componentDidMount() {
        document.title = 'Live Data Charts';
        console.log(this.props.ID);
        this.props.onFetchArduinoData(this.props.ID);

    }

    openSuccessNotification = () => {
        notification['success']({
          message: 'Connection Succeeded',
          description: 'Arduino connected successfully. You should see real data displayed in the graph.',
        });
    };

    openErrorNotification = () => {
        notification['error']({
          message: 'Connection Failed',
          description: 'Sorry, we could not find an Arduino. Please try again!',
        });
    };

    fetchArduinoDataAsync = () => {
        this.props.onFetchArduinoData(this.props.ID)
    };

    render() {
        let temp;
        if(this.props.data) {
            // console.log(this.props.tempData);
            temp = Object.keys(this.props.data).map((record) => {
                // console.log(record);
                return <p key={record} aria-label={'Live temperature data'}>{record}: {this.props.data[record]}</p>
            });
        }
        let returnObject;
        if (this.props.loading) {
            returnObject = <Spin size="large" />
        } else if (this.props.data.success) {
            returnObject = <TempChart  temp={this.props.data.data} aria-label={'Live real time temperature graph'}/>
        } else {
            returnObject = (<React.Fragment>

                    <Alert type='error' banner={false} message={'Please connect the Arduino!'} closeable={true} showIcon={true} aria-label={'Please connect Arduino error banner'}> </Alert>
                    <Button type="primary" style={{marginTop: '15px'}} aria-label={'Button to refresh data on reconnection'}  loading={this.props.loading} onClick={this.fetchArduinoDataAsync}>
                        Reconnect
                    </Button>
                </React.Fragment>
                );
        }
        const questionMarkStyle = {position: 'absolute', fontSize: '30px', right: '30px', top: '20px'};


        return (
            <React.Fragment>

                {this.props.data ? <h1>Live Readings</h1> : null}
                {/*{temp}*/}
                <Tooltip title={this.props.loading ? text.liveReadingsLoading : (this.props.error ? text.liveReadingsFailed : text.liveReadingsLoaded)} placement="bottom">
                    <Icon type="question-circle" theme="filled" style={questionMarkStyle} />
                </Tooltip>
                {returnObject}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.arduinoData.data,
        loading: state.arduinoData.loading,
        error: state.arduinoData.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchArduinoData: (useCaseID) => dispatch(actions.fetchArduinoData(useCaseID))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureData);
