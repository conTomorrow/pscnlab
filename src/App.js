import React, { useEffect } from 'react';
import MainContent from './page/MainContent';
import { Route, Switch } from 'react-router-dom';
import { currentPage } from './util/helper';

import './App.css';

function App() {

  useEffect(() => {
    const location = window.location;
    const { pathname } = location;
    const path = pathname.substr(1);
    if(currentPage.indexOf(path) === -1) {
      //不存在的页面跳转到404页面
      window.location.replace('/404');
    }
  }, [])

  return (
    <Switch>
      <Route path='/' component={MainContent} />
    </Switch>
  );
}

export default App;
