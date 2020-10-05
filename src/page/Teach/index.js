import React from 'react';
import { Tabs, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons'
import './index.css';

const {TabPane} = Tabs;

export default function Teach() {
    return (
        <div className='teach'>
            <Tabs tabPosition='right'>
                <TabPane tab='Social psychology' key='1'>
                    <p>Social Psychology is a science that studies the influences of our situations, with special attention to how we view and affect one another. More precisely, it is the scientific study of how people think about, influence, and relate to one another.</p>
                    <p>Social psychology lies at psychology’s boundary with sociology. Compared with sociology (the study of people in groups and societies), social psychology focuses more on individuals and does more experimentation. Compared with personality psychology, social psychology focuses less on individuals’ differences and more on how individuals, in general, view and affect one another.</p>
                    <p>Social psychology studies our thinking, influences, and relationships by asking questions that have intrigued us all. For example: Does our social behavior depend more on the objective situations we face or how we construe them? Would people be cruel if ordered? To help or to help oneself? (Cited from David Myers, Social Psychology, 11th Edition)</p>
                    <img src="http://81.68.113.133:8081/UploadFile/image/20170531/20170531094522_3547.png" alt=""/>
                    <Divider orientation='left' style={{fontSize: 14,marginTop: 40}}>Slides Download</Divider>
                    <ul className='teach-resource'>
                        <li>
                            <a title='点击下载' href="http://81.68.113.133:8081/DownFile.aspx?file=../UploadFile/file/20161117144652_Social%20psychology-Ch%2001.pdf">Social psychology-Ch 01.pdf&nbsp;&nbsp;<DownloadOutlined /></a>
                        </li>
                        <li>
                            <a title='点击下载' href="http://81.68.113.133:8081/DownFile.aspx?file=../UploadFile/file/20161117144652_Social%20psychology-Ch%2001.pdf">Social psychology-Ch 01.pdf&nbsp;&nbsp;<DownloadOutlined /></a>
                        </li>
                        <li>
                            <a title='点击下载' href="http://81.68.113.133:8081/DownFile.aspx?file=../UploadFile/file/20161117144652_Social%20psychology-Ch%2001.pdf">Social psychology-Ch 01.pdf&nbsp;&nbsp;<DownloadOutlined /></a>
                        </li>
                        <li>
                            <a title='点击下载' href="http://81.68.113.133:8081/DownFile.aspx?file=../UploadFile/file/20161117144652_Social%20psychology-Ch%2001.pdf">Social psychology-Ch 01.pdf&nbsp;&nbsp;<DownloadOutlined /></a>
                        </li>
                        <li>
                            <a title='点击下载' href="http://81.68.113.133:8081/DownFile.aspx?file=../UploadFile/file/20161117144652_Social%20psychology-Ch%2001.pdf">Social psychology-Ch 01.pdf&nbsp;&nbsp;<DownloadOutlined /></a>
                        </li>
                    </ul>
                </TabPane>
                <TabPane tab='Self-esteem and the Brain' key='2'>
                    <p>Self-esteem is a broadly defined personality variable referring to the degree to which and individual values and accepts him- or herself. It is one’s value judgment of one’s personal worthiness. This judgment expresses the degree of approval or disapproval of oneself. It indicates the extent to which an individual believe him or herself capable, significant, and successful.</p>
                    <p>Though the clinical relevance and popular appeal of self-esteem are well established, systematic studies of the neural systems that give rise to self-esteem are conspicuously sparse in the neuroimaging literature. Previous work has shown that self-esteem modulates neural responses to social feedback in the dorsal anterior cingulate cortex (dACC), dorsal medial prefrontal cortex (dMPFC), posterior superior temporal sulcus (pSTS) and anterior insula as well we the ventral anterior cingulate cortex (vACC) (Chavez & Heatherton, 2015).</p>
                    <img src="http://81.68.113.133:8081/UploadFile/image/20170531/20170531094631_2666.png" alt=""/>
                </TabPane>
            </Tabs>
        </div>
    )
}