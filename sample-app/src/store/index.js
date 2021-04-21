import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comment: '',
    selectItems: [],
    items: [
      {
        id: 0,
        name: 'コーヒー',
        price: {
          m: 'M480',
          l: 'M700',
        },
        url:
          'https://product.starbucks.co.jp/asset/202104211014-00c398/resource/products/images/4524785457607_1_l.jpg?ver=20210421',
      },
      {
        id: 0,
        name: 'コーヒー',
        price: {
          m: 'M480',
          l: 'M700',
        },
        url:
          'https://product.starbucks.co.jp/asset/202104211014-00c398/resource/products/images/4524785457607_1_l.jpg?ver=20210421',
      },
      {
        id: 1,
        name: 'ラテ',
        price: {
          m: 'M480',
          l: 'M700',
        },
        url:
          'https://product.starbucks.co.jp/asset/202104211014-00c398/resource/products/images/4524785461314_1_l.jpg?ver=20210421',
      },
    ],
  },
  mutations: {
    updateMessage(state, message) {
      state.comment = message;
    },
    search(state) {
      state.selectItems = [];
      for (let i = 0; i < state.items.length; i++) {
        if (state.comment === state.item[i].name) {
          state.selectItems.push(state.items[i]);
        }
      }
    },
  },
  actions: {},
  modules: {},
});
