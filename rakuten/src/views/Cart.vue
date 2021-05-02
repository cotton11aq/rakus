<template>
  <!-- v-appのなかに書かないと謎の余白ができてしまう -->
  <v-app>
    <h2>ショッピングカート</h2>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
      v-for="(cart, index) in getCarts"
      :key="index"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">{{
            cart.title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{
            cart.price.toLocaleString()
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80"
          ><img :src="cart.img" alt=""
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
          @click="deleteCart(cart)"
        >
          <v-icon small class="mr-2">mdi-delete</v-icon>
          Delete
        </v-btn>

        <!-- <v-col class="d-flex" cols="12" sm="6"> -->
        <!-- <v-select
            :items="items"
            label="数量"
            item-value="value"
            item-text="label"
            outlined
            return-object
            v-model="count"
            value
          >
          </v-select> -->
        <!-- </v-col> -->
        <!-- <select name="" id="" v-model="onChange">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select> -->
        <div></div>
      </v-card-actions>
    </v-card>
    {{ getTotalPrice.toLocaleString() }}
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Favorite',
  components: {},
  data() {
    return {
      // init: { label: 1, value: 1 },
      // // items: [1, 2, 3, 4],
      // items: [
      //   { label: 1, value: 1 },
      //   { label: 2, value: 2 },
      //   { label: 3, value: 3 },
      //   { label: 4, value: 4 },
      // ],
      // count: '',
    };
  },
  methods: {
    // onChange(val) {
    //   console.log(val.target.value);
    // },
    ...mapActions(['deleteFavo', 'deleteCart', 'onChange']),
  },
  computed: {
    // onChange: {
    //   get() {
    //     return this.$store.state.onChange;
    //   },
    //   set(val) {
    //     this.$store.dispatch('onChange', val);
    //   },
    // },
    ...mapGetters(['getItems', 'getFavos', 'getCarts', 'getTotalPrice']),
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.count {
  text-align: center;
}

select {
  width: 100px;
  border: 1px solid #000;
}
</style>
