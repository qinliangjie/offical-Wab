import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import company from '@/components/company'
import corporate from '@/components/corporate'
import products from '@/components/products'
import joinus from '@/components/joinus'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/index',
      name: '首页',
      component: index
    },
    {
      path: '/company',
      name: '公司信息',
      component: company
    },
    {
      path: '/corporate',
      name: '企业文化',
      component: corporate
    },
    {
      path: '/products',
      name: '产品业务',
      component: products
    },
    {
      path: '/joinus',
      name: '加入我们',
      component: joinus
    }
  ]
})
