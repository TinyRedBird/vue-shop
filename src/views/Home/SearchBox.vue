<template>
  <!-- 搜索框 -->
  <div>
    <form action="/" class="Shop">
     <div>
      <input type="text" v-model="searchTerm" placeholder="输入搜索内容" name="search" class="search">
     </div>
    <input type="submit" id="serachSubmit" class="serachBtn" value="搜索" @click="search"></input>
    </form>
   </div>
 
</template>

<script>
 export default {
  name: 'SearchBox',
  data(){
    return {searchTerm: ''}
  },
  methods:{
  search () {
  this.$router.push({
    path: '/SearchGood',
    query: {term: this.searchTerm},
  })
}
  }
 }
</script>

<style scoped>

.Shop{
 max-width: 600px;
 margin: 0 auto;
}
.serachBtn{
 width: 20%;
 margin: 0;
 padding: 10px;
 background-color: #FF8000;
 border-radius: 0 20px 20px 0;
 font-size: 18px;
 font-family: 'MicroSoft YaHei';
 font-weight: bold;
 letter-spacing: 4px;
 text-indent: 2px;
 color: #FFF;
 border: 3px solid #FF8000;
 cursor: pointer;
 text-align: center;
 box-sizing: border-box;
 float: right;
}
.search{
 width: 80%;
 margin: 0;
 padding: 10px;
 font-size: 18px;
 float: left;
 border: 4px solid #FF8000;
 border-radius: 20px 0 0 20px;
 background-color: #FFF;
 outline: none;
 color: #101010;
}
</style>