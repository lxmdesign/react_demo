import React, { Component } from 'react';
import logo from "../logo.svg";
class Content extends Component {
    render() {
        return (
            <div>
                <img className="logo" src={logo}/>
                <p className="content">
                    2017.04.23 —— 2017.05.12 <br />
                    澳大利亚墨尔本皇冠娱乐场…… 
                </p>
                <div>
                    <span className="btn">比赛中</span>
                    <span className="btn">已在售票</span>
                </div> 
            </div>
        );
    }
}
export default Content;
