<template>
  <div id="converter">
    <form>
      <input type="number" v-model="valueCurrency" /> from
      <select v-model="fromCurrency">
        <option v-for="coin in coins" :key="coin.id">{{coin.name}}</option>
      </select> to
      <select v-model="toCurrency">
        <option v-for="(currency, index) in supportedCurrencies" :key="index">{{currency}}</option>
      </select>
      <button type="button" class="btn btn-primary" @click="sendData()">Convert</button>
      <p class="currency-result">{{valueCurrency}} {{fromCurrency}} = {{convertedValue}} {{toCurrency}}</p>
    </form>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import axios from "axios";

export default {
  name: "Converter",
  props: {},
  data() {
    return {
      fromCurrency: '',
      toCurrency: '',
      valueCurrency: 0
    };
  },
  mounted() {
    this.$store.dispatch("loadCoins");
    this.$store.dispatch("loadSupportedCurrencies");
  },
  computed: {
    coins() {
      return this.$store.state.coins;
    },
    supportedCurrencies() {
      return this.$store.state.supportedCurrencies;
    },
    convertedValue() {
      return (this.$store.state.convertedValue * this.valueCurrency);
    }
  },
  methods: {
      sendData() {
          this.$store.dispatch("loadConvertedValue", this.fromCurrency, this.toCurrency);
      }
  }
};
</script>