<template>
  <v-app>
    <v-app-bar fixed color="white" brack>
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title @click="redirectHomeRoot">Rakusten</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="getText"
        @keydown.enter="
          search();
          redirectHomeRoot();
        "
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon @click="redirectFavoRoot">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon @click="redirectCartRoot">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <Navigation />
    <v-main fluid fill-height align-start>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    Navigation,
  },
  data: () => ({
    text: '',
  }),
  methods: {
    redirectHomeRoot() {
      if (this.$route.path !== '/') {
        this.$router.push({ path: '/' });
      }
    },
    redirectFavoRoot() {
      if (this.$route.path !== '/favorite') {
        this.$router.push({ path: '/favorite' });
      }
    },
    redirectCartRoot() {
      if (this.$route.path !== '/cart') {
        this.$router.push({ path: '/cart' });
      }
    },
    ...mapActions(['toggleSideMenu', 'search']),
  },
  computed: {
    getText: {
      get() {
        // 値の取得
        return this.$store.state.text;
      },
      set(value) {
        // 値の変更
        this.$store.dispatch('updateMessage', value);
      },
    },
  },
};
</script>

<style>
.v-main {
  height: 100vh;
}
.v-toolbar__title {
  cursor: pointer;
  padding-left: 0 !important;
  margin-left: 20px;
}

.v-main__wrap {
  padding-top: 100px;
}

.v-application--wrap {
  min-height: auto !important;
}
</style>
