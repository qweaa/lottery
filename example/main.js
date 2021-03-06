// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myUI from '../packages/index'
// import {Button} from '../packages/index'
import '../packages/index.less'

Vue.use(myUI, {
  // isUseRem: true     //初始化配置
})
// Vue.component(Button.name, Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
