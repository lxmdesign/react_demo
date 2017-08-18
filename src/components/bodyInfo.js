import React, { Component } from 'react';
const bodyFont = "2016年博雅棋牌竞技赛之BPT海天盛筵站，是由博雅互动与“海天盛筵”主办方鸿洲集团，联合举办的棋牌竞技赛事系列活动，将于12月8日至11日在海南三亚山海天万豪酒店举行，赛事涵盖斗地主、象棋、德州扑克等多项棋牌内容，共设388个席位激烈角逐！比赛期间，参赛选手们不仅可以参与激动人心的牌技对决，赢取高达388万人民币和238亿游戏币奖励，还可以畅享奢华的“海天盛筵”展会内容，体验世界顶级的游艇、名车、公务机等高端生活方式！追求至臻生活，绽放至诚梦想。2016年博雅棋牌竞技赛不容错过";
class Body extends Component {
    btnClick = () => {
        console.log(this)
        console.log("按钮被按下")
    }
    render() {
        return (
            <div className="bodyInfo_list">
                <ul>
                    <li>
                        <div className="body_info_left">
                            <p className="body_info_date">2月6日</p>
                            <p>7Days</p>
                        </div>
                        <div className="body_info_right">
                            <p className="body_info_title">WSOP国际扑克竞标赛-澳门站</p>
                            <p className="body_info_money">入场资格：¥356</p>
                        </div>
                    </li>
                    <li>
                        <div className="body_info_left">
                            <p className="body_info_date">2月6日</p>
                            <p>7Days</p>
                        </div>
                        <div className="body_info_right">
                            <p className="body_info_title">WSOP国际扑克竞标赛WSOP国际扑克竞标赛WSOP国际扑克竞标赛-澳门站</p>
                            <p className="body_info_money">
                                入场资格：¥356
                                <span className="info_label">ROY</span>
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="btn_box">
                    <button className="btn_in_body" onClick={this.btnClick}>
                        立即购买
                    </button>
                </div>
            </div>
        );
    }
}
export default Body;
