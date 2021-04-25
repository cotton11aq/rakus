const UserForm = {
  template: `
  <div>
    <div>ユーザー名変更フォーム</div>
    <input v-model='user_name' />
    <button @click='update'>名前変更</button>
  </div>
  `,
  props: {
    userName: { type: String, required: true },
  },
  data() {
    return {
      user_name: this.userName,
    };
  },
  methods: {
    update() {
      this.$emit('change', this.user_name);
    },
  },
};

const UserDetail = {
  components: {
    'user-form': UserForm,
  },
  data() {
    return {
      user_name: 'ヤマダ タロウ',
    };
  },
  template: `
  <div>
    <div><span>ユーザー名： {{ user_name }}</span></div>
    <div>
      <user-form :user-name='user_name' @change='user_name = $event'>
      </user-form>
    </div>
  </div>
  `,
};

const vm = new Vue({
  el: '#app',
  components: {
    'user-detail': UserDetail,
  },
});

// const UserForm = {
//   template: `
//   <div>
//     <div>ユーザー名変更フォーム</div>
//     <input v-model='user_name' />
//     <button @click='update'>名前変更</button>
//   </div>
//   `,
//   props: {
//     userName: { type: String, required: true },
//   },
//   data() {
//     return {
//       user_name: this.userName,
//     };
//   },
//   methods: {
//     update() {
//       this.$emit('change', this.user_name);
//     },
//   },
// };

// const UserDetail = {
//   components: {
//     'user-form': UserForm,
//   },
//   data() {
//     return {
//       user_name: 'ヤマダ タロウ',
//     };
//   },
//   template: `
//   <div>
//     <div><span>ユーザー名： {{ user_name }}</span></div>
//     <div>
//       <user-form :user-name='user_name' @change='user_name = $event'>
//       </user-form>
//     </div>
//   </div>
//   `,
// };

// const vm = new Vue({
//   el: '#app',
//   components: {
//     'user-detail': UserDetail,
//   },
// });
