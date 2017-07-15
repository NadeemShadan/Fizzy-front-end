import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import test from '@/components/test'
import addBike from '@/components/addBike'
import login from '@/components/auth/login'
import register from '@/components/auth/register'
import bios from '@/components/bios'

// Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },{
      path: '/addMoto',
      name: 'addBike',
      component: addBike,
      meta :{
      forAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta :{
      forGuest:true
    }
},
  {
    path: '/register',
    name: 'register',
    component: register,
    meta :{
      forGuest:true
    }
}, {
    path: '/bios',
    name: 'bios',
    component: bios,
}

  ]
})
