<template>
    <div id="changpic">
			<div id="changpic_list">
				<ul>
					<li v-for="item in data1"><a href="">{{item}}</a><span>></span></li>
				</ul>
			</div>
			<!--轮播图 及列表导航的结束标签-->
		</div>
</template>

<script>
export default {
     data(){
         return{
             data1:['手机 电话卡','电视 盒子','笔记本 平板','家电 插线板','出行 穿戴','智能 路由器','电源 配件','健康 儿童','耳机 音箱','生活 箱包'],
         }
     }
}
</script>

<style>
#changpic {
	height: 460px;
	width: 1226px;
	margin: 0 auto;
	
	background: url(../assets/images/446.jpg) 0px 0px/100% 100%;
	overflow: hidden;
	z-index: 999;
}

/*左侧商品列表*/
#changpic_list {
	height: 100%;
	width: 234px;
	background-color: rgba(0,0,0,0.3);
	float: left;
	padding: 25px 30px;
	
}

/*左侧的竖行列表*/
#changpic_list ul li {
	width: 100%;
	height: 42px;
	
}

#changpic_list ul li a {
	
	font-size: 13px;
	color: white;
}
/*列表右侧的标签*/
#changpic_list ul li span {
	color: white;
	font-size: 13px;
	display: block;
	float: right;
}
</style>
