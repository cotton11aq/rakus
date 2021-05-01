<template>
  <v-app>
    <ul>
      <li v-for="(item, index) in getItems" :key="index">
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
            <!-- <v-list-item-avatar color="grey"></v-list-item-avatar> -->
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ item.title }}</v-list-item-title
              >
              <v-list-item-subtitle>{{ item.price.toLocaleString() }}円</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-img :src="item.img" height="194"></v-img>
          <v-card-actions>
            <v-btn text color=" accent-4"
              ><a :href="item.url" target="_blank"> 購入する </a>
            </v-btn>
            <!-- <v-btn text color="deep-purple accent-4"> Bookmark </v-btn> -->
            <v-spacer></v-spacer>
            <v-btn icon @click="toggleFavo(item)">
              <v-icon
                :class="{
                  addFavo:
                    $store.state.favos.indexOf(item) === -1 ? false : true,
                }"
                >mdi-heart</v-icon
              >
              <!-- ここのindexは、itemsのindexであって、favosのindexではない！ -->
              <!-- <v-icon class="addFavo">mdi-heart</v-icon> -->
            </v-btn>
            <v-btn icon>
              <v-icon @click="addCart(item)">mdi-cart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </li>
    </ul>
  </v-app>
  <!-- <hello-world /> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  computed: {
    ...mapGetters(['getItems'], ['getFavos']),
  },
  methods: {
    ...mapActions(['toggleFavo', 'addCart']),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  padding: 20px;
}

.addFavo {
  color: red !important;
}
</style>
