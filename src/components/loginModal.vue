<template>
  <div class="page" v-show="isShow">
    <div class="container">
      <div class="title">藤蓝后台管理系统</div>
      <form>
        <div class="form-group">
          <label for="username" >用户名</label><br />
          <input type="text" v-model="username"/>
        </div>
        <div class="form-group">
          <label for="password">密码</label><br />
          <input type="password" v-model="password"/>
        </div>
        <div class="form-group">
          <div class="submit" @click="onLogin">登录</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginModal",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  props: ["isShow", "login"],
  methods: {
    switchTo: function() {

    },
    onLogin: function(){
      this.login(this.username, this.password);
    }
  }
};
</script>

<style scoped>
.page {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: #eee;
  z-index: 1;
}

.container {
  margin: 120px auto 0px;
  width: 350px;
  /* border: 1px solid #000; */
  /* box-shadow: 1px 1px 5px 1px rgba(0,0,0, .1); */
  min-height: 300px;
  overflow: hidden;
  padding: 40px 30px;
  background-color: #fff;
  border-radius: 5px;
}

.title {
  margin: 10px auto 60px;
  text-align: center;
  font-size: 22px;
  color: #4da1ff;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  color: #333;
}

.form-group input {
  margin: 15px 0px 15px;
  height: 30px;
  width: 100%;
  border-radius: 3px;
  outline: none;
  box-shadow: none;
  border: 1px solid #d8dce5;
  background-color: #fff;
  padding: 10px;
}

.submit {
  padding: 8px;
  /* height: 20px; */
  text-align: center;
  color: #fff;
  border-radius: 25px;
  background-color: #4da1ff;
}
</style>
