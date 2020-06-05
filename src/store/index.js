import axios from "axios";

export default {
    state: {
        rates: [],
        exchanges: [],
        coins: [],
        coinInfo: [],
        coinTicks: [],
        supportedCurrencies: [],
        convertedValue: 0
    },
    mutations: {
        /**
         * @description Заносит в хранилище данные об обменных курсах биткоина
         * @param {Object} state Объект хранилища
         * @param {Object} data Данные, которые подлежат записи в хранилище
         */
        setRates(state, data) {
            state.rates = data;
        },
        /**
         * @description Заносит в хранилище данные о биржах
         * @param {Object} state Объект хранилища
         * @param {Object} data Данные, которые подлежат записи в хранилище
         */
        setExchanges(state, data) {
            state.exchanges = data;
        },
        /**
         * @description Заносит в хранилище данные обо всех криптовалютах
         * @param {Object} state Объект хранилища
         * @param {Object} data Данные, которые подлежат записи в хранилище
         */
        setCoins(state, data) {
            state.coins = data;
        },
        /**
         * @description Заносит в хранилище данные об одной выбранной валюте
         * @param {Object} state Объект хранилища
         * @param {Object} data Данные, которые подлежат записи в хранилище
         */
        setInfoAboutCoin(state, data) {
            state.coinInfo = data;
        },
        /**
         * @description Заносит в хранилище данные об обменных курсах биткоина с внешнего API
         * @param {Object} state Объект хранилища
         * @param {Object} data Данные, которые подлежат записи в хранилище
         */
        setCoinTicks(state, data) {
            state.coinTicks = data;
        },
        /**
         * @description Заносит в хранилище данные о поддерживаемых валютах
         * @param {Object} state Объект хранилища
         * @param {Object} data Данные, которые подлежат записи в хранилище
         */
        setSupportedCurrencies(state, data) {
            state.supportedCurrencies = data;
        },
        /**
         * @description Заносит в хранилище данные о курсе конвертации
         * @param {Object} state Объект хранилища
         * @param {Object} data Данные, которые подлежат записи в хранилище
         */
        setConvertedValue(state, data) {
            state.convertedValue = data;
        }
    },
    actions: {
        /**
         * @description Загружает данные об обменных курсах биткоина с внешнего API
         * @param {Object} ctx Объект контекста, содержащий те же методы и свойства, что и сам экземпляр хранилища
         * @param payload Данные, передаваемые в функцию действия
         * @async
         */
        async loadRates(ctx, payload) {
            const data = (await axios.get('https://api.coingecko.com/api/v3/exchange_rates')).data.rates;
            ctx.commit('setRates', data);
        },
        /**
         * @description Загружает данные о биржах с внешнего API
         * @param {Object} ctx Объект контекста, содержащий те же методы и свойства, что и сам экземпляр хранилища
         * @param payload Данные, передаваемые в функцию действия
         * @async
         */
        async loadExchanges(ctx, payload) {
            const data = (await axios.get('https://api.coingecko.com/api/v3/exchanges')).data;
            ctx.commit('setExchanges', data);
        },
        /**
         * @description Загружает данные обо всех валютах с внешнего API
         * @param {Object} ctx Объект контекста, содержащий те же методы и свойства, что и сам экземпляр хранилища
         * @param payload Данные, передаваемые в функцию действия
         * @async
         */
        async loadCoins(ctx, payload) {
            const data = (await axios.get('https://api.coingecko.com/api/v3/coins/list')).data.slice(0, 50);
            ctx.commit('setCoins', data);
        },
        /**
         * @description Загружает данные о конкретной валюте с внешнего API
         * @param {Object} ctx Объект контекста, содержащий те же методы и свойства, что и сам экземпляр хранилища
         * @param payload Данные, передаваемые в функцию действия
         * @async
         */
        async loadInfoAboutCoin(ctx, payload) {
            const data = (await axios.get(`https://api.coingecko.com/api/v3/coins/${payload}?localization=false`)).data;
            ctx.commit('setInfoAboutCoin', data);
        },
        /**
         * @description Загружает данные о тиках валюты с внешнего API
         * @param {Object} ctx Объект контекста, содержащий те же методы и свойства, что и сам экземпляр хранилища
         * @param payload Данные, передаваемые в функцию действия
         * @async
         */
        async loadCoinTicks(ctx, payload) {
            const data = (await axios.get(`https://api.coingecko.com/api/v3/coins/${payload}/market_chart?vs_currency=btc&days=1000`)).data.prices;
            ctx.commit('setCoinTicks', data);
        },
        /**
         * @description Загружает данные о поддерживаемых валютах с внешнего API
         * @param {Object} ctx Объект контекста, содержащий те же методы и свойства, что и сам экземпляр хранилища
         * @param payload Данные, передаваемые в функцию действия
         * @async
         */
        async loadSupportedCurrencies(ctx, payload) {
            const data = (await axios.get(`https://api.coingecko.com/api/v3/simple/supported_vs_currencies`)).data;
            ctx.commit('setSupportedCurrencies', data);
        },
        /**
         * @description Загружает данные о курсе конвертации с внешнего API
         * @param {Object} ctx Объект контекста, содержащий те же методы и свойства, что и сам экземпляр хранилища
         * @param {string} from Название валюты, из которой происходит конвертация
         * @param {string} to Название валюты, в которую происходит конвертация
         * @async
         */
        async loadConvertedValue(ctx, from, to) {
            const data = (await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${from}&vs_currencies=${to}`)).data;
            ctx.commit('setSupportedCurrencies', data);
        }
    }
}