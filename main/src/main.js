import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  base: '/',
  mode: 'history',
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: 'appvue',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app-vue',
  }
]);

start()