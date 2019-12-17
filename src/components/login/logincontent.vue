<template>
  <div class="content">
    <div class="content-in ">
      <div class="sign">
        <div class="sign-in">
          <h3>密码登录</h3>
          <form @submit.prevent="handle">
            <label for="account">
              <span class="iconfont icon-icon_account"></span>
            </label>
            <input type="text" placeholder="会员名/邮箱/手机号" id="account" ref="admin"/>
            <label for="mima">
              <span class="pwd iconfont icon-mima"></span>
            </label>
            <input type="password" id="mima" ref="pass"/>
            <input type="submit" value="登录"/>
          </form>
          <p>
            <a href="#">忘记密码</a>
            <a href="#">忘记会员名</a>
            <a href="#">免费注册</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { adminLogin } from "../../api";
export default {
  data() {
    return {
      user: "",
      pass: ""
    };
  },
  methods: {
    async handle() {
      this.user = this.$refs.admin.value;
      this.pass = this.$refs.pass.value;
      const res = await adminLogin(this.user, this.pass);
      if (res.fn === 0) {
        this.$local.save("vue12", { userTel: this.user });
        this.$store.dispatch('recordadmin',res.data[0])
        this.$router.go(-1)
        // window.location.reload();
      } else {
        alert(res.message);
      }
    }
  }
};
</script>

<style>
.content {
  width: 100%;
  height: 600px;
  background-color: #60b9f3;
}
.content .content-in {
  width: 1190px;
  height: 100%;
  margin: 0 auto;
  background: url("../../assets/images/bg.jpg");
  position: relative;
}
.content .content-in .sign {
  width: 350px;
  height: 405px;
  background-color: #fff;
  position: absolute;
  right: 70px;
  top: 92px;
}
.content .content-in .sign .sign-in {
  width: 300px;
  margin: 42px auto;
}
.content .content-in .sign .sign-in h3 {
  /*margin-bottom: 26px;*/
  font-weight: bold;
}

.content .content-in .sign .sign-in form {
  position: relative;
}

.content .content-in .sign .sign-in span {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #dddddd;
  position: absolute;
  text-align: center;
  line-height: 40px;
  left: 1px;
  top: 26px;
  font-size: 30px;
}
.content .content-in .sign .sign-in form label .pwd {
  position: absolute;
  left: 1px;
  top: 93px;
}
.content .content-in .sign .sign-in input {
  width: 300px;
  height: 42px;
  /*outline: none;*/
  border: 1px solid #cbcbcb;
  box-sizing: border-box;
}
.content .content-in .sign .sign-in input[type="text"] {
  margin: 25px 0;
  padding-left: 50px;
}
.content .content-in .sign .sign-in input[type="password"] {
  padding-left: 50px;
}
.content .content-in .sign .sign-in input[type="submit"] {
  color: #fff;
  background-color: #ff0036;
  margin-top: 20px;
  border: 1px solid #ff0036;
}
.content .content-in .sign .sign-in p {
  margin-top: 30px;
  margin-left: 105px;
}
.content .content-in .sign .sign-in p a {
  font-size: 11px;
  color: #7d7d7d;
  margin-left: 10px;
}
.content .content-in .sign .sign-in p a:first-child {
  margin-left: 0px;
}
.content .content-in .sign .sign-in p a:hover {
  color: #ff0036;
}
</style>
