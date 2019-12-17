<template>
  <div id="buy">
		<!--小米闪购头部-->
		<div id="thu_buy">
			<div>
				<h5>小米闪购</h5>
			</div>
			<div>
				<span><</span>
				<span>></span>
			</div>
			<!--小米闪购头部结束标签-->
		</div>

		<!--闪购的内容部分-->
		<div id="buy_contener">

			<ul>
				<!--闪购左侧的倒计时部分-->
				<li>
					<p class="top_p">14:20场</p>
					<i class="iconfont" style="font-size: 70px; color: red;"></i>
					<p class="mid_p">距离结束还有</p>
					<p class="bt_p">
						<img src="../../assets/images/倒计时.png"/>
					</p>
				</li>
				<!--接下来是四个相同的盒子  浮动  样式一样  修改内容即可-->
				<li class="buy_contener_show" v-for="item in msg">
					<div><img :src="item.url"/></div>
					<!--h3块级元素  可以很方便的设置字体大小 以及达到换行的效果-->
					<h3>{{ item.name }}</h3>
					<p class="dec">{{ item.desc }}</p>
					<p class="price"><span>{{ item.price }}元</span><span>{{ item.cellPrice }}元</span></p>
				</li>
				<!--闪购列表的结束ul标签-->
			</ul>

		<!--闪购部分全部结束-->
		</div>
		<!--购买buy部分全部结束  下面是一个通栏的图片以及手机的展示部分-->
	</div>
</template>

<script>
export default {
data(){
        return{
            msg:[
                {url:require('../../assets/images/水壶.png'),name:'小米净水器滤芯 后置活性炭强化吸附',desc:'进一步净化水中残余异味，并改善口感',price:469,cellPrice:69},
                {url:require('../../assets/images/水壶2.png'),name:'云米不锈钢真空保温壶 黑色',desc:'持续保温',price:'109',cellPrice:'69'},
                {url:require('../../assets/images/路由器.png'),name:'小米路由器4c 白色',desc:'300M单频，高增益4天线',price:'79',cellPrice:'59'},
                {url:require('../../assets/images/滤芯.png'),name:'小米净水器 反渗透滤芯（60个月长期质保)',desc:'进一步净化水中残余异味，并改善口感',price:69,cellPrice:65},        
            ]
        }
}
}
</script>

<style>
#buy {
	width: 1226px;
	height: 402px;
	margin: 0 auto;

}
#thu_buy {
	width: 100%;
	height: 62px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
/*闪购头部右侧存放箭头的区域*/
#thu_buy div:nth-child(2) {
	line-height: 23px;
	text-align: center;
	
}
#thu_buy div:nth-child(2) span {
	display: block;
	width: 35px;
	color: gray;
	height: 23px;
	float: left;
	line-height: 18px;/*用行高使其居中不行？为什么*/
	text-align: center;
	border: 1px solid gainsboro;
}
#buy_contener {
	width: 100%;
	height: 500px;
	font-size: 13px;
	color: #3c3c3c;
	
}
#buy_contener ul li {
	width: 233px;
	height: 340px;
	padding: 50px 10px;
	text-align: center;
	float: left;
	margin-left: 15px;
	background-color: rgb(250,250,250);
	
}  
#buy_contener ul li:first-child {
	border-top: 1px solid red;
	margin-left: 0px;
	padding: 61px 30px; /*设置父盒子的宽高  使其将里面的内容撑起来*/
	background-color: rgba(237,231,231);
}
#buy_contener ul li:nth-child(2) {
	border-top: 1px solid blue;
}
#buy_contener ul li:nth-child(3) {
	border-top: 1px solid red;
}
#buy_contener ul li:nth-child(4) {
	border-top: 1px solid deepskyblue;
}
#buy_contener ul li:last-child {
	border-top: 1px solid orange;
}
#buy_contener ul li:nth-child(n+2) img {
	width: 160px;
	height: 160px;
	
}
#buy_contener ul  .top_p {
	padding-bottom: 28px;/*与下面的内容撑起来*/
	font-size: 20px;
	color: red;
}
#buy_contener ul li:first-child .mid_p {
	padding: 25px 0px;	
	font-size: 15px;
	color: gray;
}
#buy_contener ul .buy_contener_show h3{
	padding: 5px 0px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
#buy_contener ul .buy_contener_show .dec,.price {
	color: gray;
}
#buy_contener .price span:first-child {
	color: orangered;
	font-weight: bold;
}
#buy_contener .price span:last-child {
	text-decoration: line-through;
}
</style>
