const vm = new Vue({
  el: '#app',
  data: {
    numbers: [],
    total_num: 0,
  },
  watch: {
    numbers(value) {
      // this.total_num = 0;
      this.numbers.forEach((number) => {
        this.total_num += number;
      });
    },
  },
});
