import React, {Component} from 'react';
import { Divider, Button } from 'antd';
import styles from './UseCaseCard.module.scss'

class UseCaseCard extends Component {
    render() {
        return (
            <div className={styles.UseCaseCard}>
                <h3 className={styles.Title}>Thermometer Case</h3>
                <Divider type="horizontal" />
                <p>Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward s</p>
                {/*<div>*/}
                    <Button type="primary" block className={styles.Button}>Start</Button>
                {/*</div>*/}
            </div>
        )
    }
}

export default UseCaseCard;