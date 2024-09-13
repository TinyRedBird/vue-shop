<template>
  <!-- 一级路由出口组件 -->
  <router-view></router-view>
</template>

<script setup>

</script>

<style>
#app {
  display: flex;
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
    /* 加载背景图  背景图垂直、水平均居中  背景图不平铺 */
  background-image: url("E:\web code\vue\Project Vue\vue-shop\vue-shop\src\assets\piture.png");
    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  z-index: -1;
}
</style>
