const vm = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: [],
  },
  methods: {
    add() {
      const todo = {
        id: '',
        item: this.newItem,
        flag: false,
      };
      if (todo.item === '') return;
      this.todos.push(todo);
      this.newItem = '';
    },
    delate() {
      
    },
  },
});
