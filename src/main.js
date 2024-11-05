import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // 添加这行代码以导入 store 模块

Vue.config.productionTip = false;

new Vue({
  router,
  store, // 确保在 Vue 实例中注册 store
  render: h => h(App),
}).$mount('#app');