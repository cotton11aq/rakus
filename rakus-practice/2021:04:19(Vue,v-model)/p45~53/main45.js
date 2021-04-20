const UserDetailChild = {
  props: {
    // joho: { type: Object },
    userId: { type: Number },
    userName: { type: String },
    userAddress: { type: String },
  },

  template: `
  <div>
    <p>UserDetailの子供です</p>
    {{ userId }}
    {{ userName }}
    {{ userAddress }}
  </div>
  `,
};

// 3
const UserDetail = {
  components: {
    'user-detail-child': UserDetailChild,
  },

  props: {
    user: { type: Object },
    userId: { type: Number },
    userName: { type: String },
    userAddress: { type: String },
  },
  template: `
  <div>
  <h2>選択中のユーザー</h2>
  <input v-model="user.name">
  <user-detail-child :user-id = 'userId' :user-name = 'userName' :user-address = 'userAddress'></user-detail-child>
  </div>`,
};

// 2
const ListTitle = {
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
        { id: 1, name: 'user1', address: '001' },
        { id: 2, name: 'user2', address: '002' },
        { id: 3, name: 'user3', address: '003' },
        { id: 4, name: 'user4', address: '004' },
        { id: 5, name: 'user5', address: '005' },
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
    <user-detail :user = 'selected_user' 
    :user-id='selected_user.id' :user-name='selected_user.name' :user-address = 'selected_user.address'></user-detail>
  </div>`,
};

const vm = new Vue({
  el: '#app',
  components: {
    'user-list': UserList,
  },
});
