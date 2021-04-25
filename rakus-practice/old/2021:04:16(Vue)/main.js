const vm = new Vue({
  el: '#app',
  data: {
    message: '',
  },
  methods: {
    Change(msg) {
      this.message = msg.target.value;
    },
  },
});
