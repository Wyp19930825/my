<template>
    <div class="content">
        <div class="content-in">
            <div class="content-top clearfix">
                <ul class="fl">
                    <li>
                        <a href="#">
                            <span class="word">全部商品</span>
                            <span class="num">1</span>
                            <span class="line"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="word">降价商品</span>
                            <span class="num">0</span>
                            <span class="line"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="word">库存紧张</span>
                            <span class="num">0</span>

                        </a>
                    </li>
                </ul>
                <div class="fr">
                    <span>已选商品（不含运费）</span>
                    <span class="num">0.00</span>
                    <a href="#">结 算</a>
                </div>
                <div class="wrap-line"></div>
            </div>
            <div class="content-center">
                <div class="cart-title clearfix">
                    <div class="cart-checkbox fl">
                        <input type="checkbox"> &nbsp;全选
                    </div>
                    <div class="cart-info fl">商品信息</div>
                    <div class="cart-blank fl"></div>
                    <div class="cart-price fl">单价</div>
                    <div class="cart-amount fl">数量</div>
                    <div class="cart-sum fl">金额</div>
                    <div class="cart-option fl">操作</div>
                </div>
                <div class="order">
                    <div class="order-top">
                        <input type="checkbox"> &nbsp;
                        <img src="../../assets/images/chaoshi.png">&nbsp; 店铺：
                        <a href="#">天猫超市</a>
                        <span class="iconfont icon-aliwangwang1"></span>
                    </div>
                    <div class="order-content">
                        <div class="order-content-top clearfix">
                            <div class="sale-title fl">
                                满减活动
                            </div>
                            <div class="sale-content fl">
                                满299减15 满399减20
                            </div>
                        </div>
                        <div class="order-content-bottom">
                            <ul v-for="item,index in cartdata">
                                <li class="order-checkbox">
                                    <input type="checkbox" @click="cks(index)">
                                </li>
                                <li class="order-goods">
                                    <div class="images">
                                        <a href="#"><img :src="item.pic" class="imgtp"></a>
                                    </div>
                                    <div class="info">
                                        <p>
                                            <a href="#">{{item.title}}</a>
                                        </p>
                                        <div class="quanyi">
                                            <img src="../../assets/images/xinyongka.png">
                                            <img src="../../assets/images/cun.png">

                                            <a href="#">
                                                <img src="../../assets/images/qitian.png">
                                            </a>
                                            <a href="#">
                                                <img src="../../assets/images/baozhang.png">
                                            </a>
                                        </div>
                                    </div>

                                </li>
                                <li class="blank"></li>
                                <li class="order-price">
                                    <span>&yen;{{item.price}}</span>
                                </li>
                                <li class="order-amount">
                                    <div>
                                        <span @click="updateNum(false,item,index)">-</span>
                                        <input type="text" :value="item.count">
                                        <span @click="updateNum(true,item,index)">+</span>
                                    </div>
                                </li>
                                <li class="order-sum">
                                    <p>&yen;{{item.price*item.count}}</p>
                                </li>
                                <li class="order-fav">
                                    <a href="#">移入收藏夹</a>
                                    <a href="#">删除</a>
                                    <a href="#">相似宝贝</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-footer clearfix">
                <div class="footer-checkbox fl">
                    <input type="checkbox"> 全选
                </div>
                <div class="footer-fav fl">
                    <a href="#">删除</a>
                    <a href="#">移入收藏夹</a>
                    <a href="#">分享</a>

                </div>
                <div class="footer-right fr clearfix">
                    <div class="footer-amount fl">
                        <span class="text">已选商品</span>
                        <strong>{{totalCount}}</strong>
                        <span class="text">件</span>
                    </div>
                    <div class="footer-sum fl">
                        <span>合计（不含运费）：</span>
                        <i>&yen;</i>
                        <b>{{totalPrice}}</b>
                    </div>
                    <div class="pay fl">
                        <a href="#">
                            <span>结&nbsp;&nbsp;算</span>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {
    computed: {
        ...mapState(['cartdata']),
        ...mapGetters(['totalCount','totalPrice']),
    },
    methods: {
        updateNum(isAdd,item,index) {
            this.$store.dispatch('updateNumGoods',{ isAdd, item ,index})
        },
        cks(index){
           console.log(this.cartdata[index].count)
        }
    },
}
</script>

<style>
.content{
    margin-top: 36px;
}
.imgtp{
    width: 100%;
}
.content .content-in{
    width: 1190px;

    margin: 0 auto;
    font-size: 12px;
    /*background-color: skyblue;*/
    color: #3c3c3c;
}
.content .content-in input[type=checkbox]{
    width: 15px;
    height: 15px;
    vertical-align: middle;
    box-sizing: border-box;
}
.content .content-in .content-top{
    width: 1190px;
    height: 35px;
    /*background-color: gold;*/
    border-bottom: 2px solid #e6e6e6;
    position: relative;
}
.content .content-in .content-top ul{
    height: 34px;
}
.content .content-in .content-top ul li{
    float: left;
    height: 31px;
    cursor: pointer;
    padding: 0 0 15px 0;
    text-align: center;
}
.content .content-in .content-top ul li a{
    display: inline-block;
    padding-left: 15px;
}
.content .content-in .content-top ul li a .word{

    font-size: 18px;
    font-weight: 700;
    font-family: tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
.content .content-in .content-top ul li a{
    color: #333333;
}
.content .content-in .content-top ul li:first-child a .word{
    color: #ff4400;
}
.content .content-in .content-top ul li a .num{
    color: #ff4400;
    font-size: 14px;
    margin: 0 30px 0 5px;
}
.content .content-in .content-top ul li a .line {
    width: 1px;
    height: 12px;
    display: inline-block;
    background: #e8e8e8;
}
.content .content-in .content-top div{
    font-size: 12px;
    height: 25px;
}
.content .content-in .content-top div span{
    display: inline-block;
    margin-top: 6px;
}
.content .content-in .content-top div .num{
    color: #ff4400;
    font-weight: 700;
}
.content .content-in .content-top div a{
    display: inline-block;
    box-sizing: border-box;
    width: 55px;
    height: 25px;
    text-align: center;
    color: white;
    background-color: #aaaaaa;
    vertical-align: middle;
    padding-top: 6px;
    border-radius: 3px;
}
.content .content-in .content-top .wrap-line{
    width: 142px;
    height: 2px;
    background-color: #ff4400;
    position: absolute;
    left: 0px;
    bottom: -2px;
}
.content .content-in .content-center{
    width: 1190px;
}
.content .content-in .content-center .cart-title{
    width: 1190px;
    height: 50px;
    line-height: 50px;
    /*background-color: #fff;*/

}
.content .content-in .content-center .cart-title>div{
    height: 50px;
}
.content .content-in .content-center .cart-title .cart-checkbox{
    width: 80px;
    color: #3c3c3c;
    box-sizing: border-box;
    padding-left: 15px;
}

.content .content-in .content-center .cart-title .cart-info{
    width: 312px;
    padding-left: 50px;
    box-sizing: border-box;

}
.content .content-in .content-center .cart-title .cart-blank{
    width: 262px;
}
.content .content-in .content-center .cart-title .cart-price{
    width: 130px;
}
.content .content-in .content-center .cart-title .cart-amount{
    width: 110px;
}
.content .content-in .content-center .cart-title .cart-sum{
    width: 170px;
}
.content .content-in .content-center .cart-title .cart-option{
    width: 119px;
}
.content .content-in .content-center .order{
    width: 1190px;
    overflow: hidden;
    /*background-color: red;*/
}
.content .content-in .content-center .order .order-top {
    width: 1190px;
    height: 38px;
    padding-left: 15px;
    line-height: 38px;
    box-sizing: border-box;
}
.content .content-in .content-center .order .order-top img{
    vertical-align: middle;
}
.content .content-in .content-center .order .order-top a{
    color: #3c3c3c;
}
.content .content-in .content-center .order .order-top span{
    margin-left: 15px;
    color: #1c9eff;
    cursor: pointer;
}
.content .content-in .content-center .order .order-content{
    width: 1190px;
    overflow: hidden;
    border: 1px solid #cccccc;
    box-sizing: border-box;
}
.content .content-in .content-center .order .order-content .order-content-top{
    width: 1188px;
    height: 38px;
    border-bottom: 1px solid #e8e8e8;
    box-sizing: border-box;
    padding-left: 50px;
    text-align: center;
    padding-top: 8px;
}
.content .content-in .content-center .order .order-content .order-content-top .sale-title{
    width: 64px;
    height: 22px;
    line-height: 22px;
    background-color: #e7e7e7;
    margin-right: 15px;
}
.content .content-in .content-center .order .order-content .order-content-top .sale-content{
    width: 60px;
    height: 22px;
    overflow: hidden;
    line-height: 22px;
}
.content .content-in .content-center .order .order-content .order-content-bottom{
    width: 1188px;
    overflow: hidden;
    padding-top: 20px;
    box-sizing: border-box;
    background-color: #fcfcfc;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul{
    overflow: hidden;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul li{
    height: 110px;
    float: left;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-checkbox{
    width: 50px;

}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-checkbox input[type=checkbox]{
    margin-left: 25px;

}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-goods{
    width: 342px;
    /*background-color: red;*/
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-goods .images{
    float: left;
    width: 82px;
    height: 82px;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-goods
.info{
    float: left;
    width: 226px;
    height: 110px;
    margin-left: 10px;

}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-goods
.info  p{
    width: 226px;
    height: 40px;
    line-height: 20px;

}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-goods
.info  p a{
    color: #3c3c3c;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-goods
.info  p a:hover{
    color: #ff4400;
    text-decoration: underline;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-goods
 .info .quanyi{
    width: 226px;
    height: 70px;
    /*background-color: gold;*/
    padding-top: 26px;
    box-sizing: border-box;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-goods
.info .quanyi img{
    vertical-align:middle;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .blank{
    width: 262px;

}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-price{
    width: 120px;
    font-weight: 700;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-amount{
    width: 120px;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-amount>div{
    width: 77px;
    height: 25px;

    text-align: center;
    line-height:25px;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-amount>div span{
    padding: 0;
    float: left;
    text-align: center;
    display: block;
    width: 18px;
    height: 25px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    line-height: 25px;
    background-color: #f0f0f0;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-amount>div a:nth-of-type(1){
    border-right: none;
    cursor: default;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-amount>div a:nth-of-type(2){
    border-left: none;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-amount>div input[type=text]{
    width: 41px;
    height: 25px;
    float: left;
    box-sizing: border-box;
    font-size: 12px;
    text-align: center;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-sum{
    width: 170px;
    color: #8b8b8b;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-sum p{
    font-weight: 700;
    color: #ff4400;
    margin-bottom: 5px;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-fav{
    width: 119px;
    height: 110px;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-fav a{
    display: block;
    color: #3c3c3c;
    margin-bottom: 6px;
}
.content .content-in .content-center .order .order-content .order-content-bottom ul .order-fav a:hover{
    color: #ff4400;
    text-decoration: underline;
}
.content .content-in .content-footer{
    width: 1190px;
    height: 50px;
    background-color: #e5e5e5;
    margin-top: 15px;
    line-height: 50px;
}
.content .content-in .content-footer .footer-checkbox{
    width: 55px;
    height: 50px;
    cursor: pointer;
}
.content .content-in .content-footer .footer-fav a {
    color: #3c3c3c;
    margin-left: 25px;
}
.content .content-in .content-footer .footer-fav a:hover{
    color: #ff4400;
    text-decoration: underline;
}
.content .content-in .content-footer .footer-right{
    width: 550px;
    height: 50px;
    box-sizing: border-box;
    padding-left: 20px;
}
.content .content-in .content-footer .footer-right .footer-amount{
    display: inline-block;
    width: 150px;
    height: 50px;
    cursor: pointer;
}
.content .content-in .content-footer .footer-right .footer-amount strong{
    font-size: 18px;
    font-weight: 700;
    padding: 0 5px;
    color: #ff4400;
}
.content .content-in .content-footer .footer-right .footer-sum{
    width: 210px;
    height: 50px;
    margin-left: 29px;
}
.content .content-in .content-footer .footer-right .footer-sum i{
    color: #ff4400;
}
.content .content-in .content-footer .footer-right .footer-sum b{
    color: #ff4400;
    font-size: 20px;
    font-weight: 700;
}
.content .content-in .content-footer .footer-right .pay{
    width: 120px;
    height: 50px;
    background-color: #ff4400;
    text-align: center;
    line-height: 50px;
}
.content .content-in .content-footer .footer-right .pay a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 20px;
}
</style>
