/*
* @Author: Administrator
* @Date:   2017-08-18 09:41:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-18 14:28:28
*/
import React, { Component } from "react";
import Content from './body/content';
import  './body.css';
class Body extends Component{
	render(){
		return(
			<div className="body">
				<Content />
			</div>
		);
	}
}
export default Body;