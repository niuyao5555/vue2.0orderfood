import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes}  from './routes'

import axios from 'axios'
import {store} from './store/store.js'
//
axios.defaults.baseURL="https://wd1651665797fisacv.wilddogio.com/"
Vue.use(VueRouter)



const router=new VueRouter({
	routes,
	mode:'history',
	scrollBehavior(to,from,savedPosition){
		return {x:0,y:100}
	}
})
//全局守卫
// router.beforeEach((to,from,next)=>{
//    // alert("还没有登录，请登录！");
//    // next();
//    //console.log(to);
//    if(to.path=='/login'||to.path=='/register'){
//    	 next();
//    }else{
//    	alert("还没有登录，请登录！");
//    	next('/login');
//    }
// })
//后置钩子
// router.afterEach((to,from)=>{
// 	       alert("afterEach");
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
