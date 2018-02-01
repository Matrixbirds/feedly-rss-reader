import React, { Component } from 'react';
import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import My from './my';
import Saved from './saved';
import Category from './category';
import './App.css';

const routes = [
    {path: '/', name: 'index', i18n: '首页', component: App},
    {path: '/my', name: 'my', i18n: '我的主页', component: My},
    {path: '/category', name: 'category', i18n: '分类', component: Category},
    {path: '/saved', name: 'saved', i18n: '保存的', component: Saved}
]

const Menu = () => (
    <div>
    </div>
)

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="my" component={My} />
            <Route path="category" component={Category} />
            <Route path="saved" component={Saved} />
        </div>
    </Router>
)

class App extends Component {
  render() {
    return (
        <div>
            <Menu />
            <Routes />
        </div>
    );
  }
}

export default App;
