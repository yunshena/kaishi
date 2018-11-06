// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import IScrollView from 'vue-iscroll-view'
import VueScroller  from 'vue-scroller'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(VueScroller)
/* eslint-disable no-new */
router.beforeEach((to,from,next)=>{
  if (to.path === '/relea') { // 验证跳转的页面是否需要登陆 
    if (store.state.user){ // 判断vuex里面存储的信息：用户是否已经登陆 
     next(); //登录就直接跳转
    } else { //未登录就走下面的回调函数
     next({ 
      path: '/pass', // 未登录则跳转至登录页面 
      query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面 
      }); 
    } 
   } else { 
    next();//已经登录就不需要上面的判断
   }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate(){
    Vue.prototype.bus = this
  }
})
