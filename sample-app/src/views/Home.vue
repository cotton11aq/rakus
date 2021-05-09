<template>
  <!-- <div class="home"> -->
  <!-- <Addresses /> -->

  <!-- </div> -->
  <v-container>
    <v-layout>
      <v-flex xs12 mt-5 v-if="$store.state.login_user === null">
        <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import Addresses from '@/components/Addresses.vue';

import { mapActions } from 'vuex';

export default {
  name: 'Home',
  // components: {
  //   Addresses,
  // },
  methods: {
    ...mapActions(['login']),
  },
};
</script>
