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
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    updateMessage(state, value) {
      state.text = value;
    },
    addFavo(state, item) {
      if (state.favos === '') {
        state.favos.push(item);
      } else if (state.favos.indexOf(item) !== -1) {
        state.favos.push(item);
        console.log(state.favos);
      }
    },
    search(state, searchItems) {
      state.items = [];
      state.items = searchItems;
      // console.log(this.$route.path);
      // console.log(state.items);
    },
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu');
    },
    updateMessage(context, value) {
      context.commit('updateMessage', value);
    },
    addFavo({ commit }, item) {
      commit('addFavo', item);
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
  },
});
