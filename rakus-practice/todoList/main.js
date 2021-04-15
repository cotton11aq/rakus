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
      return this.todos.filter((el) => {
        return this.current < 0 ? true : this.current === el.state;
      }, this);
    },
    labels() {
      return this.options.reduce((a, b) => {
        return Object.assign(a, { [b.value]: b.label });
      }, {});
    },
  },
  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos);
      },
      deep: true,
    },
  },
  created() {
    // インスタンス作成時に自動的に fetch() する
    this.todos = todoStorage.fetch();
  },
  methods: {
    doAdd() {
      let comment = this.$refs.comment;
      if (!comment.value.length) {
        return;
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0,
      });
      comment.value = '';
    },
    doChangeState(item) {
      item.state = item.state ? 0 : 1;
    },
    doRemove(item) {
      let index = this.todos.indexOf(item);
      this.todos.splice(index, 1);
    },
  },
});
