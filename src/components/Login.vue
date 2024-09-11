<template>
  <div>
    <form action="" method="post">
      <div class="loginBox">
        
          <input type="text" id="mail" placeholder="请输入邮箱号" required>
          <label for="mail"><i class="fa fa-envelope" aria-hidden="true"></i> </label>
          <input type="text" id="username" placeholder="请输入用户名" required>
          <label for="username"></label>
          <input type="text" id="password" placeholder="请输入密码" required>
          <label for="password"></label>
          <input type="text" id="yanzhengma" placeholder="请输入验证码" required>
          <label for="yanzhengma"></label>
       
          <button type="submit">注册</button>
        
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}

.loginBox{
  height: 500px;
  width: 1000px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  border-radius: 20px;
}

input,button{
  border: 1px solid #BBB;
  color: #101010;
  border-radius: 10px;
}
input:nth-child(1){
  margin: 70px 0 0 0;
}
input{
  width: 50%;
  height: 50px;
  padding: 0;
  font-size: 24px;
  margin: 0 0 40px 0;
  text-align: center;
}

button{
  width: 160px;
  height: 64px;
  font-size: 28px;
}
</style>
