import Vue from 'vue'
import Router from 'vue-router'
import userList from '@/page/userListPage/index'
import userInfo from '@/page/userInfoPage/index'
import projectList from '@/page/projectListPage/index'
import applicationList from '@/page/applicationListPage/index'

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
    },
    {
      path: '/projectlist',
      name: '项目列表',
      component: projectList
    },
    {
      path: '/applicationlist',
      name: '审批列表',
      component: applicationList
    }
  ]
})
