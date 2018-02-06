import React from 'react';

export default class Layout extends React.Component {
    shouldComponentUpdate() {
        return false
    }

    render () {
        return <div className="page-layout">{this.props.children}</div>
    }
}