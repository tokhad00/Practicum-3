import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import RatesList from './components/RatesList.vue';
import ExchangesList from './components/ExchangesList.vue';
import CoinsList from './components/CoinsList.vue';
import Chart from './components/Chart.vue';
import Converter from './components/Converter.vue';

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/RatesList',
        name: 'RatesList',
        component: RatesList
    },
    {
        path: '/ExchangesList',
        name: 'ExchangesList',
        component: ExchangesList
    },
    {
        path: '/CoinsList',
        name: 'CoinsList',
        component: CoinsList
    },
    {
        path: '/Chart',
        name: 'Chart',
        component: Chart
    },
    {
        path: '/Converter',
        name: 'Converter',
        component: Converter
    },
];

export default new VueRouter({
    routes
});