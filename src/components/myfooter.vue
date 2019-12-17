<template>
    <div>
        <div id="footer">
			<!--服务部分-->
			<div id="footer_searve">
				<ul>
					<li v-for="item in data1"><a href=""><i class="iconfont"></i>{{item}}</a></li>
				</ul>
			</div>

			<div id="footer_list">
				<div id="footer_list_li">
					<div v-for="item in data2">
						<ul>
							<li v-for="i in item.name">{{i}}</li>
						</ul>
					</div>
				</div>
				<div id="footer_conect">
					<p>400-100-5678</p>
					<p>周一至周日 8:00-18:00</p>
					<p>(仅收市话费)</p>
					<p><i class="iconfont"></i>人工服务</p>
				</div>
			</div>
			<div id="footer_bottom">
				<!--1010*194-->
				<div id="footer_bottom_conect">
					<img src="../assets/images/logo.png" />
					<span>
						<p class="p_first">小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 |路由器 | 米粉卡 | 政企服务 | 小米天猫店 | 小米集团隐私政策 | 小米商城隐私政策 | 小米商城用户协议 |
							问题反馈 | 廉正举报 | 诚信合规 | Select Location</p>
						<slot name="p"></slot>
					</span>
				</div>
			</div>
		</div>
        <div id="personal_dec">
			请相信，美好的事情正在发生！
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data1:['预约维修服务','7天无理由退货','15天免费换货','满150元包邮','520余家售后网点'],
            data2:[
                {name:['帮助中心','账户管理','购物指南','订单操作']},
                {name:['服务支持','售后政策','自助服务','自助服务']},
                {name:['线下门店','小米之家','服务网店','授权体验店']},
                {name:['关于小米','了解小米','加入小米','投资者关系']},
                {name:['关注我们','新浪微博','官方微信','联系我们']},
                {name:['特色服务','F码通道','礼物码','防伪查询']}
            ]
        }
    }
}
</script>

<style>
#footer {
	width: 100%;
	height: 480px;
	margin: 0px auto;
	background-color: white;
}
#footer #footer_searve {
	width: 1226px;
	overflow: hidden;
	margin: 0 auto;

}

#footer #footer_searve ul {
	height: 80px;
	font-size: 17px;
	border-bottom: 1px solid gray;
	display: flex;
	justify-content: space-evenly;
}
#footer #footer_searve ul li {
	width: 246px;
	height: 26px;
	margin: auto;
	text-align: center;
	border-right: 1px solid gainsboro;
	float: left;
}

#footer #footer_searve ul li:last-child {
	border-right: none;
}
#footer #footer_searve ul li a {
	color: gray;
}

#footer_list {
	width: 1226px;
	height: 190px;
	font-size: 10px;
	color: #3C3C3C;
	margin: 0 auto;
}

#footer_list  #footer_list_li {
	height: 120px;
	width: 984px;
	border-right: 1px solid gray;
	float: left;
	margin-top: 40px;
}

#footer_list #footer_list_li div:nth-child(n) {
	width: 160px;
	float: left;
}

#footer_list #footer_list_li div:nth-child(n) li {
	padding: 5px 0px;
}
#footer_list #footer_list_li div:nth-child(n) li:first-child {
	font-size: 18px;
	padding-top: 0px;
	color: black;
	margin-bottom: 10px;
}

#footer_list #footer_list_li div:nth-child(n) li:last-child {
	padding-bottom: 0px;
}

#footer_conect {
	width: 242px;
	height: 100px;
	margin-top: 40px;
	text-align: center;
	float: right;
}

#footer_conect p:first-child {
	font-size: 18px;
	color: orange;
	font-weight: 600;
	padding-bottom: 10px;
}

#footer_conect p:nth-child(3) {
	padding: 0px 0px 20px 0px;
	
}

#footer_conect p:last-child {
	width: 120px;
	height: 30px;
	line-height: 30px;
	color: orange;
	font-size: 15px;
	border: 1px solid orangered;
	margin: 0 auto;
}

#footer_bottom {
	width: 100%;
	height: 225px;
	padding-top: 30px;
	background-color: rgb(245,245,245);
}

#footer_bottom_conect {
	width: 1226px;
	height: 194px;
	margin: 0 auto;
	color: #3C3C3C;
	font-size: 10px;
	letter-spacing: 0px;
	position: relative;
}
#footer_bottom_conect>img{
	width: 50px;
}
#footer_bottom_conect span {
	position: absolute;
	top: 0px;
	left: 55px;
	bottom: 167px;
	float: left;
}
#footer_bottom_conect .p_first {
	font-weight: 600;
}
#personal_dec {
	width: 100%;
	height: 300px;
	font-family: '宋体';
	font-size: 50px;
	line-height: 200px;
	text-align: center;
	background-color: rgb(245,245,245);
}
</style>
