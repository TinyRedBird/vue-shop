<template>
 <div>
  <div class="ShopDetailWrapper">

   <div class="Left-BoxWrapper">
    <div class="LeftSecletBox">
     
      <span>全部商品</span>
     
    </div>
   </div>

   <div class="right-BoxWrapper">
    <Card></Card>
   </div>

  </div>
 </div>
</template>

<script setup>
import Card from '../Shop/Card.vue'
</script>

<style scoped>
.right-BoxWrapper *{
 margin: 20px;
}

.right-BoxWrapper{
 height: 700px;
 width: 1090px;
 background-color: #fff;
 border-radius: 15px;
 display: flex;
 margin-left: 30px;
 box-shadow: 0 10px 28px 8px rgba(182,213,215,0.62);
}

.LeftSecletBox span{
 font-size: 28px;
 text-align: center;
}

.LeftSecletBox{
 line-height: 50px;
 vertical-align: middle;
 align-items: center;
 flex-direction: row;
 margin: 20px auto;
 /* margin-top: 20px; */
 height: 50px;
 width: 180px;
 border-radius: 10px;
 background-color: #fff;
 cursor: none;
}

.Left-BoxWrapper{
 border-radius: 25px;
 float: left;
 height: 700px;
 width: 200px;
 background-color: #377f7f;
}

.ShopDetailWrapper{
 margin:100px auto;
 display: flex;
 height: 700px;
 width: 1320px;
}
</style>