import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import company from '@/components/company'
import corporate from '@/components/corporate'
import products from '@/components/products'
import joinus from '@/components/joinus'

import Newlist from '@/components/company/newlist'
import Newdetail from '@/components/company/newdetail'
import Companymy from '@/components/company/mycompany'
Vue.use(Router)

var router = new Router({
  linkActiveClass: 'active', 
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
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
      component: company,
      children:[{
        path:'/',
        redirect: {
          name:'公司信息'
        }
        //name:'schoolLevel',
        //component:SchoolLevel,
      },{
        path: '/company/mycompany',
        name: '公司信息',
        component: Companymy
      },{
        path: '/company/newlist',
        name: '新闻列表',
        component: Newlist
      },{
        path: '/company/newdetail',
        name: '新闻详情',
        component: Newdetail
      }]
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

export default router;