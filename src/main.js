// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import axios from 'axios'

import {getCookie} from './assets/js/cookie'
import '../static/css/index.css'
import BackTop from './components/gotoback'
import NavLeft from './components/lifenav'

/* vue配置 */
Vue.config.debug = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false

/* axios配置 */
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios

var querystring = require('querystring');

var baseUrl = "" //接口前缀地址
/* 
 * 封装ajax
 * obj : 全局this
 * data : ajax传入后台data数据
 * address : ajax接口地址
 * fn : 成功返回方法  带参数  obj,data  obj : this data : response
 * */
Vue.prototype.postHttp = function(obj,data,address,fn){
  obj.$axios.post(baseUrl+address,querystring.stringify(data),{withCredentials : true}).then(response => {
      fn(obj,response.data);
      
    },response => {
      
  })
}




var s = '';
if(getCookie('lang')){
    s=getCookie('lang')
}else{
    s='zh'
}
Vue.use(VueI18n) 
const i18n = new VueI18n({ 
 locale: s, // 语言标识 
 messages: { 
  'zh': require('./assets/lang/zh'), 
  'en': require('./assets/lang/en'),
  'tc': require('./assets/lang/tc')
 } 
}) 

Vue.config.productionTip = false
BackTop.install = function(Vue) {
  Vue.component(BackTop.name, BackTop);
};

NavLeft.install = function(Vue) {
  Vue.component(NavLeft.name, NavLeft);
};
Vue.use(NavLeft);
Vue.use(BackTop);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
