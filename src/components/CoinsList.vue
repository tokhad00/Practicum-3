<template>
  <div id="coins-list">
    <table class="table table-hover table-dark">
      <thead>
        <th scope="col">Name</th>
        <th scope="col">Graph</th>
      </thead>
      <tbody v-for="coin in coins" :key="coin.id">
        <tr>
          <td
            class="name-coin-button"
            data-toggle="modal"
            data-target="#coin-info-modal"
            @click="sendCoinId(coin.id)"
          >{{coin.name}} ({{coin.symbol}})</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="sendCoinIdToBuildDiagram(coin.id)"
            >
              Build graph
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <CoinInfo />
    <Chart />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import axios from "axios";
import CoinInfo from "./CoinInfo";
import '@fortawesome/fontawesome-free';

export default {
  name: "CoinsList",
  components: {
    CoinInfo
  },
  props: {},
  data() {
    return {
        isDisplayed: false,
    };
  },
  mounted() {
    this.$store.dispatch("loadCoins");
  },
  computed: {
    coins() {
      return this.$store.state.coins;
    }
  },
  methods: {
    sendCoinId(coinId) {
      this.$store.dispatch("loadInfoAboutCoin", coinId);
    },
    sendCoinIdToBuildDiagram(coinId) {
      this.$store.dispatch("loadCoinTicks", coinId);
      alert('График построен на вкладке Chart');
    }
  }
};
</script>