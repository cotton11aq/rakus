Vue.component('button-counter', {
  data() {
    return {
      count: 0,
    };
  },
  template: `<div><button @click="count++">click</button><p>{{ count }}</p></div>`,
});

const vm = new Vue({
  el: '#app',
});
