<template>
 <div>
  <div class="SearchOuterBox">
    <div class="SearchBox">

     <div class="SortBarsortBarWrap">
      <div class="SortBarsortBarWrapTop">
       <div class="SortBarsortBarWrapInner">
        <i class="fa fa-angle-down iconfontsearch searchxiaojiantou8px SortBarpriceTabIcon"></i>
        <div class="nexttabs nexttabswrapped nexttabstop nextmedium">
         <div class="nexttabsbar SortBarcustomTab">
          <div class="nexttabsnavcontainer">
            <ul aria-multiselectable="false" class="nexttabsnav">
             <li class="nexttabstab active SortBarcustomTabItem customTab">
              <div class="nexttabstabinner">综合</div>
             </li>
             <li aria-hidden="false" aria-selected="false" class="Pricetab nexttabstab SortBarcustomTabItem">
              <div class="nexttabstabinner">价格</div>
             </li>
            </ul>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>

     <!-- <div class="SortBar">
      <div>
       <i class="fa "></i>
       <div class=""></div>
      </div>
      <div class="SortBarOtherSelector">

      </div>
     </div> -->
     <!-- 内容框 -->
     <SearchCard></SearchCard>

    </div>

   </div>
 </div>
</template>

<script setup>
import SearchCard from '../SearchGood/SearchCard.vue'
</script>

<style scoped>
.Pricetab{
 font-size: 16px;
    background: rgb(255, 255, 255);
    border-color: rgb(255, 255, 255);
    color: rgb(17, 25, 45);
}

.nexttabs.nextmedium .nexttabstabinner {
    font-size: 12px;
    padding: 12px 16px;
}

.nexttabs.nextmedium .nexttabstabinner {
    font-family: PingFang SC;
    font-size: 16px !important;
    padding: 0 13px !important;
}
.nexttabstabinner {
    position: relative;
    cursor: pointer;
    text-decoration: none;
}

.customTab{
 font-size: 16px;
 font-weight: 600;
 border-color: transparent;
 color: rgb(255, 98, 0);
}

.nexttabswrapped.nexttabstop > .nexttabsbar .nexttabstab.active {
    border-width: 1px 1px 1px 1px;
}
.nexttabswrapped.nexttabstop > .nexttabsbar .nexttabstab.active {
    border-color: #dddddd #dddddd #FFFFFF #dddddd;
}
.nexttabswrapped.nexttabstop > .nexttabsbar .nexttabstab {
    margin-right: 4px;
    border: solid 1px #dddddd;
    border-radius: 6px 6px 0 0;
    border-width: 1px 1px 1px 1px;
}
.nexttabswrapped > .nexttabsbar .nexttabstab.active {
    z-index: 1;
    color: #ff5f00;
    background-color: #FFFFFF;
}
.nexttabswrapped > .nexttabsbar .nexttabstab {
    color: #333333;
    background-color: #f7f8fa;
}
.nexttabstab.active {
    font-weight: normal;
}
.nexttabstab {
    display: inline-block;
    position: relative;
    -webkit-transition: all 100ms linear;
    transition: all 100ms linear;
}

.nexttabsnav {
    display: inline-block;
    position: relative;
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
    list-style: none;
    padding: 0;
    margin: 0;
}

.nexttabsnavcontainer {
 overflow: hidden;
 position: relative;
 white-space: nowrap;
}

.nexttabswrapped.nexttabstop > .nexttabsbar {
    position: relative;
}
.nexttabswrapped > .nexttabsbar {
    background: transparent;
}
.nexttabsbar {
    outline: none;
}
.nexttabs *, .nexttabs *:before, .nexttabs *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.SortBarcustomTab{
    font-size: 16px;
}

.nexttabs {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
}

.SortBarpriceTabIcon {
    color: #50607a;
    font-size: 8px;
    left: 140px;
    margin-left: 0;
    position: absolute;
    top: 8px;
    z-index: 998;
}
.iconfontsearch {
    /* font-family: "iconfont-tbpc-search" !important; */
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.SortBarsortBarWrapInner{
    height: 32px;
}

.SortBarsortBarWrapInner, .SortBarsortBarWrapTop {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    left: 5px;
    position: relative;
    /* -webkit-justify-content: center; */
    /* justify-content: center; */
}
.SortBarsortBarWrapTop{
    -webkit-transform: translateX(-13px);
    -ms-transform: translateX(-13px);
    transform: translateX(-13px);
}

.SortBarsortBarWrap {
    position: relative;
}

.SearchOuterBox{
 margin: 0 auto;
 top: 100px;
 position: relative;
}
.SortBar{
 display: flex;
}
.SortBarOtherSelector{
 display: flex;
}
.SearchBox{
 margin: 0 auto;
 position: relative;
 display: flexbox;
 padding: 20px;
 width: 1320px;
 box-shadow: 0 10px 28px 8px rgba(182, 213, 215, .7);
 border-radius: 30px;
 background-color: rgba(255, 255, 255, 0.9);
}

</style>