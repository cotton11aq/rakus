import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import firebase from 'firebase';

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [],
    text: '',
    favos: [],
    carts: [],
    totalPrice: 0,
    login_user: null,
    storeItems: [
      {
        id: 1,
        title: '水出しアイスコーヒー',
        price: 1000,
        img:
          'https://www.tullys.co.jp/menu/uploads/%E6%B0%B4%E5%87%BA%E3%81%97Ice%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC20170322%EF%BD%9E.jpg',
        text:
          'カフェインレスコーヒーです。ご注文をいただいてから抽出し、淹れたてをご提供させていただきます。',
        item: 5,
      },
      {
        id: 2,
        title: 'モカマキアート',
        price: 2000,
        img: 'https://www.tullys.co.jp/menu/uploads/mocha_macchiato_210107.jpg',
        text:
          'カフェインレスコーヒーです。ご注文をいただいてから抽出し、淹れたてをご提供させていただきます。',
        item: 10,
      },
      {
        id: 3,
        title: 'アイスコーヒー',
        price: 3000,
        img: 'https://www.tullys.co.jp/menu/uploads/01.jpg',
        text:
          'カフェインレスコーヒーです。ご注文をいただいてから抽出し、淹れたてをご提供させていただきます。',
        item: 15,
      },
      {
        id: 4,
        title: 'オーガニックデカフェ コーヒー',
        price: 4000,
        img: 'https://www.tullys.co.jp/menu/uploads/organic_decaf_191121.jpg',
        text:
          'カフェインレスコーヒーです。ご注文をいただいてから抽出し、淹れたてをご提供させていただきます。',
        item: 20,
      },
    ],
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
    deleteCart(state, id) {
      console.log(id);
      console.log(state.carts);

      const index = JSON.parse(JSON.stringify(state.carts)).findIndex(
        (cart) => cart.id === id
      );
      state.carts.splice(index, 1);

      // state.carts.splice(state.carts.indexOf(cart), 1);
      // state.totalPrice -= JSON.parse(JSON.stringify(cart)).price;
      console.log(index);
      console.log(id);
      console.log(JSON.parse(JSON.stringify(state.carts)));
    },
    addCart(state, item) {
      // console.log(state);
      // console.log(item);
      if (state.carts.indexOf(item) === -1) {
        state.carts.push(item);
        // console.log(item);
        // state.total += ;
        // console.log(state.items);
        // console.log(state.carts);
        // console.log(JSON.parse(JSON.stringify(item)).item.price);
        state.totalPrice += JSON.parse(JSON.stringify(item)).item.price;
        // JSON.parse(JSON.stringify(state.totalPrice.push(item.price)));
        // console.log(state.totalPrice);
        console.log(JSON.parse(JSON.stringify(state.carts)));
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
    setLoginUser(state, user) {
      state.login_user = user;
      console.log(state.login_user);
      console.log(state.login_user.uid);
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    shop(state, carts) {
      console.log(state);
      console.log(carts);
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
    deleteCart({ getters, commit }, id) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/carts`)
          .doc(id)
          .delete()
          .then(() => {
            commit('deleteCart', id);
          });
      }
      console.log(id);
      // commit('deleteCart', cart);
    },
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user);
    },
    addCart({ getters, commit }, item) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/carts`)
          .add(item)
          .then((doc) => {
            commit('addCart', { id: doc.id, item });
          });
        console.log(item);
      }
    },
    shop({ commit }, carts) {
      commit('shop', carts);
    },
    // onChange({ commit }, val) {
    //   commit('onChange', val);
    // },
    search({ commit }) {
      commit('search');
      // console.log(searchItems);
    },
    // async search({ commit }) {
    //   const url =
    //     'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';
    //   const obj = {
    //     params: {
    //       applicationId: '1047285082047680266',
    //       title: this.state.text,
    //     },
    //   };
    //   let searchItems = [];
    //   axios.get(url, obj).then((res) => {
    //     console.log(res.data.Items);
    //     const items = res.data.Items;
    //     items.forEach((element) => {
    //       let searchItem = {
    //         img: element.Item.largeImageUrl,
    //         title: element.Item.title,
    //         price: element.Item.itemPrice,
    //         url: element.Item.itemUrl,
    //       };
    //       // searchItem.img = element.Item.largeImageUrl;
    //       // searchItem.title = element.Item.title;
    //       // searchItem.price = element.Item.itemPrice;
    //       // searchItem.url = element.Item.itemUrl;
    //       searchItems.push(searchItem);
    //       // console.log(searchItems);

    //       // [
    //       //   { img: '', title: '', price: '' },
    //       //   { img: '', title: '', price: '' },
    //       //   { img: '', title: '', price: '' },
    //       // ];
    //       // actions内でこの状態にしてからmutationsに渡す
    //     });
    //     console.log(JSON.parse(JSON.stringify(searchItems)));
    //   });
    //   await commit('search', searchItems);
    //   // console.log(searchItems);
    // },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    logout() {
      firebase.auth().signOut();
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser');
    },
    fetchCarts({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/carts`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) =>
            commit('addCart', { id: doc.id, item: doc.data() })
          );
        });
    },
  },
  getters: {
    getItems(state) {
      return state.storeItems;
    },
    getFavos(state) {
      return state.favos;
    },
    getCarts(state) {
      console.log(JSON.parse(JSON.stringify(state.carts)));
      return JSON.parse(JSON.stringify(state.carts));
    },
    getTotalPrice(state) {
      // console.log(JSON.parse(JSON.stringify(state.totalPrice)));
      console.log(state.totalPrice);
      return JSON.parse(JSON.stringify(state.totalPrice));
    },
    userName: (state) => (state.login_user ? state.login_user.displayName : ''),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ''),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
    getCartById: (state) => (id) =>
      JSON.parse(JSON.stringify(state.carts)).find((item) => item.id === id),
  },
});
