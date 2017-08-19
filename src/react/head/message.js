/*
* @Author: Administrator
* @Date:   2017-08-18 12:13:38
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-18 13:49:04
*/
import React,{Component} from "react";

class Message extends Component{
	render(){
		return(
			<div className="message">
				<div className="leftM">
				</div>
				<div className="rightM">
					<div className="timer">2017.04.23-2017.05.12</div>
					<div className="detail">澳大利亚墨尔本皇冠娱乐场澳大是寿...</div>
					<div className="btn">
						<span>比赛中</span>
                    	<span>已在售票</span>
					</div>
				</div>
			</div>     
		);
	}
}
export default Message;