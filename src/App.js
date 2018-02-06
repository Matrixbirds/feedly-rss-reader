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
import './App.scss';

const routes = [
    {path: '/', name: 'index', i18n: '首页', component: App},
    {path: '/my', name: 'my', i18n: '我的主页', component: My},
    {path: '/category', name: 'category', i18n: '分类', component: Category},
    {path: '/saved', name: 'saved', i18n: '保存的', component: Saved}
]

class Menu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isToggleOn: false}
        this.handlePin = this.handlePin.bind(this)
    }

    handlePin () {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    randomNum () {
        return Math.floor(Math.random() * (999 - 0) + 0)
    }

    render () {
        return (
            <div className={"menu" + (this.state.isToggleOn ? ' pined' : '')}>
                <div className="menu-bar">
                    <div className="row">
                        <div className="pin">
                            <i className="fas fa-align-justify"
                                onClick={this.handlePin} />
                        </div>
                    </div>
                    <div className="row-group">
                    {
                        routes.map((route, i) => (
                            <div className="row" key={i}>
                                <Link className="cell-grid" key={i}
                                    to={route.path}>{route.i18n}
                                </Link>
                            </div>
                        ))
                    }
                    </div>
                    <div className="row-group subnav">
                        <div className="row">
                            <span className="cell">
                                <h5>FEEDS</h5>
                                <i className="fas fa-cog cell-icon-right" />
                            </span>
                        </div>
                    {
                        routes.map((route, i) => (
                            <div className="row" key={i}>
                                <span className="cell-grid">
                                    <i className={"fas "+
                                        (i == 0 ? "fa-angle-right" : "fa-angle-double-right")}                                     />
                                    <Link key={i}
                                        to={route.path}>{route.i18n}
                                    </Link>
                                    <span className="num">{ this.randomNum() }</span>
                                </span>
                            </div>
                        ))
                    }
                    </div>
                    <div className="row-group subnav">
                        <div className="row">
                            <span className="cell">
                                <h5>BOARDS</h5>
                                <i class="fas fa-cog cell-icon-right" />
                            </span>
                        </div>
                    {
                        routes.map((route, i) => (
                            <div className="row" key={i}>
                                <span className="cell-grid">
                                    <i className={"fas "+
                                        (i == 0 ? "fa-angle-right" : "fa-angle-double-right")}                                     />
                                    <Link key={i}
                                        to={route.path}>{route.i18n}
                                    </Link>
                                    <span className="num">{ this.randomNum() }</span>
                                </span>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className="menu-footer">
                        <button>ADD CONTENT</button>
                </div>
            </div>
        )
    }
}

const Nav = () => (
    <div className="nav">
        <div className="column">
            <div className="grid">
                <i className="fas fa-compress" />
                <button className="red-button">UPGRADE</button>
            </div>
            <div className="grid">
                <div className="search-text">
                    <input type="text" placeholder="Search" />
                    <i className="fas fa-search search-icon" />
                </div>
                <img src={logo} className="avatar" alt="not found"/>
            </div>
        </div>
    </div>
)

const Layout = () => (
    <div className="layout">
        <Nav />
        {
        routes.map((route, i) => {
            return (<Route path={route.path}
                key={i}
                i18n={route.i18n}
                component={route.component} />)
        })
        }
    </div>
)

const Routes = () => (
    <Router>
        <div className="container">
            <Menu />
            <Layout />
        </div>
    </Router>
)

class App extends Component {
    render() {
        return (
            <Routes />
        );
    }
}

export default App;
