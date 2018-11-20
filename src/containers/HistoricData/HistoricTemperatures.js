import React, {Component} from 'react';
import axios from '../../shared/axios-instance';
import './HistoricTemperature.css';


class HistoricTemperatures extends Component {

    state = {
        historicData: null
    };

    componentDidMount() {
        axios.get('/test.json')
            .then(response => {
                const fetchedData = [];
                for (let key in response.data) {
                    fetchedData.push({
                        ...response.data[key],
                        id: key
                    });
                }
                console.log(response.data);
                this.setState({
                    historicData: fetchedData
                })
            })
            .catch(err => {
                console.log(`Following error occurred: ${err}`)
            })
    }

    render() {

        let historicTemp;
        console.log(this.state.historicData);
        if(this.state.historicData) {
            historicTemp = (this.state.historicData).map((record) => {
                return <p key={(record.timeRecorded)}>
                    <strong>{record.dateRecorded}</strong> |
                    {record.timeRecorded} |
                    <strong style={{color: 'red'}}>{record.fridgeTemp.toFixed(1)}</strong>
                </p>
            });
        }

        return (
            <div className="data">
                <h3>Loaded historic data from Firebase: </h3>
                {historicTemp}
            </div>
        );
    };
}


export default HistoricTemperatures;
