import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import HistoricTemperature from '../HistoricData/HistoricTemperatures';
import TempChart from '../Charts/TempChart';
import { Button } from 'antd';


class TemperatureData extends Component {


    componentDidMount() {
        this.props.onFetchArduinoData();

    }


    render() {
        let temp;
        if(this.props.tempData) {
            // console.log(this.props.tempData);
            temp = Object.keys(this.props.tempData).map((record) => {
                // console.log(record);
                return <p key={record}>{record}: {this.props.tempData[record]}</p>
            });
        }


        return (
            <div>
                {this.props.tempData ? <h1>Live Data </h1> : null}
                {temp}
                <Button type="primary" loading={this.props.loading} onClick={this.props.onFetchArduinoData}>
                    Reconnect
                </Button>
                <TempChart  temp={this.props.tempData}/>
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
