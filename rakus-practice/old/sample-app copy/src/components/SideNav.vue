<template>
  <div fluid fill-height>
    <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://picsum.photos/200" alt="" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>鈴木アキ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
// import { mapActions } from 'vuex';

export default {
  data() {
    return {
      // drawer: false,
      // items: [{ title: '連絡先一覧', icon: 'mdi-menu' }],
      items: [
        { title: 'ホーム', icon: 'mdi-home', link: { name: 'Home' } },
        { title: '連絡先一覧', icon: 'mdi-menu', link: { name: 'Addresses' } },
      ],
    };
  },
  // methods: {
  //   ...mapActions(['toggleSideMenu']),
  // },
};
</script>
