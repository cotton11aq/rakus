const vm = new Vue({
  el: '#app',
  data: {
    items: [],
    message: '',
  },
  methods: {
    add() {
      let hoge = {
        flag: false,
        message: this.message,
      };
      if (this.message === '') {
        return;
      }
      this.items.push(hoge);
      this.message = '';
    },
    delate(index) {
      this.items.splice(index, 1);
    },
  },
});
