import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from '../Home';
import Research from '../Research';
import People from '../People';
import Teach from '../Teach';
import Publications from '../Publications';
import './index.css';

const { Header, Content, Footer } = Layout;

export default function Main() {

    const [current, setCurrent] = useState('home');

    useEffect(() => {
        const { pathname } = window.location;
        const name = pathname.substr(1);
        setCurrent(name);
    }, [])

    const handleClick = useCallback((e) => {
        setCurrent(e.key);
    },[])

    return (
        <div>
            <Header style={{ backgroundColor: "white" }}>
                <div className='header'>
                    <div className='logo'></div>
                    <div className='menus'>
                        <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
                            <Menu.Item key='home'>
                                <Link to='/home'>Home</Link>
                            </Menu.Item>
                            <Menu.Item key='research'>
                                <Link to='/research'>Research</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/people'>People</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/teach'>Teach</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/publications'>Publications</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </Header>
            <Content style={{backgroundColor: "white"}}>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/research' component={Research} />
                    <Route path='/people' component={People} />
                    <Route path='/teach' component={Teach} />
                    <Route path='/publications' component={Publications} />
                    <Redirect from='/' to='/home' />
                </Switch>
            </Content>
            <Footer>
                <div className='footer'>
                    <span>西南大学心理实验室&nbsp;&nbsp;Copyright @ PSCN Lab of Juan Yang</span>
                </div>
            </Footer>
        </div>
    )
}