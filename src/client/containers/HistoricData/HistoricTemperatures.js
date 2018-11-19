import React, {Component} from 'react';
import axios from '../../../shared/axios-instance';


class HistoricTemperatures extends Component {

    state = {
        historicData: null
    };

    componentDidMount() {
        axios.get('/test.json')
            .then(response => {
                console.log(response.data);
                this.setState({
                    historicData: response.data
                })
            })
            .catch(err => {
                console.log(`Following error occurred: ${err}`)
            })
    }

    render() {

        let historicTemp;
        if(this.state.historicData) {
            historicTemp = Object.keys(this.state.historicData).map((record) => {
                return <p key={record}>{record}</p>
            });
        }

        return (
            <div>
                <h3>Loaded historic data from Firebase: </h3>
                {historicTemp}
            </div>
        );
    };
}


export default HistoricTemperatures;
