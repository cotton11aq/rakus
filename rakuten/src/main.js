import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import firebase from 'firebase';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyAweRpYNlcnqZYKUF_rMjmJvOL7qPfWaG4',
  authDomain: 'rakusuten-2af9f.firebaseapp.com',
  projectId: 'rakusuten-2af9f',
  storageBucket: 'rakusuten-2af9f.appspot.com',
  messagingSenderId: '809694762706',
  appId: '1:809694762706:web:49cc4f1e4efc8d1f593f0b',
  measurementId: 'G-058Z37XV3T',
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
