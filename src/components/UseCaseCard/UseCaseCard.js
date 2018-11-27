import React from 'react';
import { Card, Icon } from 'antd';
import styles from './UseCaseCard.module.scss'
const { Meta } = Card;

const UseCaseCard = (props) => {
    console.log(props);
    return (
        <div className={styles.UseCaseCard}>
                {props.isLoading ? (
                    <Card bordered={true} loading={true}></Card>
                ) : (
                    <Card
                    hoverable
                    bordered={true}
                    style={{ width: 300}}
                    bodyStyle= {{ minHeight: 150 }}
                    cover={<img height='250px' alt="example" src={`/images/${props.image}`} />}
                    actions={[<Icon type="experiment" theme="twoTone" style={{fontSize:'22px'}}/>]}
                    >
                        <Meta title={props.name} description={props.shortDesc}/>

                    </Card>
                )}
        </div>
    )
}

export default UseCaseCard;
