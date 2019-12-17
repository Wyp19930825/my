<template>
    <div id="nav_bar">
			<div id="nav_bar_leader">
				<!--头部的左侧导航部分-->
				<div id="nav_bar_l">
					<ul>
						<li v-for="item1 in data1"><a href="javascript:void(0)">{{item1}}</a></li>
					</ul>
				</div>
				<!--头部右侧的登录注册部分-->                
				<div id="nav_bar_r">
					<ul>
						<li v-show="!isShow"><router-link to="/login">登录</router-link></li>
						<li v-show="isShow" class="loginname">欢迎:{{loginname}}</li>
						<li v-show="isShow" class="loginname" @click="out">退出</li>
			      		<li><router-link to="/goods" exact>商品</router-link></li>
			      		<li><router-link to="/index">首页</router-link></li>
            			<li><router-link to="/car"><img src="../assets/images/buycart.png"/>购物车({{cartdata.length}})</router-link></li>
					</ul>
				</div>
			<!--nav_bar_leader结束标签-->
			</div>
			<!--头部通栏结束标签-->
		</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
			data1:['小米商城','MIUI','loT','云服务','金融','有品','小爱开放平台','企业团购','资质证照','协议规则','下载app','Select Location'],
			isShow:false,
			loginnname:''
        }
	},
	computed: {
		...mapState(['cartdata'])
	},
	created() {
		 let loginname = this.$local.fetch('vue12').userTel
		 if(loginname){
			 this.isShow = !this.isShow
			 this.loginname = loginname
		 }
		
	},
	methods: {
		 out(){
            this.$local.save('vue12',null)
            window.location.reload()
        }
	},
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.loginname{
	color: #fff
}
@font-face {
  font-family: 'icomoon';
  src:  url('../fonts/icomoon.eot?fs31od');
  src:  url('../fonts/icomoon.eot?fs31od#iefix') format('embedded-opentype'),
    url('../fonts/icomoon.ttf?fs31od') format('truetype'),
    url('../fonts/icomoon.woff?fs31od') format('woff'),
    url('../fonts/icomoon.svg?fs31od#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

i.iconfont {
	 font-family: 'icomoon';
	 font-style: normal;
}


#nav_bar {
	width: 100%;
	height: 38px;
	background-color: black;
	opacity: 0.8;
}
/*导航栏居中的部分*/
#nav_bar_leader {
	width: 1226px;
	height: 38px;
	margin: 0px auto;
	
}
#nav_bar_l {
	height: 38px;
	float: left;
	
}

#nav_bar_l ul li {
	font-size: 11px;
	height: 14px;
	line-height: 14px;
	margin-top: 12px;
	text-align: center;
	padding: 0px 10px;
	border-right: 1px solid gray;
	float: left;
}
#nav_bar_l ul li:first-child{
	padding-left: 0px;
}
#nav_bar_l a {
	display: block;
	color: grey;
}

#nav_bar_r {
	height: 38px;
	float: right;
	
}
#nav_bar_r a {
	display: block;
	color: grey;
}
#nav_bar_r .router-link-active{
	color: #fff;
}
#nav_bar_r ul li span {
	display: block;
	color: grey;
}

#nav_bar_r ul li {
	font-size: 11px;
	height: 14px;
	line-height: 14px;
	margin-top: 12px;
	text-align: center;
	padding: 0px 10px;
	float: left;
	border-right: 1px solid gray;
}


#nav_bar_r ul li:last-child {
	margin-top: 0px;
	height: 38px;
	line-height: 38px;
	background-color: rgb(66,66,66);
	text-indent: 15px;
	float: right;
	
}
#nav_bar_r ul li:nth-child(n+3) {
	border: none;
}
#nav_bar_r ul li:last-child img {
	width: 22px;
	height: 16px;
	padding-top: 2px;
	
}

</style>
