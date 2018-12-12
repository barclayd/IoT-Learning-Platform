import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import './HistoricTemperature.css';
import * as text from "../../assets/staticText";
import {Icon, Tooltip} from "antd";


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
        // if(this.props.historicData) {
        //         //     historicTemp = (this.props.historicData).map((record) => {
        //         //         return <p key={(record.timeRecorded)} aria-label={'Historic data from Firebase'}>
        //         //             <strong>{record.dateRecorded}</strong> |
        //         //             {record.timeRecorded} |
        //         //             <strong style={{color: 'red'}}>{record.data.toFixed(1)}</strong>
        //         //         </p>
        //         //     });
        //         // }

        const questionMarkStyle = {position: 'absolute', fontSize: '30px', right: '30px', top: '20px'};

        return (
            <div className="data">
                {/*<h3>Loaded historic data from Firebase: </h3>*/}
                <Tooltip title={text.historicReadings} placement="bottom">
                    <Icon type="question-circle" theme="filled" style={questionMarkStyle} defaultVisible={true}/>
                </Tooltip>
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
