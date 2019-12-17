<template>
    <div class="header">
        <div class="header-in">
            <div class="logo">
                <router-link to="/"></router-link>
            </div>
            <div class="search">
                <form action="#">
                    <a href="#">宝贝
                        <i class="iconfont icon-icon"></i>
                    </a>
                    <input type="text">
                    <input type="submit" value="搜索">
                </form>

            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
    height: 45px;
    margin-top: 18px;
}
.header .header-in{
    width: 1190px;
    height: 45px;
    margin: 0 auto;
    line-height: 45px;
    /*background-color: skyblue;*/
    display: flex;
    justify-content: space-between;
}
.header .header-in .logo{
    width: 181px;
    height: 45px;
}
.header .header-in .logo a{
    display: inline-block;
    width: 181px;
    height: 45px;
    background-image: url("../../assets/images/jinglingtu.png");
    background-position: -110px 0;
}
.header .header-in .search{
    margin-top: 5px;
    width: 515px;
    height: 35px;
    background-color: green;
}
.header .header-in .search form{
    position: relative;
}
.header .header-in .search input{
    height: 35px;
    float: left;
    outline: none;
    border: 3px solid #ff4400;
    box-sizing: border-box;
}
.header .header-in .search input[type=text]{
    width: 422px;
    padding-left: 78px;
    color: #000;
}
.header .header-in .search input[type=submit]{
    width: 93px;
    background-color: #ff4400;
    color: white;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 8px;
}
.header .header-in .search a{
    display: inline-block;
    width: 74px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    background-color: #f5f5f5;
    position: absolute;
    left: 3px;
    top: 3px;
    border-right: 1px solid #e5e5e5;
    font-size: 12px;
    color: #333333;
}
</style>
