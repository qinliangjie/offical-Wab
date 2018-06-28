// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

import {getCookie} from './assets/js/cookie'
import '../static/css/index.css'
import BackTop from './components/gotoback'
import NavLeft from './components/lifenav'




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
