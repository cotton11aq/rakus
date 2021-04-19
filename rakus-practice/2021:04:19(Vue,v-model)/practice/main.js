Vue.component('form-template', {
  data() {
    return {
      name: '',
      position: '',
      content: '',
      tasks: [],
    };
  },
  template: `<div><p>名前：<input type="text" v-model="name" /></p>
  <p>部署：<input type="text" v-model="position" /></p>
  <p>作業内容<textarea v-model="content"></textarea></p>
  <button @click="add">送信</button>
  <h2>タスク一覧</h2>
  <ol>
    <li v-for="task in tasks" :class="{border: task.check}">
      <input type="checkbox" v-model="task.check" />{{ task.position }}:{{
      task.name }}:{{ task.content}}
    </li>
  </ol></div>
  `,
  methods: {
    add() {
      if (this.name === '' || this.position === '' || this.content === '')
        return;
      const task = {
        name: this.name,
        position: this.position,
        content: this.content,
        check: false,
      };
      this.tasks.push(task);
      (this.name = ''), (this.position = ''), (this.content = '');
    },
  },
});

const vm = new Vue({
  el: '#app',
});
