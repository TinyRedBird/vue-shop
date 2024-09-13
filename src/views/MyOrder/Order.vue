<template>
 <div class="OrderWarpper">
  <div class="OrderCardTopWarpper">
   <div class="OrderCardTop">
    <div>
     <input type="checkbox" name="" id="">
    </div>
    <div class="OrderCardTopTextWarpper">
     <span class="OrderCardTopText">店铺：沃尔玛超市</span>
    </div>
   </div>
  </div>
  <div class="OrderLine"></div>
  <div>
   <div>
    <div>
     <img src="" alt="">
    </div>
   </div>
  </div>
 </div>
</template>

<script>

</script>

<style scoped>
.OrderLine{
  position: absolute;
  width: 90%;
  height: 1px;
  top: 60px;
  margin: 0 auto;
  border-top: solid #BBB 1px;
}

.OrderCardTop{
 display: flex;
 flex-direction: row;
}

.OrderCardTopText{
 line-height: 25px;
 font-size: 22px;
}

.OrderCardTopTextWarpper{
 width: 200px;

}

.OrderCardTopWarpper{
 
}

.OrderWarpper{
 background-color: #fff;
 border: 1px solid #bbb;
 border-radius: 20px;
 width: 900px;
 display: flex;
 flex-direction: column;
}
</style>