import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import './HistoricTemperature.css';


class HistoricTemperatures extends Component {

    componentDidMount() {
        document.title = 'Historic Temperature Data';
        this.props.onFetchData();
    }

    render() {

        let historicTemp;
        if(this.props.error) {
            historicTemp = null;
        }
        if(this.props.historicData) {
            historicTemp = (this.props.historicData).map((record) => {
                return <p key={(record.timeRecorded)} aria-label={'Historic data from Firebase'}>
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
        historicData: state.historicData.data,
        loading: state.historicData.loading,
        error: state.historicData.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: () => dispatch(actions.fetchData())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HistoricTemperatures);
