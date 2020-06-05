<template>
    <div>
        <table class="table table-hover table-dark">
            <thead>
                <th scope="col">Name</th>
                <th scope="col">Year</th>
                <th scope="col">Country</th>
                <th scope="col">Volume</th>
            </thead>
            <tbody
                v-for="exchange in exchanges"
                :key="exchange.id"
            >
                <tr>
                    <td><img :src="exchange.image" class="exchange-image"><a :href="exchange.url">{{exchange.name}}</a></td>
                    <td>{{exchange.year_established}}</td>
                    <td>{{exchange.country}}</td>
                    <td>{{exchange.trade_volume_24h_btc_normalized.toFixed(2)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import axios from 'axios';

export default {
    name: 'ExchangesList',
    props: {},
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('loadExchanges');
    },
    computed: {
      exchanges() {
        return this.$store.state.exchanges;
      }
    }
}
</script>