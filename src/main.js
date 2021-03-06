import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'

// 导入axios
import axios from 'axios'
// 挂载到vue
Vue.prototype.$http = axios
// 配置请求的根路径
axios.defaults.baseURL = 'http://localhost:1337'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
