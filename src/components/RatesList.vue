<template>
  <div>
    <table class="table table-hover table-dark">
      <thead>
        <th scope="col">Name</th>
        <th scope="col">Unit</th>
        <th scope="col">Value</th>
      </thead>
      <tbody
        v-for="rate in rates"
        :key="rate.name"
      >
        <tr>
            <td>{{rate.name}}</td>
            <td>{{rate.unit}}</td>
            <td>{{rate.value}}</td>
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
    name: 'RatesList',
    props: {},
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('loadRates');
    },
    computed: {
      rates() {
        return this.$store.state.rates;
      }
    }
}
</script>