import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import HistoricTemperature from '../HistoricData/HistoricTemperatures';
import TempChart from '../Charts/TempChart';
import { Button, notification} from 'antd';


class TemperatureData extends Component {


    componentDidMount() {
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
    }
   

    render() {
        console.log(this.props.data);
        let temp;
        if(this.props.data) {
            // console.log(this.props.tempData);
            temp = Object.keys(this.props.data).map((record) => {
                // console.log(record);
                return <p key={record}>{record}: {this.props.data[record]}</p>
            });
        }
        let returnObject;
        if (this.props.error  || !(this.props.data || this.props.data.success)) {
            returnObject = <p>Please connect Arduino!</p>
        } else {
            returnObject = <TempChart  temp={this.props.data.data}/>
        }


        return (
            <div>
                {this.props.data ? <h1>Live Data </h1> : null}
                {temp}
                <Button type="primary" loading={this.props.loading} onClick={this.fetchArduinoDataAsync}>
                    Reconnect
                </Button>
                {returnObject}
                <HistoricTemperature />

            </div>
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
