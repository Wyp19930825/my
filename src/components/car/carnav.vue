<template>
    <div class="nav">
        <div class="nav-in clearfix">
            <ul class="nav-left fl">
                <li class="bg">
                    <a href="#">
                        抱着西瓜吃太阳
                        <i class="iconfont icon-vip"></i>
                    </a>
                    <i class="iconfont icon-icon"></i>
                </li>
                <li class="bg">
                    <i class="iconfont icon-xiaoxi"></i>
                    消息
                    <span>1</span>
                    <i class="iconfont icon-icon"></i>

                </li>
                <li>
                    <a href="#">手机逛淘宝</a>
                </li>

            </ul>
            <ul class="nav-right fr">
                <li>
                    <router-link to="/"> 淘宝网首页</router-link>
                </li>
                <li class="bg">
                    <a href="#">我的淘宝</a>
                    <i class="iconfont icon-icon"></i>
                </li>
                <li class="bg">
                    <a href="#">
                        <i class="iconfont icon-gouwuche"></i>
                        购物车
                        <span>1</span>
                    </a>
                    <i class="iconfont icon-icon"></i>
                </li>
                <li class="bg">
                    <a href="#">
                        <i class="iconfont icon-shoucang1"></i>
                        收藏夹
                    </a>
                    <i class="iconfont icon-icon"></i>
                </li>
                <li>
                    <a href="#">商品分类</a>
                </li>
                <span>|</span>
                <li class="bg">
                    <a href="#">千牛卖家中心</a>
                    <i class="iconfont icon-icon"></i>
                </li>
                <li class="bg">
                    <a href="#">联系客服</a>
                    <i class="iconfont icon-icon"></i>
                </li>
                <li class="bg">
                    <a href="#">
                        <i class="iconfont icon-daohang"></i>
                        导航网站
                    </a>
                    <i class="iconfont icon-icon"></i>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
    height: 36px;
    background-color: #f5f5f5;
}
.nav .nav-in{
    width: 1190px;
    height: 36px;
    margin: 0 auto;
    /*background-color: skyblue;*/
    font-size: 12px;
    line-height: 36px;
}
.nav .nav-in   li{
    float: left;
    height: 36px;
    padding-left: 5px;
    padding-right: 8px;
    
}
.nav .nav-in ul li a i{
    font-size: 10px;
}
.nav .nav-in .bg:hover{
    background-color: #fff;
}
.nav .nav-in li a{
    font-size: 12px;
    color: #333333;
    /*margin-right: 8px;*/
}
.nav .nav-in li a:hover{
    color: #ff0036;
}
.nav .nav-in .nav-left  li a i{
    color: #f7ba63;

}
.nav .nav-in .nav-left  .bg .icon-xiaoxi,
.nav .nav-in .nav-left  .bg span{
    color: #ff0036;
}
.nav .nav-in .nav-right > span{
    float: left;
    margin-left:10px;
    margin-right: 7px;
    color: #e1e1e1;

}
.nav .nav-in .nav-right .bg .icon-gouwuche,
.nav .nav-in .nav-right .bg .icon-daohang,
.nav .nav-in .nav-right .bg span{
    color: #ff0036;
}


</style>
