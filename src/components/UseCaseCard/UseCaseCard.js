import React from 'react';
import { Card, Icon } from 'antd';
import styles from './UseCaseCard.module.scss'
const { Meta } = Card;

const UseCaseCard = (props) => {
    console.log(props);
    return (
        <div className={styles.UseCaseCard}>
                {props.isLoading ? (
                    <Card bordered={true} loading={true} aria-label={'Use case card is loading'}></Card>
                ) : (
                    <Card
                    hoverable
                    bordered={true}
                    style={{ width: 300}}
                    bodyStyle= {{ minHeight: 150 }}
                    cover={<img height='250px' alt={props.name} src={`/images/${props.image}`} />}
                    actions={[<Icon type="experiment" theme="twoTone" style={{fontSize:'22px'}} aria-label={'experiment icon'}/>]}
                    aria-label={'Use case card'}
                    >
                        <Meta title={props.name} description={props.shortDesc} aria-label={`Use case name: ${props.name}, Use case description: ${props.shortDesc}`}/>

                    </Card>
                )}
        </div>
    )
};

export default UseCaseCard;
