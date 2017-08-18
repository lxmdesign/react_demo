import React, { Component } from 'react';
import logo from "../logo.svg";
class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="content_left">
                    <img alt="this is a logo" className="logo" src={logo}/>                    
                </div>
                <div className="content_right">
                    <p className="text">
                        2017.04.23 —— 2017.05.12 <br />
                        澳大利亚墨尔本皇冠娱乐场…… 
                    </p>
                    <div>
                        <span className="btn">比赛中</span>
                        <span className="btn">已在售票</span>
                    </div>
                </div>                 
            </div>
        );
    }
}
export default Content;
