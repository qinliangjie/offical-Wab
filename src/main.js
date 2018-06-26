// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/index.css'
import BackTop from './components/gotoback'
import NavLeft from './components/lifenav'

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
  components: { App },
  template: '<App/>'
})
