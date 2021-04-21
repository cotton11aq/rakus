<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Form /> -->
    <Item />
    <!-- <Data /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import Form from '@/components/Form.vue';
import Item from '@/components/Item.vue';
// import Data from '@/components/Data.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // Form,
    Item,
    // Data,
  },
};
</script>
