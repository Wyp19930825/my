<template>
    <div>
		<div id="goods_dec">
			<div class="goods_list">
				<ul>
					<router-link v-for="item,index in goodslist" tag="li" :to="'/goodsdetail/'+item.id"  :key="index"><img :src="item.pic"/></router-link>
				</ul>
			</div>
		</div>
		<div>
			<img src="../assets/images/tonglan.png" width="100%" height="475"/>
		</div>
	</div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return{
            data1:[
                {id:1,img:require("../assets/images/specs-1.png")},
                {id:2,img:require("../assets/images/specs-2.png")},
                {id:3,img:require("../assets/images/specs-3.png")},
                {id:4,img:require("../assets/images/specs-4.png")},
                {id:5,img:require("../assets/images/specs-5.png")},
                {id:6,img:require("../assets/images/specs-6.png")},
                {id:7,img:require("../assets/images/specs-7.png")},
				{id:8,img:require("../assets/images/specs-8.png")}
				],
				
        }
	},
	mounted() {
		this.getGoodsList()
	},
	computed: {
		...mapState(['goodslist'])
	},
	methods: {
		//getGoodsList
		...mapActions(['getGoodsList'])
	},
}
</script>

<style>
#goods_dec .goods_list {
	width: 1042px;
	height: 414px;

	margin: 90px auto;
	
}
#goods_dec .goods_list ul li {
	float: left;
	width: 254px;
	height: 202px;
	margin-right: 8px;
    margin-top: 10px;
}

#goods_dec .goods_list ul li:hover {
	transition: all 1s; 
	transform: scale(1.1)
}

#goods_dec .goods_list ul li:nth-child(4n+4) {
	margin-right: 0px;
	float: right;
}

#goods_dec .goods_list ul li img {
	width: 100%;
	height: 100%;
}
</style>
