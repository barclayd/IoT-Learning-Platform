import React from 'react';
import { Button, Card } from 'antd';
import styles from './UseCaseCard.module.scss'

const UseCaseCard = () => {
    return (
        <div className={styles.UseCaseCard}>
                <Card title="Case Title" bordered={true}>
                Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward s...
                <div></div>
                <Button type="primary" block className={styles.Button}>Start</Button>
                </Card>
        </div>
    )
}

export default UseCaseCard;