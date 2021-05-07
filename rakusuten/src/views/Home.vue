<template>
  <v-app>
    <ul>
      <li v-for="(item, index) in getItems" :key="index">
        <router-link
          :to="{
            name: 'Detail',
            params: {
              id: item.id,
              title: item.title,
              price: item.price,
              img: item.img,
              text: item.text,
            },
          }"
        >
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <!-- <v-list-item-avatar color="grey"></v-list-item-avatar> -->
              <v-list-item-content>
                <v-list-item-title class="headline">
                  {{ item.title }}</v-list-item-title
                >
                <v-list-item-subtitle
                  >{{ item.price.toLocaleString() }}円</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-img :src="item.img" height="194"></v-img>
            <v-card-actions>
              <v-card-text>
                {{ item.text }}
              </v-card-text>
              <!-- <v-btn text color="deep-purple accent-4"> Bookmark </v-btn> -->
              <v-spacer></v-spacer>
            </v-card-actions>
            <v-card-actions>
              <v-card-text> 残り{{ item.item }}個 </v-card-text>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </router-link>
      </li>
    </ul>
  </v-app>
  <!-- <hello-world /> -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['getItems'], ['getFavos']),
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
</style>
