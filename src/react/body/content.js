/*
* @Author: Administrator
* @Date:   2017-08-18 09:41:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-18 15:45:36
*/
import React, { Component } from "react";
const content = "2016年博雅棋牌竞技赛之BPT海天盛筵站，是由博雅互动与“海天盛筵”主办方鸿洲集团，联合举办的棋牌竞技赛事系列活动，将于12月8日至11日在海南三亚山海天万豪酒店举行，赛事涵盖斗地主、象棋、德州扑克等多项棋牌内容，共设388个席位激烈角逐！";
const content2 = "比赛期间，参赛选手们不仅可以参与激动人心的牌技对决，赢取高达388万人民币和238亿游戏币奖励，还可以畅享奢华的“海天盛筵”展会内容，体验世界顶级的游艇、名车、公务机等高端生活方式！追求至臻生活，绽放至诚梦想。2016年博雅棋牌竞技赛不容错过";
class Content extends Component{
	render(){
		return(
			<div className="content">
				
				<br/>
				<a>赛事详情&gt;</a><br/>
				<p>{content}<br/>{content2}</p>

				<div className="p20">
					<button className="btn-bottom" onClick={this.btnClick}>
						立即购买
					</button>
				</div>
			</div>
		);
	}
}
export default Content;