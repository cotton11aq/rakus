<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- <v-main> -->
    <SideNav />
    <!-- </v-main> -->
    <v-main>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav';
import { mapActions } from 'vuex';
import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    SideNav,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        this.fetchAddresses(user);
        if (this.$router.currentRoute.name === 'Home') {
          this.$router.push({ name: 'Addresses' }, () => {});
        }
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: 'Home' }, () => {});
      }
    });
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions([
      'toggleSideMenu',
      'setLoginUser',
      'logout',
      'deleteLoginUser',
      'fetchAddresses',
    ]),
  },
};
</script>
