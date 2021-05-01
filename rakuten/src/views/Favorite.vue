<template>
  <!-- v-appのなかに書かないと謎の余白ができてしまう -->
  <v-app>
    <h2>お気に入りリスト</h2>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
      v-for="(favo, index) in getFavos"
      :key="index"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">{{
            favo.title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ favo.price }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80"
          ><img :src="favo.img" alt=""
        /></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <!-- <v-btn class="ma-2" tile outlined color="success">
          <v-icon left>mdi-pencil</v-icon> Edit
        </v-btn> -->
        <v-btn
          class="ma-2"
          tile
          outlined
          color="error"
          @click="deleteFavo(favo)"
        >
          <v-icon small class="mr-2">mdi-delete</v-icon>
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Favorite',
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(['deleteFavo']),
  },
  computed: {
    ...mapGetters(['getItems', 'getFavos']),
  },
};
</script>

<style scoped>
  h2 {
    text-align: center;
  }
</style>
