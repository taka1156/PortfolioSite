import Vue from 'vue';
import App from './App';
import router from './router';
import '@/components/css/layout.css';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 0.7,
  loading: require('@/assets/loading-icon.svg'),
  attempt: 1
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
