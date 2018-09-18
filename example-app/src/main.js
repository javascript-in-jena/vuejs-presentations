import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: (el) => {
    el.focus()
  }
})

Vue.filter('uppercase', (value = '') => {
  value = value.toString()
 return value.toUpperCase()
})

new Vue({
  render: h => h(App)
}).$mount('#app')
