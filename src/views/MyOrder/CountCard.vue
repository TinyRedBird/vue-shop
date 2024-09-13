<template>
 <div>
   <div class="Warp">

    <div class="TopWarp">
      <div class="OrderCheckBox">
        <input type="checkbox">
      </div>
      <div>
        <button class="OrderBtn">删除</button>
      </div>
    </div>

    <div class="Line"></div>
    <div class="CountWarp">

      <OrderCard></OrderCard>
      
    </div>
   </div>
 </div>
</template>

<script setup>
import OrderCard from '../MyOrder/Order.vue'
</script>

<style scoped>
.Line{
  position: absolute;
  width: 100%;
  height: 1px;
  top: 60px;
  border-top: solid #BBB 1px;
}

.OrderBtn{
font-variant: normal;
}

.OrderCheckBox{
  width: 30px;
}

.TopWarp{
  display: flex;
  flex-direction: row;

  /* justify-content: space-between; */
  font-size: 26px;
}

.Warp{
  margin-left: 150px;
 display: flex;
 width: 1020px;
 height: 600px;
 background-color: #F3F6F8;
 border: 1px solid #BBBBBB;
 border-radius: 20px;
 position: relative;
}
</style>