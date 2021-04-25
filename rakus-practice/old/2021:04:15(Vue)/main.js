const vm = new Vue({
  el: '#app',
  data: {
    message: 'hello',
    flag: true,
    a: 'class1',
    b: 'class2',
    time: '',
  },
  // computed: {
  //   now() {
  //     return new Date().toTimeString();
  //   },
  // },
  methods: {
    Change(msg) {
      this.message = msg.target.value;
    },
    Alert() {
      alert(this.message);
      console.log(this.message);
    },
    log() {
      this.time = new Date().toTimeString();
      console.log(this.now);
      this.time = this.now;
    },
    countUp() {},
  },
});
