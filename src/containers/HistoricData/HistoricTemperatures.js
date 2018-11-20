import React, {Component} from 'react';
import axios from '../../shared/axios-instance';


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
        //TODO: fix mapping of data object from Firebase to display in client
        if(this.state.historicData) {
            historicTemp = (this.state.historicData).map((record) => {
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
