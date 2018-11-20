import React, {Component} from 'react';
import { Divider, Button } from 'antd';

class UseCase extends Component {
    render() {
        return (
            <div className="usecase_container">
                <h3 className="usecase_title">Thermometer Case</h3>
                <Divider type="horizontal" />
                <p>Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward s</p>
                {/*<div>*/}
                    <Button type="primary" block className="usecase_button">Start</Button>
                {/*</div>*/}
            </div>
        )
    }
}

export default UseCase;