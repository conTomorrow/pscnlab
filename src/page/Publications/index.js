import React, { useState, useEffect } from 'react';
import { List, Skeleton, Tabs } from 'antd';
import { LinkOutlined, DownloadOutlined, FilePdfOutlined } from '@ant-design/icons';
import './index.css';

const { TabPane } = Tabs;

const list = [
    { describe: 'Peng, M., Wu, S., Zhenhao Shi, Jiang, K., Shen, Y., Dedovic, K., & Yang, J. (2019). Brain regions in response to character feedback associated with the state self-esteem. Biological Psychology, 148, 107734', attachName: 'Brain regions in response to character feedback associated with the state self-esteem.pdf', attachUrl: 'http://123.207.89.83:8073/DownFile.aspx?file=../UploadFile/file/2019823111745_Brain%20regions%20in%20response%20to%20character%20feedback%20associated%20with%20the%20state%20self-esteem.pdf' },
    { describe: 'Peng, M., Wu, S., Zhenhao Shi, Jiang, K., Shen, Y., Dedovic, K., & Yang, J. (2019). Brain regions in response to character feedback associated with the state self-esteem. Biological Psychology, 148, 107734', attachName: 'Brain regions in response to character feedback associated with the state self-esteem.pdf', attachUrl: 'http://123.207.89.83:8073/DownFile.aspx?file=../UploadFile/file/2019823111745_Brain%20regions%20in%20response%20to%20character%20feedback%20associated%20with%20the%20state%20self-esteem.pdf' },
    { describe: 'Peng, M., Wu, S., Zhenhao Shi, Jiang, K., Shen, Y., Dedovic, K., & Yang, J. (2019). Brain regions in response to character feedback associated with the state self-esteem. Biological Psychology, 148, 107734', attachName: 'Brain regions in response to character feedback associated with the state self-esteem.pdf', attachUrl: 'http://123.207.89.83:8073/DownFile.aspx?file=../UploadFile/file/2019823111745_Brain%20regions%20in%20response%20to%20character%20feedback%20associated%20with%20the%20state%20self-esteem.pdf' },
    { describe: 'Peng, M., Wu, S., Zhenhao Shi, Jiang, K., Shen, Y., Dedovic, K., & Yang, J. (2019). Brain regions in response to character feedback associated with the state self-esteem. Biological Psychology, 148, 107734', attachName: 'Brain regions in response to character feedback associated with the state self-esteem.pdf', attachUrl: 'http://123.207.89.83:8073/DownFile.aspx?file=../UploadFile/file/2019823111745_Brain%20regions%20in%20response%20to%20character%20feedback%20associated%20with%20the%20state%20self-esteem.pdf' },
    { describe: 'Peng, M., Wu, S., Zhenhao Shi, Jiang, K., Shen, Y., Dedovic, K., & Yang, J. (2019). Brain regions in response to character feedback associated with the state self-esteem. Biological Psychology, 148, 107734', attachName: 'Brain regions in response to character feedback associated with the state self-esteem.pdf', attachUrl: 'http://123.207.89.83:8073/DownFile.aspx?file=../UploadFile/file/2019823111745_Brain%20regions%20in%20response%20to%20character%20feedback%20associated%20with%20the%20state%20self-esteem.pdf' },
    { describe: 'Peng, M., Wu, S., Zhenhao Shi, Jiang, K., Shen, Y., Dedovic, K., & Yang, J. (2019). Brain regions in response to character feedback associated with the state self-esteem. Biological Psychology, 148, 107734', attachName: 'Brain regions in response to character feedback associated with the state self-esteem.pdf', attachUrl: 'http://123.207.89.83:8073/DownFile.aspx?file=../UploadFile/file/2019823111745_Brain%20regions%20in%20response%20to%20character%20feedback%20associated%20with%20the%20state%20self-esteem.pdf' },
    { describe: 'Peng, M., Wu, S., Zhenhao Shi, Jiang, K., Shen, Y., Dedovic, K., & Yang, J. (2019). Brain regions in response to character feedback associated with the state self-esteem. Biological Psychology, 148, 107734', attachName: 'Brain regions in response to character feedback associated with the state self-esteem.pdf', attachUrl: 'http://123.207.89.83:8073/DownFile.aspx?file=../UploadFile/file/2019823111745_Brain%20regions%20in%20response%20to%20character%20feedback%20associated%20with%20the%20state%20self-esteem.pdf' },
]

export default function Publications() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])

    return (
        <div className='publications'>
            <Tabs tabPosition='right'>
                <TabPane tab='2020' key='1'>
                    <List
                        dataSource={list}
                        renderItem={item => (
                            <Skeleton active loading={loading}>
                                <List.Item
                                    actions={[<a href={item.attachUrl}>附件下载 <DownloadOutlined /></a>]}
                                >
                                    <List.Item.Meta
                                        avatar={<FilePdfOutlined style={{fontSize: 26, marginTop: 20}}/>}
                                        title={item.describe}
                                        description={<a href={item.attachUrl}><LinkOutlined />{item.attachName}</a>}
                                    />
                                </List.Item>
                            </Skeleton>
                        )}
                    />
                </TabPane>
                <TabPane tab='2019' key='2'>

                </TabPane>
                <TabPane tab='2018' key='3'>

                </TabPane>
            </Tabs>
        </div>
    )
}