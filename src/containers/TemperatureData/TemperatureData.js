import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import { Alert, InputNumber} from 'antd';
import TempChart from '../Charts/TempChart';
import styles from './TemperatureData.module.scss'

import { Button, notification, Spin} from 'antd';
import {updateObject} from "../../store/utility";


class TemperatureData extends Component {

    state = {
        minValue: 20,
        maxValue: 30
    };

    componentDidMount() {
        document.title = 'Live Data Charts';
        this.props.onFetchArduinoData();

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
        this.props.onFetchArduinoData()
    };

    inputMinChangedHandler = (event, name) => {
        console.log(name);
        this.setState({
            minValue: event
        });
    };

    inputMaxChangedHandler = (event) => {
        this.setState({
            maxValue: event
        });
    };

    render() {
        console.log(this.state.minValue, this.state.maxValue);
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

        let customMinTemp = <InputNumber name='minValue' min={0} max={30} step={0.5} value={this.state.minValue} onChange={(e) => this.inputMinChangedHandler(e, this.name)} />;
        let customMaxTemp = <InputNumber name='maxValue' min={0} max={30} step={0.5} value={this.state.maxValue} onChange={(e) => this.inputMaxChangedHandler(e)} />;

        return (
            <React.Fragment>

                {this.props.data ? <h1>Live Readings</h1> : null}
                {customMinTemp}
                {customMaxTemp}
                {/*{temp}*/}
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
        onFetchArduinoData: () => dispatch(actions.fetchArduinoData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureData);
