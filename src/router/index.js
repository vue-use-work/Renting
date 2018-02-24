import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import login from '@/view/login'
import district from '@/view/district'
import ProductList from '@/components/ProductList'
import shoppingCart from '@/components/ShopingCart'

import roomEdit from '@/view/room/edit'
import roomContract from '@/view/room/contract'

import test from '@/view/test'
import staffManage from '@/view/permission/staffManage'
import departManage from '@/view/permission/departManage'
import staffAdd from '@/view/permission/staffAdd'
import departAdd from '@/view/permission/departAdd'
import division from '@/view/divisionManager'

import addApart from '@/view/addRoom/addApartment'
import addHouse from '@/view/addRoom/addHouse'
import company from '@/view/addRoom/companyManage'

import ShopingCart from '@/components/ShopingCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  routes: [
    {
      path: '/district/:id',
      name: 'district',
      component: district
    },
    {
      path: '/test/:id',
      name: 'test',
      component: test
    },
    {
      path: '/ShopingCart',
      name: 'ShopingCart',
      component: ShopingCart
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },

    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/prdqwoductList',
      name: 'productList',
      component: ProductList
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: shoppingCart
    },
    {
      path: '/addApart',
      name: 'addApart',
      component: addApart
    },
    {
      path: '/addHouse',
      name: 'addHouse',
      component: addHouse
    },
    {
      path: '/roomEdit',
      name: 'roomEdit',
      component: roomEdit
    },
    {
      path: '/roomContract',
      name: 'roomContract',
      component: roomContract
    },
    {
      path:'/staffManage',
      name: 'staffManage',
      component:staffManage
    },
    {
      path: '/departManage',
      name: 'departManage',
      component: departManage
    },
    {
      path: '/staffAdd',
      name: 'staffAdd',
      component: staffAdd
    },
    {
      path: '/permission/departAdd',
      name: 'departAdd',
      component: departAdd
    },
    {
      path: '/division',
      name: 'division',
      component: division
    }
  ]
})
