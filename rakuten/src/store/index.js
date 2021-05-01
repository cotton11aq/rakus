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
      }
    },
    addCart(state, item) {
      console.log(state);
      console.log(item);
      if (state.carts.indexOf(item) === -1) {
        state.carts.push(item);
        console.log(state.items);
        console.log(state.carts);
      } else {
        // state.favos.splice(state.favos.indexOf(item), 1);
        // item.flag = false;
        // console.log(item.flag);
      }
    },
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
            price: element.Item.title,
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
        // console.log(searchItems);
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
      return state.carts;
    },
  },
});
