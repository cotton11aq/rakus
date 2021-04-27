<template>
  <v-app>
    <h1>チュートリアルToDoリスト</h1>
    <v-data-table
      :headers="this.$store.state.headers"
      :items="this.$store.state.todos"
    >
      <!-- <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.comment }}</td>
        <td class="text-xs-left">{{ props.item.itemState }}</td>
      </template> -->
    </v-data-table>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            コメント<v-text-field
              label="Outlined"
              outlined
              v-model="todos.comment"
            ></v-text-field>
            <v-btn small @click="addClick">追加する</v-btn>
            {{ $data }}
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-main>
      <!-- <HelloWorld /> -->
    </v-main>
  </v-app>
</template>
<script>
// import HelloWorld from './components/HelloWorld';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },
  data() {
    return {
      // comment: '',
      todos: {
        ID: '0',
        comment: '',
        itemState: 0,
      },
      // todos: [
      //   {
      //     id: '1',
      //     comment: 'wataru',
      //     itemState: 0,
      //   },
      //   {
      //     id: '2',
      //     comment: 'tamura',
      //     itemState: 0,
      //   },
      // ],
    };
  },
  methods: {
    addClick(item) {
      console.log(item);
      // let selected = this.todos.indexOf(item);
      // this.todos.ID = selected;
      this.addTodo(this.todos);
      this.todos = {};
    },
    ...mapActions(['addTodo']),
  },
};
</script>
