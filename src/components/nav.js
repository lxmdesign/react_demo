import React, { Component } from 'react';

class Nav extends Component {
    state = {
        activeLiIndex: 0
    }
    navs = ["旅游介绍", "边赛信息", "主赛结果"]
    liClick = (activeLiIndex) => {
        this.setState({
            activeLiIndex
        })
    }
    render() {
        const { activeLiIndex } = this.state;
        return (
            <ul className="nav">
                {this.navs.map((value, key) => <li key={key} className={activeLiIndex === key ? "active" : ""} onClick={() => this.liClick(key)}>{value}</li>)}
            </ul>
        );
    }
}
export default Nav;
