// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
const config = {
  errorBagName: 'ferrors'
}
Vue.use(VeeValidate, config)
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import axios from 'axios'
Vue.use(VueAxios, axios)
Vue.router = new VueRouter()

Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  loginData: {url: 'http://vuebook.app/api/v1/login', method: 'POST', redirect: '/', fetchUser: false}
})

Vue.config.productionTip = false
// Vue.router = new VueRouter({
//   router
// })
// Vue.router = router

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
