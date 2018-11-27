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
        console.log(this.props.data);
        let temp;
        if(this.props.data) {
            // console.log(this.props.tempData);
            temp = Object.keys(this.props.data).map((record) => {
                // console.log(record);
                return <p key={record}>{record}: {this.props.data[record]}</p>
            });
        }


        return (
            <div>
                {this.props.data ? <h1>Live Data </h1> : null}
                {temp}
                <Button type="primary" loading={this.props.loading} onClick={this.props.onFetchArduinoData}>
                    Reconnect
                </Button>
                <TempChart  temp={this.props.data}/>
                <HistoricTemperature />

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.arduinoData.data.temp,
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
