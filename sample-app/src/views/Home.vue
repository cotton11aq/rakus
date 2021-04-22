<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Form /> -->
    <Form />
    <CardList />
    <!-- <Data /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue';
import CardList from '@/components/CardList.vue';

export default {
  name: 'Home',
  components: {
    Form,
    CardList,
  },
};
</script>
