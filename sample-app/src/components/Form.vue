<template>
  <div>
    <form action="" @submit.prevent="search">
      <h2>商品を検索する</h2>
      <input type="text" placeholder="商品検索" ref="comment" />
      <button type="submit">検索</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style scoped></style>
