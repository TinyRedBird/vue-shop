<template>
 <div>

  <div class="PageHeadersuggestWarp">
   <div id="Search" class="search SearchSuggestsearchSuggest searchsuggest searchsuggestgroup">
    
    <div data-sg-type="tab">
     <ul class="searchsuggesttabs">
      <li class="searchsuggesttabstab selected">
       <span class="searchsuggesttabstablabel">商品</span>
       <i class="fa fa-angle-down searchtabicon"></i>
      </li>

      <li class="searchsuggesttabstab" data-value="shop">
       <span class="searchsuggesttabstablabel">店铺</span>
      </li>
     </ul>
    </div>
<form action="">
     <button class="btnsearch">搜索</button>
     <div class="searchsuggestcombobox" data-sg-type=combobox>
      <input type="text" id="q" autocomplete="off" class="searchsuggestcomboboximageSearchinput">
     </div>
    </form>
   </div>
  </div>

 </div>
</template>

<style scoped>

[data-sg-type=tab] .searchtabicon {
    left: 48px;
    position: absolute;
    top: 13px;
    z-index: 2;
}

[data-sg-type=tab] .searchsuggesttabstab:first-child {
    color: #11192d;
    cursor: default;
    font-weight: 500;
    pointer-events: none;
}

[data-sg-type=tab] .searchsuggesttabstab {
    color: #11192d;
    cursor: pointer;
    font-family: Roboto, Helvetica Neue, Helvetica, Tahoma, Arial, PingFang SC, Microsoft YaHei;
    font-size: 14px;
    height: 38px;
    line-height: 38px;
    margin-top: -2px;
    padding-left: 16px;
    text-align: left;
}
.searchsuggest * {
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
}


[data-sg-type=tab] .searchsuggesttabstab {
    height: 38px;
    color: #11192d;
    line-height: 38px;
    text-align: left;
    cursor: pointer;
    font-size: 14px;
    padding-left: 16px;
    font-family: Roboto, Helvetica Neue, Helvetica, Tahoma, Arial, PingFang SC, Microsoft YaHei;
    margin-top: -2px;
}


li {
    margin-left: 0;
}

[data-sg-type=tab] .searchsuggesttabs {
    background: #fff;
    border-radius: 8px;
    -webkit-box-shadow: 0 24px 48px 0 rgba(0, 17, 51, .07);
    box-shadow: 0 24px 48px 0 rgba(0, 17, 51, .07);
    margin-top: 1px;
    overflow: hidden;
    position: relative;
    width: 68px;
}

ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
}

.searchsuggestcombobox .searchsuggestcomboboximageSearchinput, [data-sg-type=combobox] .searchsuggestcomboboximageSearchinput {
    padding-right: 36px;
}

.searchsuggestcombobox>input, [data-sg-type=combobox]>input {
    background-color: #fff;
    border: 0;
    color: #11192d;
    font-size: 14px;
    height: 34px;
    line-height: 20px;
    margin-top: 4px;
    outline: none;
    overflow-y: visible;
    padding: 9px 0;
    text-align: left;
    text-indent: 12px;
    vertical-align: middle;
    width: 100%;
}

button, input, optgroup, select, textarea {
    font-family: inherit;
}

.searchsuggest.searchsuggestgroup [data-sg-type=combobox] {
    margin-left: 69px;
}

.searchsuggest [data-sg-type=combobox] {
    border-radius: 20px;
    margin-left: 5px;
    margin-right: 75px;
    overflow: hidden;
}

.searchsuggestcombobox, [data-sg-type=combobox] {
    position: relative;
    vertical-align: middle;
}

.searchsuggest .btnsearch {
    background: #ff5000;
    /* background: var(--tbpc-pimary-theme-color); */
    background-image: none;
    border: none;
    border-radius: 0 20px 20px 0;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    height: 42px;
    position: absolute;
    right: -2px;
    top: -1px;
    width: 75px;
    z-index: 9;
}

button, input, optgroup, select, textarea {
    font-family: inherit;
}

button, select {
    text-transform: none;
}

button, input, optgroup, select, textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

button, input {
    overflow: visible;
}

.SearchSuggestsearchSuggest {
    background-clip: padding-box;
    position: relative;
    width: 100%;
    z-index: 3;
}

.searchsuggest {
    background: #fff;
    border: 2px solid #ff5000;
    border-radius: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 44px;
    position: relative;
    width: 600px;
}

@media (min-width:1400px) {
 .PageHeadersuggestWarp{
  width: 752px;
 }
}

.PageHeadersuggestWarp{
 -webkit-box-pack: end;
 margin: auto;
 -ms-flex-pack: end;
 display: -webkit-box;
 display: -webkit-flex;
 display: -ms-flexbox;
 display: flex;
 -webkit-justify-content: flex-end;
 justify-content: flex-end;
 width: 600px;
}

*, *:before, *:after {
 -webkit-box-sizing: border-box;
 box-sizing: border-box;
}
</style>