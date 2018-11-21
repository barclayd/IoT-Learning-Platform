import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import HistoricTemperature from '../HistoricData/HistoricTemperatures';
import TempChart from '../Charts/TempChart';

class TemperatureData extends Component {


    componentDidMount() {
        this.props.onFetchLiveData();
        
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
                <TempChart  temp={this.props.tempData}/>
                <HistoricTemperature />
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tempData: state.liveData.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchLiveData: () => dispatch(actions.fetchLiveData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureData);
