import React, {Component} from 'react';
import PubNubReact from 'pubnub-react';
import Chart from 'eon-react';


class TempChart extends Component {
    constructor(props){
        super(props);

        this.pubnub = new PubNubReact({
            subscribeKey: 'sub-c-eab7bd02-eccb-11e8-8495-720743810c32',
            publishKey: 'pub-c-67816538-99a5-4a55-9f12-9916633d6a37'
        });
        this.pubnub.init(this);

    }


    componentDidMount(){

        this.interval = setInterval(() =>
            this.pubnub.publish({
                channel: 'channel1',
                message : {
                    eon : {
                        'Fridge 1' : this.props.temp.toFixed(1)
                        }
                    }
                }), 2000
            )
    }


    render() {
        return(
            <Chart
            pubnub={this.pubnub}
            channels = {['channel1']}
            type={'spline'}
            limit= {5}
            history={true}
            />
        )
}
}

export default TempChart
