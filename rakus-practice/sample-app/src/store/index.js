import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    addresses: [],
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addAddress(state, { id, address }) {
      address.id = id;
      state.addresses.push(address);
    },
    updateAddress(state, { id, address }) {
      const index = state.addresses.findIndex((address) => address.id === id); // 何番目に保存されている情報なのかを読み取り
      state.addresses[index] = address;
    },
    deleteAddress(state, { id }) {
      const index = state.addresses.findIndex((address) => address.id === id);
      state.addresses.splice(index, 1);
    },
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user);
    },
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
    // toggleSideMenu(context) {
    //   context.commit('toggleSideMenu');
    // },
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu');
    },
    addAddress({ getters, commit }, address) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/addresses`)
          .add(address)
          .then((doc) => {
            commit('addAddress', { id: doc.id, address });
          });
      }
      // addは追加したときにidを発行してくれる
    },
    deleteAddress({ getters, commit }, { id }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/addresses`)
          .doc(id)
          .delete()
          .then(() => {
            commit('deleteAddress', { id });
          });
      }
    },
    fetchAddresses({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/addresses`)
        .get()
        .then((snapshot) => {
          // console.log(snapshot);
          snapshot.forEach((doc) =>
            commit('addAddress', { id: doc.id, address: doc.data() })
          );
        });
    },
    updateAddress({ getters, commit }, { id, address }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/addresses`)
          .doc(id)
          .update(address)
          .then(() => {
            commit('updateAddress', { id, address });
          });
      }
    },
  },
  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ''),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ''),
    uid: (state) => (
      // console.log(state.login_user),
      state.login_user ? state.login_user.uid : null
    ),
    // getAddressById: (state) => {
    //   (id) => {
    //     state.addresses.find((address) => address.id === id);
    //   };
    // }, 上だとエラーになる
    getAddressById: (state) => (id) => {
      state.addresses.find((address) => address.id === id);
    },
    // (state,id)でもいい気がするが、ここはクロージャーというものが働いている。？ Vuex独特のやつと思ってもいい
  },
});
