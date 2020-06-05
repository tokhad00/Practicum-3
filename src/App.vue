<template>
  <div id="app">
    <div id="view-container">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/RatesList">Exchange rates</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ExchangesList">Exchanges list</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/CoinsList">Coins list</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Chart">Chart</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Converter">Converter</router-link>
        </li>
      </ul>
    </div>
    <router-view class="router-view" />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import RatesList from "./components/RatesList";
import ExchangesList from "./components/ExchangesList";
import CoinsList from "./components/CoinsList";
import CoinInfo from "./components/CoinInfo";
import Chart from "./components/Chart";
import Converter from "./components/Converter";

export default {
  name: "App",
  components: {
    RatesList,
    ExchangesList,
    CoinsList,
    CoinInfo,
    Chart,
    Converter
  }
};
</script>