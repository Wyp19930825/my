<template>
  <div>
    <div>
      <router-link to="/a">a</router-link>
      <router-link to="/b">b</router-link>
      <router-link to="/c">c</router-link>
    </div>
    <div>
        <input type="button" value="首页" @click="goindex">
        <input type="button" value="回退" @click="goback">
        <input type="button" value="前进" @click="goforward">
    </div>
    <div class="wrap">
      <transition :name="names">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            names:'left'
        }
    },
    methods:{
        goindex(){
            this.$router.push('/')
        },
        goback(){
            this.$router.go(-1)
        },
        goforward(){
            this.$router.go(1)
        }
    },
    watch:{
        $route(to,from){
            if(to.meta.index<from.meta.index){
                this.names='right'
            }else{
                this.names='left'
            }
        }
    }
};
</script>

<style>
.wrap{
    position: relative;
    height: 500px;
}
.left-enter {
  transform: translateX(100%);
}
.left-enter-active {
  transition: 1s;
}
.left-enter-to {
  transform: translateX(0);
}
.left-leave {
  transform: translateX(0);
}
.left-leave-active {
  transition: 1s;
}
.left-leave-to {
  transform: translateX(-100%);
}


.right-enter {
  transform: translateX(-100%);
}
.right-enter-active {
  transition: 1s;
}
.right-enter-to {
  transform: translateX(0);
}
.right-leave {
  transform: translateX(0);
}
.right-leave-active {
  transition: 1s;
}
.right-leave-to {
  transform: translateX(100%);
}
</style>
