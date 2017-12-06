import Vue from 'vue'
import Router from 'vue-router'
import userList from '@/page/userListPage/index'
import userInfo from '@/page/userInfoPage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/userlist',
      name: '用户列表',
      component: userList
    },
    {
      path: '/userinfo',
      name: '用户详情',
      component: userInfo
    }
  ]
})
