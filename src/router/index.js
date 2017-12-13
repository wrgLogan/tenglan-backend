import Vue from 'vue'
import Router from 'vue-router'
import userList from '@/page/userListPage/index'
import userInfo from '@/page/userInfoPage/index'
import projectList from '@/page/projectListPage/index'
import applicationList from '@/page/applicationListPage/index'
import files from '@/page/filesPage/index'
import projectInfo from '@/page/projectInfoPage/index'

Vue.use(Router);

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
      path: '/projectinfo/:objectId',
      name: '项目编辑',
      component: projectInfo
    },
    {
      path: '/applicationlist',
      name: '审批列表',
      component: applicationList
    },
    {
      path: '/files',
      name: '资料列表',
      component: files
    }
  ]
})
