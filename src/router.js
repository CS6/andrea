import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App.vue'
import test from './test.vue'
import key from './view/Key.vue'
import Camera from './view/Camera.vue'

Vue.use(VueRouter); //挂载属性
//创建路由对象并配置路由规则
export default new VueRouter({
  mode: 'history',
  routes: [
    //一个个对象
    // { path: '/', component: AllApp },
    {
      path: '/',
      component: test,
    },
    {
      path: '/key/',
      component: key,
    },
    {
      path: '/Camera/',
      component: Camera,
    },
    // {
    //   path: '/AccountManagementList',
    //   component: test,
    //   children: [
    //     {
    //       path: 'userinfo',
    //       name:'userinfo',
    //       component: test
    //     },
    //     {
    //       path: 'useradd',
    //       component: test
    //     },
    //     {
    //       path: '/',
    //       component: test
    //     }
    //   ]
    // },
    // {
    //   path: '/',           //這個表示的是根目錄，即一進入的頁面
    //   redirect: 'login',
    //   meta: { requiresAuth: false }, // 不需驗證
    // },
    // {
    //   path: '/*',
    //   redirect: '/login',
    //   meta: { requiresAuth: false }, // 不需驗證
    // }
  ]
});
