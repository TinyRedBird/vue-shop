<template>
 <div>
    <h1 class="registerTitle">登录</h1>
      <form action="" method="post">
        <div class="registerBox">
          <label for="mail"><i class="fa fa-envelope"></i></label>
          <input type="text" id="mail" placeholder="请输入邮箱号" required>
          <label for="password"><i class="fa fa-lock"></i></label>
          <input type="text" id="password" placeholder="请输入密码" required>
          
          <p><a href="">没有有账号？点击注册</a></p>
          <button type="submit" class="RegisterBtn">登录</button>
          <p><a href="">忘记密码</a></p>
        </div>
      </form>
  </div>
</template>

<script scoped>

export default {
  name:'Register',
}
</script>

<style>

label{
  display: flex;
  margin: 0;
  padding: 0;
}

.registerTitle{
  padding: 0;
  margin: 30px auto;
}

.registerBox{
  height: 500px;
  width: 1000px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;
}

.registerBox i{
  margin: 0;
  padding: 0;
  position: relative;
  display: block;
  font-size: 50px;
  width: 50px;
  height: 50px;
  top: 70px;
  left: 120px;
}

.registerBox input{
  border: 1px solid #BBB;
  color: #101010;
  border-radius: 10px;
  padding: 0;
  display: inline;
  outline: none;
  margin: 20px auto;
  text-align: center;
}

.registerBox input{
  width: 50%;
  height: 50px;
  font-size: 24px;
}

.RegisterBtn{
  border: 1px solid #BBB;
  color: #101010;
  border-radius: 10px;
  padding: 0;
  display: inline;
  outline: none;
  margin: 0 auto;
  text-align: center;
  width: 16vw;
  height: 50px;
  font-size: 28px;
}

</style>