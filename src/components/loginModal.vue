<template>
  <div class="page" v-show="isShow">
    <div class="container">
      <div class="title">藤蓝后台管理系统</div>
      <form>
        <div class="form-group">
          <label for="username">用户名</label><br />
          <input type="text"/>
        </div>
        <div class="form-group">
          <label for="username">密码</label><br />
          <input type="password"/>
        </div>
        <div class="form-group">
          <div class="submit">登录</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginModal',
  data () {
    return {
      // isShow: true
    }
  },
  props: ["isShow"],
  methods: {
    switchTo: function () {
    }
  }
}
</script>

<style scoped>
.page{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 1;
}

.container{
  margin: 120px auto 0px;
  width: 350px;
  /* border: 1px solid #000; */
  /* box-shadow: 1px 1px 5px 1px rgba(0,0,0, .1); */
  min-height: 300px;
  overflow: hidden;
}

.title{
  margin: 10px auto 80px;
  text-align: center;
  font-size: 22px;
  color: #4da1ff;
}

.form-group{
  margin-bottom: 25px;
}

.form-group label{
  color: #b9b9b9;
}

.form-group input{
  margin: 5px 0px 15px;
  height: 30px;
  width: 100%;
  border-radius: 3px;
  outline: none;
  box-shadow: none;
  border: 1px solid #f3f4fa;
  background-color: #fafbfc;
  padding: 10px;
}

.submit{
  padding: 8px;
  /* height: 20px; */
  text-align: center;
  color: #fff;
  border-radius: 25px;
  background-color: #4da1ff;
}
</style>
