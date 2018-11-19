import React, {Component} from 'react';
import {getTempData} from '../../../shared/serverUtility/serverData';
import HistoricTemperature from '../HistoricData/HistoricTemperatures';

class TemperatureData extends Component {

    state = {
        tempData: null
    };

    componentDidMount() {
        getTempData((err, data) => {
            this.setState({
                tempData: data
            });
        });
    }


    render() {
        let temp;
        if(this.state.tempData) {
            temp = Object.keys(this.state.tempData).map((record) => {
                return <p key={record}>{record}: {this.state.tempData[record]}</p>
            });
        }

        return (
            <div>
                {temp}
                <HistoricTemperature />
            </div>
        );
    }
}

export default TemperatureData;
