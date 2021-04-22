<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon>
        <v-toolbar-title>アドレス帳</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <SideNav />
    </v-main>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav';

export default {
  name: 'App',
  components: {
    SideNav,
  },

  data: () => ({
    //
  }),
};
</script>
