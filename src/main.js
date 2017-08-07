// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import recommend from './components/recommend/recommend'
import rank from './components/rank/rank'
import search from './components/search/search'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import axios from 'axios'
Vue.prototype.$http = axios;


Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */

const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"

//this.$http.get(url)
//.then(function (response) {
//  console.log(response);
//})
//.catch(function (error) {
//  console.log(error);
//});

/*this.$http({
	method:'get',
	url:url,
	params:{
		g_tk:5381,
	uin:0,
	format:"json",
	inCharset:"utf-8",
	outCharset:"utf-8",
	notice:0,
	platform:"h5",
	needNewCode:1,
	_:1501808272648
	}
}).then(res =>{
		console.log(res)
})
*/
//定义路由

const routes = [
	{path:"/",redirect:"/recommend"},
	{path:"/recommend",component:recommend},
	{path:"/rank",component:rank},
	{path:"/search",component:search}
]

//实例化路由

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
