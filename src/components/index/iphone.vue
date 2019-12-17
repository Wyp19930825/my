<template>
    <!--手机展示的头部引导-->
	<div id="phone">
		<div id="phone_leader">
			<h5>手机</h5>
			<div><a href="">查看更多<span>></span></a></div>
		</div>
<!--一些手机的详细信息-->
		<div id="phone_goods">
			<ul>
				<!--左侧的大图片-->
				<li><img src="../../assets/images/460.jpg"/></li>
				<!--手机特价的详细信息-->
				<li class="phone_goods_show" v-for="item in msg">
					<a href="#">
					<div><img :src="item.url"/></div>
					<p>{{ item.name }}</p>
					<p class="dec">{{ item.desc }}</p>
					<p class="price"><span>{{ item.cellPrice }}</span><span>{{ item.price }}</span></p>
					</a>
				</li>
			</ul>
			<!--phone_goods的结束标签-->
		</div>
		<!--phone的结束标签-->
	</div>
</template>
<script>
export default {
    data(){
        return{
            msg:[
                {url:require('../../assets/images/461.jpg'),name:'Redmi k20 Pro 6GB+128GB',desc:'骁龙855 弹出全面屏',price:'2599元',cellPrice:'2299元'},
                {url:require('../../assets/images/462.jpg'),name:'Redmi Note7',desc:'4800万拍照千元机',price:'1399元',cellPrice:'1199元'},
                {url:require('../../assets/images/463.jpg'),name:'小米9 王源限量版',desc:'骁龙855 索尼4800万三摄',price:'',cellPrice:'3599元'},
                {url:require('../../assets/images/464.jpg'),name:'小米Mix3 8GB+128GB',desc:'DxO 百分拍照手机',price:'3599元',cellPrice:'2599元'},
                {url:require('../../assets/images/465.jpg'),name:'小米CC9e',desc:'',price:'',cellPrice:'1299元起'},
                {url:require('../../assets/images/466.jpg'),name:'小米CC9',desc:'3200万自拍 4800万三摄',price:'2599元',cellPrice:'2599元'},
                {url:require('../../assets/images/467.jpg'),name:'小米CC9 8GB+256GB 美图定制版',desc:'骁龙855 弹出全面屏',price:'2599元',cellPrice:'2299元'},
                {url:require('../../assets/images/468.jpg'),name:'Redmi Note 7 Pro',desc:'骁龙855 弹出全面屏',price:'1599元',cellPrice:'1399元'}
            ]
        }
    }
}
</script>
<style lang="">

#phone {
	width: 1226px;
	height: 500px;
	margin: 0 auto;
}
#phone #phone_leader {
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
#phone #phone_leader div span {
	display: block;
	width: 30px;
	height: 30px;
	color: white;
	line-height: 30px;
	text-align: center;
	border-radius:50% ;
	float: right;
	background-color: rgba(176,176,176,0.8);
}
#phone #phone_leader div a {
	color: #3c3c3c;
	font-size: 16px;
}
#phone_goods {
	width: 100%;
	height: 700px;
}
#phone_goods ul li {
	background-color: white;
}
#phone_goods ul li:first-child{
	width: 234px;
	height: 614px;
	float: left;
}
#phone_goods ul li:first-child img {
	width: 100%;
	height: 100%;
}
#phone_goods ul li:nth-child(n+2) {
	width: 235px;
	height: 300px;
	
	float: left;
	padding: 0px 10px;
	text-align: center;
	margin-left: 13px;
	margin-bottom: 13px ;
}
/*手机部分的样式*/
/*从第二个li开始  为div设置宽高样式*/
#phone #phone_goods ul li:nth-child(n+2) div  {
	width: 160px;
	height: 160px;
	margin: 20px auto;
}
/*为所有的右侧的li中的img设置宽高样式  设置距离盒子上方的margin值*/
#phone #phone_goods ul li:nth-child(n+2) img {
	margin: 10px auto;
	width: 160px;
	height: 160px;
	
}
/*为第二个和第四个子元素设置样式    即第一个p和第二个p  下面的设置可以覆盖该样式*/
#phone #phone_goods ul .phone_goods_show:nth-of-type(n+2) p{
	padding: 5px 0px;
	font-size: 15px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
#phone #phone_goods ul .phone_goods_show .dec,.price {
	color: gray;
	font-size: 13px;
}
#phone #phone_goods .price span:first-child {
	color: orangered;
	font-weight: bold;
}
#phone #phone_goods .price span:last-child {
	text-decoration: line-through;
}
</style>
