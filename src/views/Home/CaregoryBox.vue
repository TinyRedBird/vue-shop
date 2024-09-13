<template>
 <div>
  <div class="sortBox">
    <div>
     <a href="/" title="分类" class="index-all-hook"><i class="fa  fa-list"></i><span>分类</span></a>
     <div>
      <div class="indexSortListBox">
       <div class="coverBox"></div>
       <ul class="indexList">
        <li><a href="/">汽水</a></li>
        <li><a href="/">毛巾</a></li>
        <li><a href="/">水果</a></li>
        <li><a href="/">冰淇淋</a></li>
        <li><a href="/">电脑</a></li>
        <li><a href="/">零食</a></li>
       </ul>
      </div>
     </div>
    </div>
   </div>
 </div>
</template>

<script>
 export default {
  name:'CaregoryBox',
 }
</script>

<style scoped>
.sortBox{
  display: flex;
  position: absolute;
  width: 300px;
  height: 450px;
}

.indexList{
 position: absolute;
 left: 0;
 top: 1px;
 width: 300px;
 height: 400px;
 z-index: 1000;
}

.coverBox{
 position: absolute;
 width: 300px;
 height: 400px;
 background: #FFF;
 top: 0;
 left: 0;
}

.index-all-hook{
 position: absolute;
 display: block;
 width: 300px;
 height: 50px;
 top: 0;
 color: #FFF;
 font-size: 24px;
 background-color: #FF8000;
 font-weight: bold;
 border-radius: 20px 20px 0 0;
 text-decoration: none;
}

.indexList li{
 position: relative;
 width: 100px;
 overflow: hidden;
 padding: 0 0;
 height: 30px;
 line-height: 25px;
}

.indexSortListBox{
 position: absolute;
 top: 50px;
 width: 300px;
 height: 400px;
}
</style>