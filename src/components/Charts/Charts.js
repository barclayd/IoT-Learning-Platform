import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Bar, Line, Pie} from 'react-chartjs-2';
import * as actions from "../../store/actions";

class Charts extends Component {

    componentDidMount() {
        this.props.onFetchData();
    }

    render() {
        console.log(this.props.data);
        const fridgeTemps = [];
        const datesRecorded = [];
        for(let record in this.props.data) {
            fridgeTemps.push(this.props.data[record].fridgeTemp);
            datesRecorded.push((this.props.data[record].dateRecorded).slice(0, -4));
        }

        const chartData = {
          // labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            labels: datesRecorded,
            datasets: [
                {
                    label: 'Fridge Temperature',
                    data: fridgeTemps,
                    backgroundColor: ['#003B46', '#07575B', '#66A5AD', '#C4DFE6', '#021C1E', '004445', '#2C7873']
                }
            ]
        };

        return (
            <React.Fragment>
            <Bar
                data={chartData}
                width={200}
                height={200}
                options={{
                    title: {
                        display: true,
                        text: 'Average Fridge Temperatures from past week',
                        fontSize: '25'
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}/>
                <Line
                data={chartData}
                width={200}
                height={200}
                options={{
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}/>
                <Pie
                    data={chartData}
                    width={200}
                    height={200}
                    options={{
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }}/>
            </React.Fragment>


        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.historicData.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: () => dispatch(actions.fetchData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
