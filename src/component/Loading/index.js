import React from 'react';
import { Spin } from 'antd';
import './index.css';

export default function Loading() {
    return (
        <div className='loading'>
            <Spin size='large' />
            <span>拼命加载中...</span>
        </div>
    )
}