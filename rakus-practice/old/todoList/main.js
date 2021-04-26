let STORAGE_KEY = 'todos-vuejs-demo';
let todoStorage = {
  fetch() {
    let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    todos.forEach(function (todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

const vm = new Vue({
  el: '#app',
  data() {
    return {
      todos: [],
      options: [
        { value: -1, label: 'すべて' },
        { value: 0, label: '作業中' },
        { value: 1, label: '完了' },
      ],
      current: -1,
    };
  },
  computed: {
    computedTodos() {
      return this.todos.filter((todo) => {
        return this.current < 0 ? true : this.current === todo.state;
      });
    },
    labels() {
      return this.options.reduce((a, b) => {
        return Object.assign(a, { [b.value]: b.label });
      }, {});
    },
  },
  created() {
    this.todos = todoStorage.fetch();
  },

  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos);
      },
      deep: true,
    },
  },
  methods: {
    add(event, value) {
      let comment = this.$refs.comment;
      let item = {
        id: todoStorage.uid++,
        // ++にしないと最初に取得したuidが毎回表示される
        message: comment.value,
        state: 0,
      };
      if (!comment.value.length) {
        return;
      }
      this.todos.push(item);
      comment.value = '';
    },
    delate(item) {
      let index = this.todos.indexOf(item);
      // todosのなかで最初にitemが出てきた番号
      this.todos.splice(index, 1);
    },
    changeState(item) {
      console.log(item.state);
      // if (item.state === '作業中') {
      //   item.state = '完了';
      //   !item.state;
      // } else {
      //   item.state = '作業中';
      //   !item.state;
      // }
      item.state = item.state ? 0 : 1;
    },
  },
});

// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       todos: [],
//       options: [
//         { value: -1, label: 'すべて' },
//         { value: 0, label: '作業中' },
//         { value: 1, label: '完了' },
//       ],
//       current: -1,
//     };
//   },
//   computed: {
//     computedTodos() {
//       return this.todos.filter((el) => {
//         return this.current < 0 ? true : this.current === el.state;
//       }, this);
//     },
//     labels() {
//       return this.options.reduce((a, b) => {
//         return Object.assign(a, { [b.value]: b.label });
//       }, {});
//     },
//   },
//   watch: {
//     todos: {
//       handler(todos) {
//         todoStorage.save(todos);
//       },
//       deep: true,
//     },
//   },
//   created() {
//     // インスタンス作成時に自動的に fetch() する
//     this.todos = todoStorage.fetch();
//   },
//   methods: {
//     doAdd() {
//       let comment = this.$refs.comment;
//       if (!comment.value.length) {
//         return;
//       }
//       this.todos.push({
//         id: todoStorage.uid++,
//         comment: comment.value,
//         state: 0,
//       });
//       comment.value = '';
//     },
//     doChangeState(item) {
//       item.state = item.state ? 0 : 1;
//     },
//     doRemove(item) {
//       let index = this.todos.indexOf(item);
//       this.todos.splice(index, 1);
//     },
//   },
// });
