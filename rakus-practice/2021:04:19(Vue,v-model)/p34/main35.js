const vm = new Vue({
  el: '#app',
  data() {
    return {
      message: 'こんにちは',
      interval_id: null,
    };
  },
  beforeCreate() {
    console.log('Vueインスタンス作成前');
  },
  created() {
    console.log('Vueインスタンス作成後');
  },
  beforeMount() {
    console.log('マウント前');
    let seconds = 1;
    this.interval_id = setInterval(() => {
      console.log(`${seconds++}秒`);
    }, 1000);
  },
  mounted() {
    console.log('マウント後');
    setTimeout(() => {
      clearInterval(this.interval_id);
    }, 1997);
  },

  beforeUpdate() {
    console.log('再描画前');
  },
  updated() {
    console.log('再描画後');
    // this.message = 'hoge'
  },
  beforeDestroy() {
    console.log('Vueインスタンス削除前');
  },
  destroyed() {
    console.log('Vueインスタンス削除後');
  },
});
