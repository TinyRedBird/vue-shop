<template>
 <div>
   <div class="content">
    <div class="BasicContent">
     <div class="summaryInfoWarp">

      <div class="picGallery">
        <div class="mainPicWarp">
          <img class="mainPic" src="https://ts1.cn.mm.bing.net/th/id/R-C.987f582c510be58755c4933cda68d525?rik=C0D21hJDYvXosw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1305%2f16%2fc4%2f20990657_1368686545122.jpg&ehk=netN2qzcCVS4ALUQfDOwxAwFcy41oxC%2b0xTFvOYy5ds%3d&risl=&pid=ImgRaw&r=0" alt="">
        </div>
      </div>

      <div class="purchasePanel">
        <div class="contentWrap">

          <div class="ItemTitle">
            <h1 class="mainTitle">可口可乐</h1>
          </div>

          <div class="Price">
            <div class="priceWrap">
              <span class="symbol">￥</span>
              <span class="priceText">99</span>
            </div>
          </div>

        </div>

        <div class="BasicContentGood">
          <div class="block">

            <div>
              <div class="skuCate">
                <span class="pcSkuCateText skuCateText">种类：</span>
                <div class="skuItemWrapper">
                  <div class="skuItem ">
                    <span class="skuValueName">饮料</span>
                  </div>
                </div>
              </div>

              <div class="skuCate">
                <span class="pcSkuCateText skuCateText">库存：</span>
                <div class="skuItemWrapper">
                  <div class="skuItem ">
                    <span class="skuValueName">10</span>
                  </div>
                </div>
              </div>

            </div>

            <div class="quantityLine">
              <div>
                <span class="countText">数量：</span>
                <div class="countWrapper">
                    <div class="quantityBtn minusBtn disabled"><span class="quantityBtnTextForPC">-</span></div>
                    <div class="countValueWrapper"><input class="countValueForPC" height="0" autocomplete="false"></div>
                    <div class="quantityBtn addBtn"><span class="quantityBtnTextForPC">+</span></div>
                </div>
              </div>
            </div>
        </div>

          <div class="Actions">
            <div class="ActionsBtnW">
              <button class="ActionsBtn ActionsPrimBtn"><span class="ActionsBtnText">加入购物车</span></button>
            </div>
          </div>

        </div>
      </div>

      </div>
     </div>
    
    </div>
  </div>
</template>

<style scoped>
.skuItem {
    min-width: 36px;
    max-width: 300px;
    min-height: 36px;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 9px;
    margin-right: 100px;
    /* margin-left: 4.5px; */
    padding: 2px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, .06);
    border: 1px solid transparent;
    cursor: pointer;
    text-align: center;
    position: relative;
}

.skuValueName {
    max-width: 264px;
    padding-left: 4px;
    display: inline-block;
    font-size: 14px;
    line-height: 14px;
    color: #333;
    text-overflow: ellipsis;
    padding: 0 8px;
    white-space: nowrap;
    overflow: hidden;
    max-width: 294px;
    line-height: 30px;
    vertical-align: middle;
}

.skuItemWrapper {
    display: inline-block;
    vertical-align: top;
    width: 120px;
    margin-left: -4.5px;
}

.ActionsBtnText{
  display: inline;
  font-size: 16px;
  font-weight: bold;
  color: rgb(255, 255, 255);
}

button {
    border-radius: 0;
    font-size: 100%;
}

.ActionsBtn {
    outline: 0;
    border: 0;
    cursor: pointer;
    height: 48px;
    line-height: 22px;
    text-align: center;
    background: transparent;
}

.ActionsPrimBtn{
  background: linear-gradient(90deg, rgb(255, 203, 0), rgb(255, 148, 2));
  box-shadow: rgba(255, 203, 0, 0.2) 0px 9px 13px 0px;
  vertical-align: top;
  border-radius: 34px;
  padding: 0 36px;
}

.ActionsBtn{
  display: inline-block;
}

.Actions{
  position: relative;
  margin-top: 22px;
}

.addBtn {
    border-top-right-radius: 5.645px;
    border-bottom-right-radius: 5.645px;
}

.countValueForPC {
    font-size: 16px;
}

.countValue, .countValueForPC {
    outline: none;
    border: none;
    text-align: center;
    padding: 0 2px;
    width: 44px;
    background-color: transparent;
}

.countValueWrapper {
    width: 48.75px;
    margin: 0 2px;
    height: 36px;
    background-color: rgba(0, 0, 0, .06);
    overflow: hidden;
}

.quantityBtnTextForPC {
    font-size: 25px;
}

.quantityBtn.disabled, .skuItem.disabled, .skuServiceUniqItem.disabled {
    cursor: not-allowed;
    color: #ccc;
    background-color: rgba(0, 0, 0, .06);
}

.countWrapper>div {
    text-align: center;
    line-height: 36px;
}
.countWrapper, .countWrapper>div {
    display: inline-block;
    vertical-align: top;
}
.minusBtn {
    border-top-left-radius: 5.645px;
    border-bottom-left-radius: 5.645px;
}
.quantityBtn {
    height: 36px;
    width: 36px;
    background-color: rgba(0, 0, 0, .06);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
/*  */

.countText{
  display: inline-block;
  height: 15px;
  font-size: 15px;
  color: #7f7f7f;
  width: 8vw;
  line-height: 15px;
  margin-top: 12px;
}

.quantityLine{
  margin-top: 9px;
}

.skuCateText{
  height: 15px;
  /* font-family: ; */
  font-size: 15px;
  color: #7f7f7f;
  line-height: 15px;
  margin-top: 9px;
  display: inline-block;
}

.pcSkuCateText{
  width: 8vw;
  padding-right: 5px;
  display: inline-block;
}

.skuCate{
  vertical-align: baseline;
  margin-bottom: 3vh;
}

.block{
  background-color: #fff;
  border-radius: 15px;
}

.BasicContentGood{
  margin-top: 10vh;
  float: left;
  display: grid;
}

.priceText{
  font-weight: 700;
  display: inline-block;
  margin-right: 2px;
  vertical-align: baseline;
  font-size: 35px;
  line-height: 35px;
}

.symbol{
  display: inline-block;
  margin-right: 2px;
  vertical-align: baseline;
  font-size: 20px;
  line-height: 20px;
}

.priceWrap{
  height: 4vh;
  position: relative;
  margin-left: 0;
  color: #ff5000;
  float: none;
}

.Price{
  margin-top: 20px;
  letter-spacing: 0;
  width: 38vw;
  text-align: start;
  align-content: flex-start;
}

.mainTitle{
  overflow: hidden;
  /* text-overflow: ellipsis; */
  color: #000;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 28px;
  margin: 0;
  padding: 0;
  /* -webkit-box-orient: vertical;
  display: -webkit-box; */
}

.mainPic{
  padding-top: 0;
  border-radius: 10px;
  display: block;
  max-height: 100%;
  max-width: 100%;
  border:0;
}

.mainPicWarp{
  position: relative;
  border-radius: 10px;
  height: 60vh;
  width: 38vw;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 16px;
  word-break: break-all;
}

.purchasePanel{
  transform: none;
  width: 38vw;
  background-color: #ffffff;
  /* opacity: 0; */
  word-break: break-all;
}

.picGallery{
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  position: sticky;
  word-break: break-all;
}

.summaryInfoWarp{
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: flex-start;
}

.BasicContent{ 
 box-shadow: 0 10px 28px 8px rgba(182,213,215,.7);
 background-color: #fff;
 border-radius: 25px;
 display: flex;
 flex-direction: column;
 padding: 16px;
}

.content{
 margin: 0 auto ;
 width: 80vw;
 word-break: break-all;
 position: relative;
 top: 10vh;
}
</style>