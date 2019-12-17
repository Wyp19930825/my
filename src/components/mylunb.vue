<template>
    <div>
        <div id="phone_dis">
			<div class="phone_cont_dec">
				<p v-for="item in datas"><h1>{{item}}</h1></p>
			</div>
			<div class="phone_cont">
				<div class="phone_bt1"></div>
				<div class="phone_bt2"></div>
				<div class="phone_bt3"></div>
				<div class="phone_1"><img src="../assets/images/part1-1.jpg"/></div>
				<div class="phone_2"><img src="../assets/images/part1-2.jpg"/></div>
				<div class="phone_3"><img src="../assets/images/part1-3.jpg"/></div>
			</div>
			<!--显示隐藏部分结束标签-->
		</div>
        <div><img src="../assets/images/4800hengfu.png" width="100%" height="475" /></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            datas:['眼影色”美学配色','皓月白 / 梦幻蓝 / 曜石黑','手里的盛世美颜'],
            item:''
        }
    }
}
</script>

<style>
#phone_dis {
	width: 100%;
	height: 950px;
	background-color: white;
	padding-top: 100px;
}

#phone_dis .phone_cont_dec {
	width: 550px;
	height: 150px;
	margin-left: 400px;
	letter-spacing: 4px;
	line-height: 50px;
}
.phone_cont {
	width: 1100px;
	height: 720px;
	
	margin: 0 auto;
	position: relative;
}

.phone_cont 
.phone_1,
.phone_2,
.phone_3
{
	width: 900px;
	height: 688px;
	margin: 0 auto;
	float: none;
}

.phone_cont img {
	width: 100%;
	height: 100%;
}

#phone_dis .phone_cont .phone_1 {
	display: none;
}

#phone_dis .phone_cont .phone_2 {
	display: none;
}

#phone_dis .phone_cont .phone_3 {
	display: block;
}

.phone_bt1{
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: deepskyblue;
	float: left;
	margin-left: 40%;
	position: absolute;
	top: 670px;
	
}
.phone_bt2{
	width: 30px;
	height: 30px;
	border-radius: 50%;	
	background-color: slateblue;
	float: left;
	margin-left: 50%;
	position: absolute;
	top: 670px;
}
.phone_bt3{
	width: 30px;
	height: 30px;
	border-radius: 50%;
	
	background-color: darkviolet;
	float: left;
	margin-left: 60%;
	position: absolute;
	top: 670px;
}

#phone_dis .phone_cont .phone_bt1:hover ~.phone_1{
	transition: block 1s;
	display: block;
}
#phone_dis .phone_cont .phone_bt1:hover ~.phone_3{
	display: none;
}
#phone_dis .phone_cont .phone_bt2:hover ~.phone_2{
	display: block;
}
#phone_dis .phone_cont .phone_bt2:hover ~.phone_3{
	display: none;
}
</style>
