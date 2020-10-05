import React, { useEffect } from 'react';
import { Card, Image } from 'antd';
import { getData } from '../../util/request';
import { ERROR_IMAGE_URL } from '../../util/helper';
import './index.css';

import p4 from '../../assets/p4.jpg';
import p2 from '../../assets/p2.jpg';

export default function Research() {

    // useEffect(() => {
    //     getData('http://10.129.7.191:7300/mock/5f61de0640a755002021ebd0/example/research').then(res => {
    //         console.log(res);
    //     })
    // }, [])

    return (
        <div className='research'>
            <Card title='Impact of background stress on acute stress reactivity'>
                <Card.Grid style={{ width: 400 }}>
                    <Image src={p4} fallback={ERROR_IMAGE_URL}/>
                </Card.Grid>
                <Card.Grid style={{ width: 799 }}>
                    <p>
                        Stress has been defined as ‘anything in the outside world that knocks you out of homeostatic balance, and the stress response is what your body does to reestablish homeostasis’. The presence or absence of a ‘background’ stress may alter responsiveness to acute stress. We are interested in whether repeated or prolonged exposure to background stress lead to the change of neural stress response.
                    </p>
                </Card.Grid>
            </Card>
            <Card title='Early life adversity' style={{ backgroundColor: '#F6F6F8' }}>
                <Card.Grid style={{ width: 799 }}>
                    <p>
                        Stress has been defined as ‘anything in the outside world that knocks you out of homeostatic balance, and the stress response is what your body does to reestablish homeostasis’. The presence or absence of a ‘background’ stress may alter responsiveness to acute stress. We are interested in whether repeated or prolonged exposure to background stress lead to the change of neural stress response.
                    </p>
                </Card.Grid>
                <Card.Grid style={{ width: 400 }}>
                    <Image src={p2} fallback={ERROR_IMAGE_URL}/>
                </Card.Grid>
            </Card>
        </div>
    )
}