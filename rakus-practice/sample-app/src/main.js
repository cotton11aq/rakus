import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import '@mdi/font/css/materialdesignicons.css';
Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyDHflahEoAEv8bV-5UK6s9pNN7Nd_flKYw',
  authDomain: 'my-vue-project-b7432.firebaseapp.com',
  projectId: 'my-vue-project-b7432',
  storageBucket: 'my-vue-project-b7432.appspot.com',
  messagingSenderId: '174331979991',
  appId: '1:174331979991:web:459901ff3660fbc12e2892',
  measurementId: 'G-DH1K6BCTST',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
