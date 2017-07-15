// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import auth from './packages/auth/auth.js' 
import jQuery from 'jquery'
global.jQuery=jQuery
let bootstrap=require('bootstrap')

Vue.use(auth)
Vue.use(vueResource)


require('../node_modules/bootstrap/dist/css/bootstrap.css')


Vue.config.productionTip = false
Vue.http.options.root='http://localhost:8000'
Vue.http.headers.common['Authorization']='Bearer '+ Vue.auth.getToken()

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.forGuest)){
    if(Vue.auth.isAuthenticated()){
      next({path:'/'});
    }
      else next()

    }
    else if(to.matched.some(record=>record.meta.forAuth)){
    if(Vue.auth.isAuthenticated()){
      next();
    }
      else next({path:'/login'})

    }
    else next()
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
