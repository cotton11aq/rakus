import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: '',
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
          'https://product.starbucks.co.jp/asset/202104220534-216108/resource/products/images/4524785457607_11_s.jpg',
      },
      {
        id: 0,
        name: 'コーヒー',
        price: {
          m: 'M480',
          l: 'M700',
        },
        url:
          'https://product.starbucks.co.jp/asset/202104220534-216108/resource/products/images/4524785457607_11_s.jpg',
      },
      {
        id: 1,
        name: 'ラテ',
        price: {
          m: 'M480',
          l: 'M700',
        },
        url:
          'https://product.starbucks.co.jp/asset/202104220534-216108/resource/products/images/4524785461314_11_s.jpg',
      },
    ],
  },
  mutations: {
    updateMessage(state, value) {
      state.message = value;
    },
    search(state) {
      state.selectItems = [];
      for (let i in state.items) {
        let item = state.items[i];
        if (state.message === '') {
          return;
        } else if (item.name.indexOf(state.message) !== -1) {
          state.selectItems.push(item);
          // 値が見つからない場合は -1 を返す
        }
      }
    },
  },
  actions: {
    updateMessage(context, value) {
      context.commit('updateMessage', value);
    },
    search(context) {
      context.commit('search');
    },
  },
  modules: {},
});
