<template>
  <!-- 一级路由出口组件 -->
   <div id="app">
    <div class="background"></div>
    <div></div>
   </div>
  <router-view></router-view>
</template>

<script setup>

</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  display: flex;
  position: relative;
  overflow-x: hidden;
  height: 100vh;
}

.background{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("E:\web code\vue\Project Vue\vue-shop\vue-shop\src\assets\piture.png");
  background-size: cover;
  background-position: center;
  z-index: -1;
}
</style>
