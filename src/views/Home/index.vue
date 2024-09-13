<template>
 <div>
  
  <SearchBox></SearchBox>
 
  <div class="Outer screenOuter">
    <!-- 分类框 -->
    <CaregoryBox></CaregoryBox>
    <!-- 中间轮播图 -->
    <Carousel></Carousel>
    <!-- 我的 -->
    <My></My>
  </div>
  
    
     <!-- layer -->
  <div class="dailyRecommendation">
    <Every></Every>
  </div>
 </div>
</template>

<script setup>
import Carousel from "./Carousel.vue"
import CaregoryBox from "./CaregoryBox.vue"
import SearchBox from '@/views/Home/SearchBox.vue'
import Every from '@/views/Home/dailyRecommendation.vue'
import My from './My.vue'
</script>

<style>
*{
 box-sizing: border-box;
}

.dailyRecommendation{
  position: relative;
  top: 40px;
  margin: 0 auto;
}

.Outer{
  top: 50px;
  position: relative;
}

.screenOuter{
  position: relative;
  margin: 0 auto;
  padding: 0;
  width: 1400px;
  height: 450px;
}

li a{
 display: inline-block;
 vertical-align: middle;
 color: #000;
 font-size: 18px;
 letter-spacing: 1px;
}

a{
 text-decoration: none;
 outline: 0;
}

ul,li,a,span,i{
 margin: 0;
 padding: 0;
 list-style: none;
}

</style>