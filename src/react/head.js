/*
* @Author: Administrator
* @Date:   2017-08-18 09:41:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-18 12:14:43
*/
import React, { Component } from "react";
import Attr from "./head/attr";//最上边属性栏
import Title from "./head/title";//标题栏
import Message from "./head/message";//标题栏
import Nav from "./head/nav";//导航栏
import "./head.css";

class Head extends Component{
	render(){
		return(
			<div className="head">
				<Attr />
				<Nav />
				<Message />
				<Title />
			</div>
		);
	}
}
export default Head;

