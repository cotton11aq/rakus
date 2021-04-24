<template>
  <div>
    <form action="" @submit.prevent="search">
      <h2>商品を検索する</h2>
      <input type="text" placeholder="商品検索" v-model="message" />
      <button type="submit">検索</button>
      <!-- <p>ストア内のメッセージ：{{ $store.state.selectItems }}</p> -->
    </form>
  </div>
</template>
<script>
// import { mapState } from 'vuex';
export default {
  name: 'Form',
  computed: {
    message: {
      get() {
        // 値の取得
        return this.$store.state.message;
      },
      set(value) {
        // 値の変更
        this.$store.dispatch('updateMessage', value);
      },
    },
  },
  methods: {
    search() {
      this.$store.dispatch('search');
    },
  },
};
</script>

<style scoped></style>
