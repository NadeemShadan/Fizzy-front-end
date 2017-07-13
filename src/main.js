// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

Vue.use(vueResource)
require('../node_modules/jquery/dist/jquery.min.js')
// require('../node_modules/materialize-css/dist/css/materialize.css')
// require('../node_modules/materialize-css/dist/js/materialize.min.js')
require('../node_modules/bootstrap/dist/css/bootstrap.css')

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})