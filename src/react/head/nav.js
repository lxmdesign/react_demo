import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom'
const navs = [{
    name: "旅游介绍",
    path: "/travel"
}, {
    name: "边赛信息",
    path: "/info"
}, {
    name: "主赛结果",
    path: "/result"
}]
class Nav extends Component {
    render() {
        // const jsxs = [];
        // for (let i = 0; i < navs.length; i++) {
        //     const routerTable = navs[i];
        //     jsxs.push(
        //         <li key={i}>
        //             <NavLink className="navLink" activeClassName="active" to={routerTable.path}>
        //                 {routerTable.name}
        //             </NavLink>
        //         </li>
        //     )
        // }
        return (
            <ul className="nav">
                {/* {jsxs} */}
                {
                    navs.map((routerTable, key) => <li key={key}>
                        <NavLink className="navLink" activeClassName="active" to={routerTable.path}>
                            {routerTable.name}
                        </NavLink>
                    </li>)
                }
            </ul>
        );
    }
}
export default Nav;
