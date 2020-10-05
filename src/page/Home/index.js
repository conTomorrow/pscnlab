import React from 'react';
import { Carousel, Image, Card, Descriptions } from 'antd';
import './index.css';

import Img1 from '../../assets/carousel1.png';
import Img2 from '../../assets/carousel2.png';
import Img3 from '../../assets/carousel3.png';
import Img4 from '../../assets/carousel4.png';
import homeImg from '../../assets/home.jpg';
import teacherHead from '../../assets/head.jpg';

const carouselImages = [Img1, Img2, Img3, Img4];

export default function Home() {

    return (
        <div className='home'>
            <div className='carousel'>
                <Carousel autoplay>
                    {carouselImages.map((item, index) => {
                        return (
                            <div key={index} className='carouselItem'>
                                <img className='carouselImage' src={item} alt="#" />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className='describe'>
                <Card title='About Us'>
                    <Card.Grid style={{ width: 559 }}>
                        <div className='text'>
                            <p>The main goal of the <strong>Personality and Social Cognitive Neuroscience
                                    Laboratory</strong> is to investigate how brain shape personality and interact with social behavior. We
                                would like to ask a question from the perspective of social cognitive psychology, and to answer it using
                                neuroscience, physiology or endocrinology technology. </p>
                            <p>We use varieties of methods including behavioral index (response accuracy, reaction time),
                            physiological index (skin conductance, heart rate, and blood pressure), electrophysiological index
                            (Event-related potential and EEG), endocrinology index (cortisol from saliva and hair) and brain imaging to
                                explore this field.</p>
                            <p> Currently, we can offer three to four academic master graduate positions, and one PhD
                                candidate each year. Welcome to join us if you are interested in social cognitive neuroscience.</p>
                        </div>
                    </Card.Grid>
                    <Card.Grid style={{ width: 600 }}>
                        <div className='display-image'>
                            <Image
                                src={homeImg}
                            />
                        </div>
                    </Card.Grid>
                </Card>
            </div>
            <div className='teacher'>
                <Card
                    title='Principle Investigator'
                >
                    <Card.Grid style={{ width: 400 }} hoverable={false}>
                        <div className='teacher-head'>
                            <Image src={teacherHead} width='300' />
                        </div>
                    </Card.Grid>
                    <Card.Grid style={{ width: 759 }}>
                        <div className='teacher-describe'>
                            <Descriptions column={1}>
                                <Descriptions.Item label='name'>JUAN YANG</Descriptions.Item>
                                <Descriptions.Item label='email'>valleyqq@swu.edu.cn</Descriptions.Item>
                                <Descriptions.Item label='department'>Faculty of Psychology</Descriptions.Item>
                                <Descriptions.Item label='school'>Southwest University, Chongqing, China</Descriptions.Item>
                                <Descriptions.Item label='address'>No.2 Tiansheng Road, Beibei, Chongqing, China, 400715</Descriptions.Item>
                                <Descriptions.Item label='tel'>+86-23-68367697</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </Card.Grid>
                    <Card.Grid style={{ width: 759 }}>
                        <div className='career'>
                            <h4>EMPLOYMENT & EDUCATION</h4>
                            <p style={{ lineHeight: 2 }}>Professor of Psychology, Social Psychology, 2014-present, Southwest University, China <br />
                                Visiting Scholar, 2013-2014, Department of Psychology, Peking University <br />
                                Associate professor of Psychology, Basic Psychology, 2011-2014, Southwest University, China <br />
                                Lecturer, Basic Psychology, 2009-2011, Southwest University, China <br />
                                Visiting Ph.D. student, 2008-2009, Douglas Hospital, McGill University, Canada <br />
                                Ph.D., Developmental and Educational Psychology, 2009, Southwest University, China <br />
                                B.A., Educational Psychology, 2004, Sichuan Normal University, China</p>
                        </div>
                    </Card.Grid>
                </Card>
            </div>
        </div>
    )
}