<template>
  <ul>
    <li v-for="(item, index) in selectItems" :key="index">
      <v-card class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-img height="250" :src="item.url"></v-img>
        <v-card-title> {{ item.name }}</v-card-title>
        <v-card-text>
          <div class="my-4 subtitle-1">
            {{ item.price.m }}&nbsp;&nbsp;{{ item.price.l }}
          </div>
          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
      </v-card>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Card',
  computed: {
    items() {
      return this.$store.state.items;
    },
    selectItems() {
      return this.$store.state.selectItems;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  padding: 20px;
  list-style: none;
}
</style>
