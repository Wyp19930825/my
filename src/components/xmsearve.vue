<template>
    <div id="searve">
			<div id="searve_list">
				<!--服务列表部分 icon实现-->
				<ul>
					<li v-for="item in data1"><i class="iconfont" style="font-size: 23px;">{{item.ename}}</i><a href="">{{item.name}}</a></li>
				</ul>
			</div>
			<!--浮动图片部分-->
			<div v-for="item in data2">
				<img :src="item" />
			</div>
			<!--服务部分结束标签-->
		</div>
</template>

<script>
export default {
data(){
    return{
         data1:[
             {ename:'',name:'小米秒杀'},
             {ename:'',name:'企业团购'},
             {ename:'',name:'F码通道'},
             {ename:'',name:'米粉卡'},
             {ename:'',name:'以旧换新'},
             {ename:'',name:'话费充值'}
             ],
         data2:[require('../assets/images/456.jpg'),require('../assets/images/457.jpg'),require('../assets/images/458.jpg')]
    }
}
}
</script>

<style>
#searve {
	width: 1226px;
	height: 170px;
	margin: 20px auto;
	
	overflow: hidden;
}

#searve div:nth-of-type(n+1) {
	width: 316px;
	height: 170px;
	float: left;
	margin-left: 15px;
}


#searve div img {
	width: 100%;
	height: 100%;
}

/*icon小图片区域*/
#searve #searve_list {
	width: 233px;
	height: 170px;
	background-color: skyblue;
	margin-left: 0px;
	float: left;
}


#searve_list ul li {
	width: 33.33%;
	height: 85px;
	padding: 20px 0px; /*上下设置padding值 将内容撑下来*/
	text-align: center;
	border-left: 1px solid darkgoldenrod;
	border-top: 1px solid darkgoldenrod;
	float: left;
}
#searve_list ul li a {
	font-size: 10px;
	display: block;
	
}
</style>
