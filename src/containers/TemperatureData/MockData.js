import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import HistoricTemperature from '../HistoricData/HistoricTemperatures';
import MockChart from '../Charts/MockChart';

class TemperatureData extends Component {


    componentDidMount() {
        document.title = 'Mock Live Data';
        this.props.onFetchLiveData();

    }


    render() {
        let temp;
        if(this.props.tempData) {
            // console.log(this.props.tempData);
            temp = Object.keys(this.props.tempData).map((record) => {
                // console.log(record);
                return <p key={record} aria-label={'Live temperature data'}>{record}: {this.props.tempData[record]}</p>
            });
        }


        return (
            <React.Fragment>
                {this.props.tempData ? <h1>Live Data </h1> : null}
                {temp}
                <MockChart  temp={this.props.tempData} aria-label={'Mock data chart'}/>
                <HistoricTemperature />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        tempData: state.liveData.data,
        loading: state.liveData.loading,
        error: state.liveData.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchLiveData: () => dispatch(actions.fetchLiveData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureData);
