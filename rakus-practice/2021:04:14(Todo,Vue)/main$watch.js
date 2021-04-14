const vm = new Vue({
  el: '#app',
  data: {
    message: '変更前',
  },
});

vm.$watch(
  function () {
    return this.message;
  },
  function (message) {
    console.log(`変更後の値です` + message);
  }
);
