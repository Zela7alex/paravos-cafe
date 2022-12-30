import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Currency filter display (U.S dollar), available throughout entire application
Vue.filter('currency', (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    value
  )
)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
