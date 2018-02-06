import React from 'react'
import Layout from './layout';

export default class Category extends React.Component {
    render () {
        return (
            <Layout>
                <header>
                    <h2 className="title">
                        <span>Category</span>
                        <div>Description.............</div>
                    </h2>
                    <nav className="btns">
                        <button className="read-button"></button>
                        <button className="dropdown"></button>
                        <button className="refresh"></button>
                        <button className="filter"></button>
                    </nav>
                </header>
            </Layout>
        )
    }
}
