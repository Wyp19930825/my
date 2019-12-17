<template>
  <div class="wrap">
    <transition name="left" >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>

/* .v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: 1s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: 1s;
}
.v-leave-to {
  opacity: 0;
} */

.left-enter {
  transform: translateX(100%)
}
.left-enter-active {
  transition: 1s;
}
.left-enter-to {
  transform: translateX(0)
}
.left-leave {
  transform: translateX(0)
}
.left-leave-active {
  transition: 1s;
}
.left-leave-to {
 transform: translateX(-100%)
}
</style>
