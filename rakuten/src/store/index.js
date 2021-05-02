import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [],
    text: '',
    favos: [],
    carts: [],
    totalPrice: 0,
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    updateMessage(state, value) {
      state.text = value;
    },
    toggleFavo(state, item) {
      // for (let i = 0; i < state.items.length; i++) {
      //   state.items[i].id = i;
      // }
      console.log(item);
      console.log(state.favos);
      // for (let i = 0; i < state.favos.length; i++) {
      //   if (state.favos[i].title.indexOf(item.title) === -1) {
      //     console.log('hoge');
      //     break;
      //   }
      // }
      if (state.favos.indexOf(item) === -1) {
        console.log(state.items);
        item.flag = true;
        state.favos.push(item);
        // console.log(state.items);
        console.log(state.items);
        console.log(state.favos);
        // console.log(state.favos[0].flag);
      } else {
        state.favos.splice(state.favos.indexOf(item), 1);
        item.flag = false;
        console.log(item.flag);
      }
      // console.log(state.item.flag);
    },
    deleteFavo(state, favo) {
      // if (confirm('削除していいですか？')) {
      state.favos.splice(state.favos.indexOf(favo), 1);
      // }
    },
    deleteCart(state, cart) {
      if (confirm('削除していいですか？')) {
        state.carts.splice(state.carts.indexOf(cart), 1);
        state.totalPrice -= JSON.parse(JSON.stringify(cart)).price;
      }
    },
    addCart(state, item) {
      console.log(state);
      console.log(item);
      if (state.carts.indexOf(item) === -1) {
        state.carts.push(item);
        console.log(item);
        // state.total += ;
        console.log(state.items);
        console.log(state.carts);
        console.log(state.total);
        console.log(JSON.parse(JSON.stringify(item)).price);
        state.totalPrice += JSON.parse(JSON.stringify(item)).price;
        // JSON.parse(JSON.stringify(state.totalPrice.push(item.price)));
        console.log(state.totalPrice);
      } else {
        // state.favos.splice(state.favos.indexOf(item), 1);
        // item.flag = false;
        // console.log(item.flag);
      }
    },
    // onChange(state, val) {
    //   console.log(state.totalPrice);
    //   console.log(val);
    //   console.log(state.totalPrice);
    // },
    search(state, searchItems) {
      state.items = [];
      state.items = searchItems;
      console.log(state.favos);
    },
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu');
    },
    updateMessage(context, value) {
      context.commit('updateMessage', value);
    },
    toggleFavo({ commit }, item) {
      commit('toggleFavo', item);
    },
    deleteFavo({ commit }, favo) {
      commit('deleteFavo', favo);
    },
    deleteCart({ commit }, cart) {
      commit('deleteCart', cart);
    },
    addCart({ commit }, item) {
      commit('addCart', item);
    },
    // onChange({ commit }, val) {
    //   commit('onChange', val);
    // },
    async search({ commit }) {
      const url =
        'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';
      const obj = {
        params: {
          applicationId: '1047285082047680266',
          title: this.state.text,
        },
      };
      let searchItems = [];
      axios.get(url, obj).then((res) => {
        console.log(res.data.Items);
        const items = res.data.Items;
        items.forEach((element) => {
          let searchItem = {
            img: element.Item.largeImageUrl,
            title: element.Item.title,
            price: element.Item.itemPrice,
            url: element.Item.itemUrl,
          };
          // searchItem.img = element.Item.largeImageUrl;
          // searchItem.title = element.Item.title;
          // searchItem.price = element.Item.itemPrice;
          // searchItem.url = element.Item.itemUrl;
          searchItems.push(searchItem);
          // console.log(searchItems);

          // [
          //   { img: '', title: '', price: '' },
          //   { img: '', title: '', price: '' },
          //   { img: '', title: '', price: '' },
          // ];
          // actions内でこの状態にしてからmutationsに渡す
        });
        console.log(JSON.parse(JSON.stringify(searchItems)));
      });
      await commit('search', searchItems);
      // console.log(searchItems);
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getFavos(state) {
      return state.favos;
    },
    getCarts(state) {
      console.log(JSON.parse(JSON.stringify(state.carts)));
      return JSON.parse(JSON.stringify(state.carts));
    },
    getTotalPrice(state) {
      console.log(JSON.parse(JSON.stringify(state.totalPrice)));
      return JSON.parse(JSON.stringify(state.totalPrice));
    },
  },
});
