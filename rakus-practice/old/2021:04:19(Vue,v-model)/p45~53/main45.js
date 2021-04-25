const UserDetailChild = {
  template: `
  <div>
    <p>UserDetailの子供です</p>
    <ul>
      <li v-for="joho in userJoho">
        {{ joho.id }} {{ joho.name }} {{ joho.address }}
      </li>
    </ul>
    <div>情報変更フォーム</div>
    <button @click="update">情報変更</button>
    Id<input type="text" v-model="DetailChildId">    
    Name<input type="text" v-model="DetailChildName">    
    Address<input type="text" v-model="DetailChildAddress">    
  </div>
  `,
  props: {
    userInfo: { type: Object },
    userJoho: { type: Array },
  },
  data() {
    return {
      DetailChildId: '',
      DetailChildName: '',
      DetailChildAddress: '',
    };
  },

  methods: {
    update() {
      this.$emit('DetailChildIdEvent', this.DetailChildId);
      this.$emit('DetailChildNameEvent', this.DetailChildName);
      this.$emit('DetailChildAddressEvent', this.DetailChildAddress);
    },
  },
};

const UserDetail = {
  components: {
    'user-detail-child': UserDetailChild,
  },
  template: `
  <div>
  <h2>選択中のユーザー</h2>
  <input v-model="user.name">
  <user-detail-child :user-joho = 'userJoho' :user-info = 'user' @DetailChildIdEvent='DetailIdEvent' @DetailChildNameEvent='DetailNameEvent' @DetailChildAddressEvent='DetailAddressEvent'></user-detail-child>
  </div>`,
  // 3
  props: {
    user: { type: Object },
    userName: { type: String },
    userJoho: { type: Array },
  },
  data() {
    return {
      DetailId: '',
      DetailName: '',
      DetailAddress: '',
    };
  },
  methods: {
    DetailIdEvent(payload) {
      this.DetailId = payload;
      this.$emit('DetailIdEvent', this.DetailId);
    },
    DetailNameEvent(payload) {
      this.DetailName = payload;
      this.$emit('DetailNameEvent', this.DetailName);
    },
    DetailAddressEvent(payload) {
      this.DetailAddress = payload;
      this.$emit('DetailAddressEvent', this.DetailAddress);
    },
  },
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
        { id: 1, name: 'user1', address: '001' },
        { id: 2, name: 'user2', address: '002' },
        { id: 3, name: 'user3', address: '003' },
        { id: 4, name: 'user4', address: '004' },
        { id: 5, name: 'user5', address: '005' },
      ],
      selected_user: {},
    };
  },
  methods: {
    idEvent(payload) {
      this.users[payload.id - 1].id = payload.id;
    },
    nameEvent(payload) {
      this.users[payload.id - 1].name = payload.name;
    },
    addressEvent(payload) {
      this.users[payload.id - 1].address = payload.address;
    },
  },
  template: `
  <div>
    <list-title></list-title>
    <ul>
      <li v-for="user in users" :key="user.id" @click='selected_user = user'>
      {{ user.name }}
      </li>
    </ul>
    <user-detail :user = 'selected_user' :user-name='selected_user.name' :user-joho = 'users' @DetailIdEvent = 'idEvent' @DetailNameEvent = 'nameEvent' @DetailAddressEvent = 'addressEvent'></user-detail>
  </div>`,
};

const vm = new Vue({
  el: '#app',
  components: {
    'user-list': UserList,
  },
});
