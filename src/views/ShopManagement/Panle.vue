<template>
 <div>
  <div class="PanleWrapper">
   <div class="PersonalWrapper">
    <div class="picWarpper">
     <img src="" alt="" class="pic">
    </div>
    <div class="PersonalTextWrapper">
     <span>一只快乐的小青蛙</span>
    </div>
   </div>

   <div class="SelctPanleWrapper">
    <div>
     <div>
     <ul>
      <li>
       <span>商店管理</span>
       <i></i>
      </li>
      <li>
       <span>用户管理</span>
      </li>
     </ul>
     </div>
    </div>
   </div>

  </div>

 </div>
</template>

<script>

</script>

<style scoped>
.SelctPanleWrapper span{
  padding: 10px;
  text-align: center;
}

.SelctPanleWrapper{
 display: flex;
 width: 300px;
 background-color: #444a5a;
}

.PersonalTextWrapper{
 font-weight: 600;
 color: #fff;
 font-size: 16px;
 line-height: 16px;
 padding: 0;
 margin-top: 40px;
}

.pic{
 width: 100%;
}

.PersonalWrapper{
 background-color: #555d71;
}

.picWarpper{
width: 80px;
height: 80px;
border-radius: 40px;
}

.PanleWrapper{
 width: 300px;
 height: 100vh;
}

</style>