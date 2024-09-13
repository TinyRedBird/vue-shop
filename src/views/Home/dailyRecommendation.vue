<template>
 <div>
  <div class="layer">
      <div class="feedsContents">
        <h1>每日推荐</h1>
        <div class="pickContentItem">
          <a href="/">
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        
        </div>
      </div>  
         
      
     </div>
 </div>
</template>

<style scoped>
.layer{
  height: 500px;
  position: relative;
  width: 1400px;
  background-color: #FFF;
  padding: 0;
  margin: 0 auto;
}

.feedsContents{
  position: relative;
  top: 50px;
}

.feedsContents >h1{
margin: 0;
}


.pickContentItem{
  background-color: var(--tbpc-white-color, #FFF);
  border-radius: 12px 12px 0 0;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid #BBB;
  height: 350px;
  margin: 0 20px 20px 20px;
  position: inherit;
  box-shadow: #101010;
  transition: all .5s;
  width: 250px;
}
</style>