/*
* @Author: Administrator
* @Date:   2017-08-18 09:41:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-18 17:29:49
*/
import React,{Component} from "react";
lis = ["旅游介绍", "边赛信息", "主赛结果"];
class Nav extends Component{
	state ={
		index=0;//className="active"
	}
	getInitialState: function() {
    	return {className: "active"};
  	},
	
	liClick:function(){

	}
	render(){
		return(
			<ul className="nav">
				<li onClick={this.liClick}>{lis}</li>
			</ul>
		);
	}
}
export default Nav;