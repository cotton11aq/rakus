<template>
  <div>
    <form action="" @submit.prevent="search">
      <h2>商品を検索する</h2>
      <input type="text" placeholder="商品検索" v-model="message" />
      <button type="submit">検索</button>
    </form>
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
          <!-- <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img> -->
          <v-card-title> {{ item.name }}</v-card-title>
          <v-card-text>
            <div class="my-4 subtitle-1">
              {{ item.price.m }}{{ item.price.l }}
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
  </div>
</template>
<script>
// import Data from '@/components/Data.vue';
export default {
  name: 'Item',
  // pomponents: {
  //   Data,
  // },
  computed: {
    items() {
      return this.$store.state.items;
    },
    comment() {
      return this.$store.state.comment;
    },
    selectItems() {
      return this.$store.state.selectItems;
    },
    message: {
      get() {
        return this.$store.state.comment;
      },
      set(value) {
        this.$store.commit('updateMessage', value);
      },
    },
  },
  // data() {
  // return {
  // comment: '',
  // selectItems: [],
  // items: [
  //   {
  //     id: 0,
  //     name: 'コーヒー ティラミス フラペチーノ',
  //     price: {
  //       m: 'M480',
  //       l: 'M700',
  //     },
  //     url:
  //       'https://product.starbucks.co.jp/asset/202104211014-00c398/resource/products/images/4524785457607_1_l.jpg?ver=20210421',
  //   },
  //   {
  //     id: 1,
  //     name: 'クレーム ブリュレ ラテ',
  //     price: {
  //       m: 'M480',
  //       l: 'M700',
  //     },
  //     url:
  //       'https://product.starbucks.co.jp/asset/202104211014-00c398/resource/products/images/4524785461314_1_l.jpg?ver=20210421',
  //   },
  // ],
  // };
  // },
  methods: {
    search() {
      this.$store.commit('search');
    },
    // search() {
    //   // this.selectItems = [];
    //   // let comment = this.$refs.comment.value;
    //   for (let i = 0; i < this.items.length; i++) {
    //     if (comment === this.items[i].name) {
    //       this.selectItems.push(this.items[i]);
    //     }
    //   }
    // },
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
