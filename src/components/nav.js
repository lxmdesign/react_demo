import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom'
class Nav extends Component {
    navs = ["旅游介绍", "边赛信息", "主赛结果"]
    render() {
        return (
            <ul className="nav">
                {this.navs.map((value, key) =>
                    <li key={key}>
                        <NavLink className="navLink" activeClassName="active" to={`/${key}`}>
                            {value}
                        </NavLink>
                    </li>
                )}
            </ul>
        );
    }
}
export default Nav;
