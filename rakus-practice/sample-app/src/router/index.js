import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Addresses from '../views/Addresses.vue';
import AddressForm from '../views/AddressForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Addresses',
    name: 'Addresses',
    component: Addresses,
  },
  // {
  //   path: '/About',
  //   name: 'About',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  // {
  //   path: '/addresses',
  //   name: 'Addresses',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/Addresses.vue'),
  // },
  {
    path: '/Addresses/:address_id?/edit',
    name: 'address_edit',
    component: AddressForm,

    // 上だとエラーになる！！なんでかは分からない
    // なぜなら、importしていなかったから！！

    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/AddressForm.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
