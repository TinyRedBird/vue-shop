<template>
 <div>
   <div class="ShopWrapper">
      <div class="ShopLayout">
        <div>
          <div class="ShopLayoutPicWarpper">
            <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.jR5J_HdTTJydJXvrHPGV9gHaHa?rs=1&pid=ImgDetMain" alt="">
          </div>
          <div class="ShopLayoutTextWarpper">
            <span>XX超市</span>
          </div>
        </div>
      </div>
   </div>
 </div>
</template>

<script>

</script>

<style scoped>
.ShopLayoutPicWarpper img{
  width: 100px;
  height: 100px;
  border-radius: 20px;
}

.ShopLayoutTextWarpper span{

  font-size: 28px;
  text-align: center;
}

.ShopLayoutTextWarpper{
  text-align: center;
  color: #000;
  line-height: 100px;
  float: left;
  width: 120px;
}

.ShopLayoutPicWarpper{

  float: left;
  margin-left: 60px;
  justify-content: center;
  font-weight: 500;
  align-items: center;
}

.ShopWrapper{
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 180px;
  width: 1320px;
  border-radius: 25px;
}
.ShopLayout{
  margin-top: 50px;
  vertical-align: middle;
  line-height: 28px;
  align-items: center;
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 10px 28px 8px rgba(182,213,215,.7);
}
</style>