import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Bar, Line, Pie} from 'react-chartjs-2';
import * as actions from "../../store/actions";



class Charts extends Component {

    componentDidMount() {
        this.props.onFetchData();
    }


    render() {
        let fridgeTemps = [];
        let datesRecorded = [];
        const compareData = {};
        for(let record in this.props.data) {
            fridgeTemps.push(this.props.data[record].fridgeTemp);
            datesRecorded.push((this.props.data[record].dateRecorded).slice(0, -5));
        }

        console.log(datesRecorded);

        const averageDayCalculator = () => {
            const count = datesRecorded =>
                datesRecorded.reduce((a, b) =>
                    Object.assign(a, {[b]: (a[b] || 0) + 1}), {});

           const duplicates = (count(datesRecorded));

           for(let item in duplicates){
               if(duplicates[item] < 2) {
                   delete duplicates[item];
               }
           }
            console.log(duplicates);

           console.log(fridgeTemps);

           let dayTotal = 0;
           let countTotal = 0;
           const calculatedData = {};
            for(let record in this.props.data) {
                if(Object.keys(duplicates).toString() === ((this.props.data[record].dateRecorded).slice(0, -5))) {
                    dayTotal += this.props.data[record].fridgeTemp;
                    countTotal ++;
                } else {
                    calculatedData[this.props.data[record].dateRecorded] = this.props.data[record].fridgeTemp
                }
            }



           // remove key-pair values with size less than 2

            // make an average of

           // for(let record in datesRecorded){
           //      if(record === Object.keys(datesRecorded));
           // }
        };

        averageDayCalculator();
        console.log(this.props.data);


        const chartData = {
          // labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            labels: datesRecorded,
            datasets: [
                {
                    label: 'Fridge Temperature',
                    data: fridgeTemps,
                    backgroundColor: '#2C7873'
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
