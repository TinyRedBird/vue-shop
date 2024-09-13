<template>
 <div>
  <div class="GoodWarp">
   <Layout></Layout>
   <DetailCard></DetailCard>
 </div>
  
 </div>
</template>

<script setup>
import Layout from '../Good/Layout.vue'
import DetailCard from '../Good/DetailCard.vue';
</script>

<style scoped>
.GoodWarp{
 display: flex;
 flex-direction: column;
 box-sizing: border-box;
}
</style>