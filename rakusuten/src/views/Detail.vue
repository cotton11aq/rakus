<template>
  <v-app>
    <v-card max-width="344" class="mx-auto">
      <v-list-item>
        <!-- <v-list-item-avatar color="grey"></v-list-item-avatar> -->
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ $route.params.title }}
          </v-list-item-title>
          <v-list-item-subtitle
            >{{
              $route.params.price.toLocaleString()
            }}円</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-img :src="$route.params.img" height="194"></v-img>

      <v-card-text>
        {{ $route.params.text }}
      </v-card-text>

      <v-card-actions>
        <v-btn text color="deep-purple accent-4"> Read </v-btn>
        <v-btn text color="deep-purple accent-4"> Bookmark </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="toggleFavo($route.params)">
          <v-icon
            :class="{
              addFavo:
                $store.state.favos.indexOf($route.params) === -1 ? false : true,
            }"
            >mdi-heart</v-icon
          >
          <!-- ここのindexは、itemsのindexであって、favosのindexではない！ -->
          <!-- <v-icon class="addFavo">mdi-heart</v-icon> -->
        </v-btn>
        <v-btn icon @click="addCart($route.params)">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
// import DetailCard from '../components/DetailCard';
import { mapActions } from 'vuex';

export default {
  name: 'Detail',
  data: () => ({}),
  methods: {
    ...mapActions(['toggleFavo', 'addCart']),
  },
};
</script>
<style scoped>
.addFavo {
  color: red !important;
}
</style>
