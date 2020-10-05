import React, { useCallback } from 'react';
import { Card, Tabs } from 'antd';
import PeopleCard from '../../component/PeopleCard';
import './index.css';

const { TabPane } = Tabs;

export default function People() {

    const callBack = useCallback((key) => {
        console.log(key);
    }, [])

    return (
        <div className='people'>
            <Tabs defaultActiveKey='1' onChange={callBack}>
                <TabPane tab='Lab Members' key='1'>
                    <Card>
                        <PeopleCard
                            url='http://81.68.113.133:8081/Temp/2020612121008_20%E6%9D%8E%E6%A2%A6%E7%A5%8E.jpg'
                            name='Mengyi Li'
                            grade='2020'
                            email='limengyiaaa@163.com'
                            research='Self-knowledge'
                        />
                        <PeopleCard
                            url='http://81.68.113.133:8081/Temp/201763232611_%E8%B5%B5%E5%B0%8F%E6%B7%8B%E5%89%AA%E8%A3%81-min.jpg'
                            name='Xiaolin Zhao'
                            grade='2019'
                            email='m18010615410@163.com'
                            research='sleep and stress'
                        />
                        <PeopleCard
                            url='http://81.68.113.133:8081/Temp/20171211104214_213A51ECE9F00476F3B4B3E149A65FCC.jpg'
                            name='Jiwen Li'
                            grade='2017'
                            email='2572561061@qq.com'
                            research='Self-esteem'
                        />
                    </Card>
                </TabPane>
                <TabPane tab='Lab Alumni' key='2'>
                    <Card>
                        <PeopleCard
                            url='http://81.68.113.133:8081/Temp/2016108102849_%E5%90%B4%E5%B8%88_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg'
                            name='Shi Wu'
                            grade='2014-2017'
                            email='wshxy1991@163.com'
                            research='Self-esteem and the mechanism of brain'
                        />
                    </Card>
                </TabPane>
            </Tabs>
        </div>
    )
}