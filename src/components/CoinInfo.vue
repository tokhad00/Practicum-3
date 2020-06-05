<template>
    <div class="card">
      <div class="card-body">
        <figure>
          <img :src="coinInfo.image.small" />
          <figcaption>
            <h4>Name: {{coinInfo.name}}</h4>
            <h4>Description: {{coinInfo.description.en}}</h4>
            <h4>Change the coin value to the dollar over the past day: {{coinInfo.market_data.price_change_percentage_24h_in_currency.usd}}</h4>
          </figcaption>
        </figure>
      </div>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import axios from "axios";

export default {
  name: 'CoinInfo',
  props: {},
  data() {
    return {};
  },
  computed: {
    coinInfo() {
      return this.$store.state.coinInfo;
    }
  }
};
</script>