import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="active">旅游介绍</li>
                <li>边赛信息</li>
                <li>主赛结果</li>
            </ul>
        );
    }
}
export default Nav;
