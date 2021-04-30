<template>
  <v-sheet height="100%">
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://picsum.photos/200"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item-icon>
      </v-list-item>

      <v-list dense>
        <!-- <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  name: 'Navigation',

  data: () => ({
    items: [
      { title: 'ホーム', icon: 'mdi-home', link: { name: 'Home' } },
      { title: 'お気に入り', icon: 'mdi-heart', link: { name: 'Favorite' } },
    ],
  }),
};
</script>
