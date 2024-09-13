<template>
 <div class="SearchShopBoxWarrper">
   <div class="SearchShopBox">
    <div class="ShopCardWarrper">

      <div class="HeaderTextWrapper">
       <div><i class="fa fa-home SearchShopIcon"></i></div>
       <div class="SearchShopText"><span>完胜超市</span></div>
      </div>

      <div class="ShopCardPic">
       <div>
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
       </div>
      </div>
    </div>
   </div>
 </div>
</template>

<script>

</script>

<style scoped>
.ShopCardPic{
 float: left;
 margin: 10px;
 margin-left: 40px;
 position: relative;
}

.SearchShopIcon{
 font-size: 28px;
}

.SearchShopText{
 display: flex;
 font-size: 24px;
 font-weight: 500;
}

.HeaderTextWrapper{
 float: left;
 position: relative;
 top: 30px;
 left: 40px;
 cursor: pointer;
 display: flex;
 flex-direction: row;
 letter-spacing: 0;
 justify-content: center;
}

.ShopCardPic img{

 width: 200px;
 height: 230px;
}

.SearchShopBoxWarrper{ 
 background-color: #fff;
 width: 1320px;
 display: flex;
 position: relative;
 top: 50px;
 margin: 0 auto;
 border-radius: 20px;
}

.SearchShopBox{
 width: 1100px;
 border-radius: 20px;
 box-shadow: 1px 8px 28px 10px rgba(0, 0, 0, 0.6);
 margin: 30px auto;
}

.ShopCardWarrper{
 justify-content: space-between;
 display: flex;
 flex-direction: row;
 width: 100%;
}
</style>