<template>
    <div id="goods_pic">
			<div class="center_pic">
				<div>
					<slot name="p"></slot>
                    <slot name="z"></slot>
				</div>
				<div><img src="../assets/images/index0.png" width="440" height="705"/></div>
			</div>
			<!--大图片部分结束标签-->
		</div>
</template>

<script>
export default {

}
</script>

<style>
#goods_pic {
	width: 100%;
	height: 800px;
	margin: 0 auto;
	color: white;
	font-weight: 100;
	background: url(../assets/images/bg.jpg) no-repeat 0px 0px;

}

.center_pic {
	width: 900px;
	height: 700px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}


.center_pic div:first-child p:first-child{
	font-size: 30px;
}
.center_pic div:first-child p:nth-child(2) {
	font-size: 50px;
	padding: 15px 0px;
}
.center_pic div:first-child p:last-child{
	font-size: 40px;
	padding: 20px 0px;
}
.center_pic div:last-child {
	margin-top: 120px;
	
}
</style>
