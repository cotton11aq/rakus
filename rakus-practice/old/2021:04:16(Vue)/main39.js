Vue.component('top', {
  data() {
    return {
      user: 'top',
    };
  },
  template: `
  <div>
  {{user}}
  </div>
  `,
});

Vue.component('middle', {
  data() {
    return {
      user: 'middle',
    };
  },
  template: `
  <div>
  {{user}}
  </div>
  `,
});

Vue.component('bottom', {
  data() {
    return {
      user: 'bottom',
    };
  },
  template: `
  <div>
  {{user}}
  </div>
  `,
});

const vm = new Vue({
  el: '#app',
});
