<template>
  <div id="app">
    <el-container>
      <!-- 上面的头部 -->
      <el-header class="top-header">
        <h1 class="proj-name">{{ projName }}</h1>
        <div class="setting">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
              <!-- <el-dropdown-item>删除</el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
          <span>管理员</span>
        </div>
        
      </el-header>
      
      <el-container>
        <!-- 侧边导航 -->
        <el-aside width="170px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            >
          
            <el-menu-item index="1" @click="goTo('userlist')">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="2" @click="goTo('/projectlist')">
              <i class="el-icon-menu"></i>
              <span>项目管理</span>
            </el-menu-item>
            <el-menu-item index="3" @click="goTo('/applicationlist')">
              <i class="el-icon-tickets"></i>
              <span>审批管理</span>
            </el-menu-item>
            <el-menu-item index="4" @click="goTo('/files')">
              <i class="el-icon-document"></i>
              <span>资料管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-bell"></i>
              <span>消息管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 中间内容区域 -->
        <el-main>
          <transition :name="animation">
            <router-view class="page-container"></router-view>
          </transition>
        </el-main>

      </el-container>

    </el-container>
    <transition name="fade">
      <login-modal :isShow="showLogin" :login="login"></login-modal>
    </transition>
  </div>
</template>
<script>
import loginModal from "@/components/loginModal.vue";

export default {
  name: "app",
  data: function() {
    return {
      projName: "藤蓝后台管理系统",
      showLogin: false
    };
  },
  computed: {
    animation: function() {
      return this.$root.animation;
    }
  },
  components: {
    loginModal
  },
  mounted() {
    var AV = this.AV;

    // AV.User.logIn('admin', '123456').then(function(user) {
    //   console.log(user);
    //   sessionStorage.setItem('token', user.sessionToken);
    //   AV.user = user;
    //   this.showLogin = false;
    // });

    if (!AV.User.current()) {
      this.showLogin = true;
    }
    linstenClicks();
  },
  methods: {
    goTo(page) {
      this.$switchTo(page);
    },
    login(username, password) {
      var _this = this;
      this.AV.User.logIn(username, password).then(
        function(res) {
          _this.showLogin = false;
        },
        function(err) {
          _this.$message({
            message: err.rawMessage,
            type: "error"
          });
        }
      );
    }
  }
};

var linstenClicks = function(openId) {
  var body = document.body;
  
  body.onclick = function(evt) {
    var query = {};
    var specTag = 'action-tag';
    var target = evt.target;

    console.log("id:" + target.id);
    console.log("class:" + target.className);
  };
  
};

var factoryFormData = function() {
  var specTag = 'action-tag';
}
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#app {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f3f3f5;
  display: flex;
}

.page-container {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
}

.el-header {
  /* border-bottom: 1px #e0e0e0 solid; */
  background-color: #477ccc;
  z-index: 1;
}

.el-aside {
  background-color: #fff;
}

.el-main {
  position: relative;
}

.proj-name {
  color: #fff;
  margin-top: 12px;
  font-weight: 400;
}

.el-menu {
  height: 100%;
  box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.1);
}

.top-header {
  display: flex;
  justify-content: space-between;
}

.setting {
  line-height: 60px;
  color: #fff;
}
.el-dropdown {
  color: #fff;
}
/* .page{
    position: absolute;
    height: 100%;
    width: 100%;
    background: #F17A7A;
    color: #fff;
} */
</style>