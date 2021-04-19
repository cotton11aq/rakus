const UserDetail = {
  // 3
  props: {
    user: { type: Object },
    userName: { type: String },
  },
  template: `
  <div>
  <h2>選択中のユーザー</h2>
  <input v-model="user.name">
  </div>`,
};

const ListTitle = {
  // 2
  template: `
  <div>
  <h2>ユーザーリスト</h2>
  </div>`,
};

const UserList = {
  // 1
  components: {
    'list-title': ListTitle,
    'user-detail': UserDetail,
  },
  data() {
    return {
      users: [
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' },
        { id: 3, name: 'user3' },
        { id: 4, name: 'user4' },
        { id: 5, name: 'user5' },
      ],
      selected_user: {},
    };
  },
  template: `
  <div>
    <list-title></list-title>
    <ul>
      <li v-for="user in users" :key="user.id" @click='selected_user = user'>
      {{ user.name }}
      </li>
    </ul>
    <user-detail :user = 'selected_user' :user-name='selected_user.name'></user-detail>
  </div>`,
};

const vm = new Vue({
  el: '#app',
  components: {
    'user-list': UserList,
  },
});
