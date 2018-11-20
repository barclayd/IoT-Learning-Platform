import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import './HistoricTemperature.css';


class HistoricTemperatures extends Component {

    componentDidMount() {
        this.props.onFetchData();
    }

    render() {

        let historicTemp;
        console.log(this.props.historicData);
        if(this.props.historicData) {
            historicTemp = (this.props.historicData).map((record) => {
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

const mapStateToProps = state => {
    return {
        historicData: state.historicData.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: () => dispatch(actions.fetchData())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HistoricTemperatures);
