
<template>
  <div class="Shop-Container">
    <ShopLayout></ShopLayout>
    <ShopDetailBox></ShopDetailBox>
  </div>
</template>

<script setup>
import ShopLayout from '../Shop/ShopLayout.vue'
import ShopDetailBox from '../Shop/ShopDetailBox.vue'
</script>

<style>
.Shop-Container{
  margin: 0 auto;
}
</style>