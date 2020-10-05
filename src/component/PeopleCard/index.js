import React from 'react';
import { Card, Descriptions, Image } from 'antd';
import { ERROR_IMAGE_URL } from '../../util/helper';
import './index.css';

export default function PeopleCard(props) {
    const { url, name, grade, email, research } = props;

    return (
        <Card.Grid style={{width: 382}}>
            <div className='people-card'>
                <div className='people-head'>
                    <Image src={url} fallback={ERROR_IMAGE_URL} width='250' />
                </div>
                <div className='people-describe'>
                    <Descriptions title={name} column={1}>
                        <Descriptions.Item>{grade}</Descriptions.Item>
                        <Descriptions.Item>{email}</Descriptions.Item>
                        <Descriptions.Item>{research}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </Card.Grid>
    )
}