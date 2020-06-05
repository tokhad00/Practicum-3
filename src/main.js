import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index';
import router from './router';
import HighchartsVue from 'highcharts-vue'

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(HighchartsVue);
Vue.config.productionTip = false;

new Vue({
    store: new Vuex.Store(store),
    router,
    HighchartsVue,
    render: function (h) { return h(App) },
}).$mount('#app');