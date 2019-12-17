<template>
   <div>
        <div id="buy_login">
        <div class="buy_login_dec">
            <span>为了您方便购买,请提前登录</span>
            <span>
                <a href="login.html" style="color: orangered;">立即登录</a>
            </span>
            <span style="color: gray;">×</span>
        </div>
    </div>

    <!--手机主体的信息  价格 颜色 尺寸 部分-->
    <div id="phone_main">
        <div class="phone_main_l">
            <div id="">
                <img :src="goods.bigpic" style="width:100%"/>
            </div>
            <span class="arrow_l">
                <</span>
                    <span class="arrow_r">></span>
                    <div class="phone_btn">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>

                    <div style="text-align: center;">
                        
                    </div>

                    <div style="text-align: center;">
                        
                    </div>

                    <!--左侧的结束标签-->
        </div>
        <div class="phone_main_r">
            <p class="phone_main_name">{{goods.title}}</p>
            <p class="phone_main_dec">{{goods.descp}}</p>
            <p style="color: orange;" class="phone_main_dec">小米自营</p>
            <p style="color: orange;" class="phone_main_dec">{{goods.price}}</p>
            <div class="phone_main_res">预约中</div>
            <div style="color: orange;" class="phone_main_price">{{goods.price}}</div>
            <div class="phone_main_address">
                <p>
                    <i class="iconfont"></i>
                    <span>安徽</span>
                    <span>合肥市</span>
                    <span>瑶海区</span>
                    <span>车站街道</span>
                    <span style="color: orange;">修改</span>
                </p>
                <p style="color: orange;">该地区暂时缺货</p>
            </div>

            <!--订单提交部分-->
            <div class="phone_order">
                <p>
                    <span>Redmi Note 8 6GB+64GB 皓月白</span>
                    <span>1199元</span>
                </p>
                <p>总计：1199元</p>
            </div>

            <div class="sub_btn">
                <div @click="buy">立即购买</div>
                <div @click="addcar">加入购物车</div>
            </div>

            <div>
                <span>
                    <i class="iconfont"></i>小米自营</span>
                <span>
                    <i class="iconfont"></i>小米发货</span>
                <span>
                    <i class="iconfont"></i>7天无理由退货</span>
                <span>
                    <i class="iconfont"></i>运费说明</span>
            </div>
            <!--右边部分结束符-->
        </div>
        <!--main部分结束  下面开始底部-->
    </div>
   </div>
</template>

<script>
import { goodsOne } from "../api";
 import { mapState } from "vuex";
export default {
  data() {
    return {
      goods: {},
      id: this.$route.params.id
    };
  },
  computed: {
   ...mapState(["admininfo"])
  },
  mounted() {
    this.getGoodsOne();
  },
  methods: {
       isLogin() {
      if (this.$local.fetch('vue12').userTel==null) {
        alert("请登录");
        this.$router.push({ path: "/login" });
        return false;
      }
      return true;
    },
    buy() {
      let flag = this.isLogin();
      if (flag) {
        alert("立即购买");
      }
    },
    addcar() {
      let flag = this.isLogin();
      if (flag) {
        this.$store.dispatch('addGoods',this.goods)
      }
    },
   
    async getGoodsOne() {
      const onedata = await goodsOne(this.id);
      this.goods = onedata.data[0];
    }
  }
};
</script>

<style>
#buy_login {
  widows: 100%;
  height: 50px;
  font-size: 15px;
  background-color: gainsboro;
}

#buy_login .buy_login_dec {
  width: 20%;
  height: 100%;
  line-height: 50px;
  margin: 0 auto;
}

#buy_login .buy_login_dec span {
  padding-right: 20px;
}

/*分开的两部分*/

#phone_main {
  width: 1226px;

  margin: 0 auto;
  background-color: white;
  overflow: hidden;
}

.phone_main_l {
  width: 45%;
  height: 100%;
  float: left;
  position: relative;
}

.phone_main_l div:first-child {
  width: 540px;
  height: 500px;
  text-align: center;
  margin: 0 auto;
  margin-top: 90px;

  overflow: hidden;
}

.phone_main_l .phone_btn {
  width: 160px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 560px;
  left: 50%;
  transform: translateX(-50%);
}

.phone_main_l .phone_btn ul li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 10px;

  float: left;
}

.phone_main_l .phone_btn ul li:first-child {
  background-color: skyblue;
}

.phone_main_l .phone_btn ul li:nth-child(2) {
  background-color: lightpink;
}

.phone_main_l .phone_btn ul li:nth-child(3) {
  background-color: royalblue;
}

.phone_main_l .phone_btn ul li:last-child {
  background-color: red;
}

.phone_main_l .arrow_l {
  display: block;
  font-size: 60px;
  color: rgb(176, 176, 189);
  position: absolute;
  top: 300px;
}

.phone_main_l .arrow_l:hover {
  color: white;
  background-color: gainsboro;
}

.phone_main_l .arrow_r:hover {
  color: white;
  background-color: gainsboro;
}

.phone_main_l .arrow_r {
  display: block;
  font-size: 60px;
  color: rgb(176, 176, 189);
  position: absolute;
  top: 300px;
  right: 0px;
}

/*右边部分*/

.phone_main_r {
  width: 50%;

  float: left;
  padding-left: 20px;
}

.phone_main_r .phone_main_name {
  font-size: 20px;
  margin-top: 30px;
}

.phone_main_r .phone_main_dec {
  padding: 8px 0px;
}

.phone_main_res {
  width: 100%;
  height: 43px;
  color: white;
  line-height: 43px;
  padding-left: 20px;
  margin-top: 10px;
  background-color: orange;
}

.phone_main_price {
  width: 100%;
  height: 43px;
  line-height: 43px;
  padding-left: 30px;
}

.phone_main_address {
  width: 100%;
  height: 104px;
  border: 1px solid gainsboro;
  margin: 40px 0px;
}

.phone_main_address p:first-child {
  padding-top: 30px;
  padding-left: 20px;
}

.phone_main_address p:first-child i,
span {
  padding-right: 15px;
}

.phone_main_address p:last-child {
  padding-left: 55px;
}

/*手机颜色部分*/

.sel_color {
  font-size: 20px;
  font-weight: 600;
}

.phone_color {
  float: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.phone_color span {
  display: block;
  width: 300px;
  height: 44px;
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
  line-height: 44px;
  border: 1px solid gainsboro;
}

.phone_color span:hover {
  border-color: orange;
  color: orange;
}

/*手机内存部分*/

.sel_version {
  font-size: 20px;
  font-weight: 600;
  padding-top: 20px;
}

.phone_neicun {
  float: left;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-between;
}

.phone_neicun span {
  display: block;
  width: 300px;
  height: 44px;
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
  line-height: 44px;
  border: 1px solid gainsboro;
}

.phone_neicun span:hover {
  border-color: orange;
  color: orange;
}

.phone_know span:first-child {
  font-size: 18px;
  margin-top: 10px;
  font-weight: 600;
}

.phone_know span:nth-child(2) {
  font-size: 15px;
  padding-left: 250px;
  color: orange;
}

.phone_know span:nth-child(3) {
  font-size: 15px;

  color: orange;
}

/*购买产品的保障*/

.protect {
  width: 100%;
  height: 140px;
  border: 1px solid gainsboro;
}

.mid_protect {
  border-top: none;
  margin-bottom: 20px;
}

.protect div {
  float: left;
}

.phone_know {
  padding: 20px 0px;
}

.protect div:first-child {
  width: 20px;
  height: 20px;
  border: 1px solid gainsboro;
  border-radius: 50%;
  margin-left: 40px;
  margin-top: 55px;
}

.protect div:nth-child(2) {
  margin-top: 35px;
  margin-left: 30px;
}

.protect div:last-child {
  margin-top: 30px;
  margin-left: 20px;
}

.protect div:last-child p:nth-child(2) {
  padding: 8px 0px;
  color: gray;
}

.protect div:last-child p:nth-child(3) span {
  padding-right: 5px;
}

.protect div:last-child p:nth-child(3) span:first-child a {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid gainsboro;
  float: left;
  border-radius: 5px;
}

.protect div:last-child p:nth-child(3) span:last-child {
  padding-left: 130px;

  color: gainsboro;
}

.phone_order {
  width: 100%;
  height: 140px;
  background-color: ghostwhite;

  float: left;
  margin-top: 20px;
  padding-top: 35px;
  padding-left: 25px;
}

.phone_order p:first-child span:last-child {
  padding-left: 200px;
}

.phone_order p:last-child {
  font-size: 25px;
  color: orange;
}

.sub_btn {
  width: 100%;
  height: 55px;
  float: left;
  margin-top: 30px;
}

.sub_btn div {
  float: left;
}

.sub_btn div:first-child {
  font-size: 20px;
  color: white;
  text-align: center;
  line-height: 55px;
  width: 300px;
  height: 100%;
  /*height: 140px;*/
  background-color: orangered;
}

.sub_btn div:last-child {
  font-size: 20px;
  color: white;
  line-height: 55px;
  text-align: center;
  width: 140px;
  height: 100%;
  background-color: grey;
  margin-left: 20px;
}
</style>
