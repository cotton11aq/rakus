<template>
  <div class="home">
    <Form />
    <CardList />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue';
import CardList from '@/components/CardList.vue';

export default {
  name: 'Search',
  components: {
    Form,
    CardList,
  },
};
</script>
