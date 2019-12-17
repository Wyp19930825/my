<template>
  <div>
    <div id="banner_top">
      <div id="banner_top_l" class="left">
        <img src="../assets/images/logo.png" />
      </div>
      <div id="banner_top_m" class="left">
        <ul>
          <li class="h_show" v-for="item in data1">
            <router-link :to="item.mypath" active-class="active_c">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div id="banner_top_r" class="right">
        <div class="right">小米9</div>
        <div class="right">小米9se</div>
        <div id="banner_top_r_search"></div>
      </div>
      <!--引导部分结束标签-->
    </div>
    <div id="banner_bottom">
      <div class="banner_bottom_cont">
        <div>
          <span>RedmiNote8</span>
          <span>RedmiNote8 Pro</span>
        </div>
        <div>
          <ul>
            <li v-for="item in data2">
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!--redmiNote8 引导部分结束标签-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: [
        { id: 1, name: "小米手机", mypath: "/xiaomi" },
        { id: 2, name: "Redmi 红米", mypath: "/xmshangou" },
        { id: 3, name: "手机", mypath: "/iphone" },
        { id: 4, name: "笔记本", mypath: "/note" },
        { id: 5, name: "家电", mypath: "/machine" },
        { id: 6, name: "路由器", mypath: "/myroute" },
        { id: 7, name: "智能硬件", mypath: "/myai" },
        { id: 8, name: "服务", mypath: "/myservice" },
        { id: 9, name: "社区", mypath: "/myarea" }
      ],
      data2: ["概述", "参数", "F码通道", "用户评价", "立即购买"]
    };
  }
};
</script>

<style>
#banner_top {
  width: 1226px;
  height: 55px;

  margin: 22px auto;
}
/*左*/
#banner_top_l {
  width: 55px;
  height: 55px;
  float: left;
}
/*中*/
#banner_top_m {
  width: 620px;
  height: 55px;
  float: left;
  margin-left: 240px;
}

#banner_top_m ul li {
  height: 55px;
  padding-left: 20px;
  float: left;
  line-height: 55px;
  text-align: center;
}

#banner_top #banner_top_m:hover ~ #banner_hidden {
  height: 230px;
  transition: all 10s;
  display: block;
}
/*右*/
#banner_top_r {
  width: 295px;
  height: 55px;
  float: right;
  border: 1px solid gainsboro;
}

#banner_top_r div:nth-child(n) {
  line-height: 20px;
  text-align: center;
}

#banner_top_r div:first-child {
  height: 20px;
  width: 50px;
  float: left;
  margin-right: 8px;
  margin-top: 17.5px;
  margin-left: 100px;
  background-color: gainsboro;
}

#banner_top_r div:nth-child(2) {
  height: 20px;
  width: 70px;
  float: left;
  margin-right: 8px;
  margin-top: 17.5px;
  background-color: gainsboro;
}

/*banner的隐藏部分  即鼠标移上显示部分 display实现*/
#banner_hidden {
  width: 100%;
  height: 0px;
  background-color: white;
  position: absolute;
  top: 137px;
  left: 0px;
  float: left;
  display: none;
}

#banner_hidden_phone {
  width: 1226px;
  height: 230px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
/*204*100*/
#banner_hidden_phone div {
  width: 204px;
  height: 100px;
  margin: 30px auto;
  font-size: 11px;
  text-align: center;
  border-left: 2px solid groove;
}

#banner_hidden_phone div p:first-of-type {
  padding-top: 20px;
}
#banner_hidden_phone div p:last-of-type {
  color: orange;
  padding: 10px 0px;
}
#banner_hidden_phone div img {
  height: 100%;
}
/*头部搜索框*/
#banner_top_r_search {
  width: 55px;
  height: 100%;
  border-left: 1px solid gainsboro;
  background: url(../assets/images/search.png) no-repeat 17px 17px/23px 23px;
  float: right;
}

#banner_bottom {
  width: 100%;
  height: 80px;
  border-top: 1px solid gray;
}
#banner_bottom .banner_bottom_cont {
  width: 1226px;
  height: 100%;
  text-align: center;
  font-size: 15px;
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

/*#banner_bottom .banner_bottom_cont div:first-child {
	float: left;
}

#banner_bottom .banner_bottom_cont div:last-child {
	float: right;
}*/
#banner_bottom .banner_bottom_cont div:first-child span:first-child {
  padding-right: 10px;
  font-size: 20px;
  font-weight: 700;
  color: black;
}

#banner_bottom .banner_bottom_cont div:first-child span:last-child {
  height: 10px;
  padding: 0px 10px;
  border-left: 1px solid gray;
}

#banner_bottom .banner_bottom_cont div:last-child li {
  float: left;
}

#banner_bottom .banner_bottom_cont div:last-child li:last-child {
  width: 150px;
  height: 35px;
  line-height: 35px;
  background-color: rgb(255, 103, 0);
}

#banner_bottom .banner_bottom_cont div:last-child li:last-child a {
  color: white;
  border-right: none;
}
#banner_bottom .banner_bottom_cont div:last-child li:nth-child(4) a {
  border-right: none;
}

#banner_bottom .banner_bottom_cont div:last-child li a {
  height: 20px;
  line-height: 35px;
  padding: 0px 10px;
  border-right: 1px solid gainsboro;
}
.active_c{
  background: orange
}
</style>
