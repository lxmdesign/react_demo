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