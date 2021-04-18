// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo';
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    todos.forEach(function (todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

const app = new Vue({
  el: '#app',
  data: {
    // 使用するデータ
    items: [
      { id: 1, comment: 'hoge', state: 0 },
      { id: 2, comment: 'fuga', state: 0 },
    ],
    message: 'hoge',
  },
  methods: {
    // 使用するメソッド
  },
});
