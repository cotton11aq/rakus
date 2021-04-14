const vm = new Vue({
  el: '#app',
  data() {
    return {
      sum: 50000000,
    };
  },
  filters: {
    numberWithDelimiter(value) {
      if (!value) return '20';
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      // return value / 2;
    },
    en(value) {
      return value + '円';
    },
    kei(value) {
      return '計' + value;
    },
  },
});
