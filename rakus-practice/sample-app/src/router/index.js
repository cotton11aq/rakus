import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/addresses',
    name: 'Addresses',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Addresses.vue'),
  },
  {
    path: '/addresses/:address_id?/edit',
    name: 'addresses_edit',
    // component: AddressForm,

    // 上だとエラーになる！！なんでかは分からない

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddressForm.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
