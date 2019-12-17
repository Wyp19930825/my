<template>
  	<div id="price_part">
			<div class="price_dec">
				<p>
					<h3>价格说明</h3>
				</p>
				<div class="price_dec_cont">
					<img src="../assets/images/dec_pic.png" />
				</div>
			</div>
			<!--价格描述结束标签-->
		</div>
</template>

<script>
export default {

}
</script>

<style>
#price_part {
	width: 100%;
	height: 310px;

	background-color: rgb(245,245,245);
}

#price_part .price_dec h3 {
	padding: 1em 0px;

}
.price_dec {
	width: 1226px;
	height: 310px;
	margin: 0 auto;

}

.price_dec .price_dec_cont {
	width: 100%;
	height: 190px;
	background-color: white;
	margin-bottom: 45px;
}

</style>
