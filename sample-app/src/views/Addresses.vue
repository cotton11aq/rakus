<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>連絡先一覧</h1>
      </v-flex>
      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{ name: 'Address_edit' }">
          <v-btn color="info">
            <!-- <v-btn color="info" @click="$router.push({ name: 'Address_edit' })"> こっちでもいい-->
            連絡先追加
          </v-btn>
        </router-link>
      </v-flex>
      <v-flex x12 mt-5 justify-center>
        <v-data-table :headers="headers" :items="addresses">
          <template v-slot:[`item.action`]="{ item }">
            <router-link
              :to="{ name: 'Address_edit', params: { address_id: item.id } }"
            >
              <!-- address_idはここで取得してurlに映し出す -->
              <v-icon small class="mr-2">mdi-pencil</v-icon>
            </router-link>
            <v-icon small class="mr-2" @click="deleteConfirm(item.id)"
              >mdi-delete</v-icon
            >
            <!-- <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.tel }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ props.item.address }}</td> -->
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      headers: [
        { text: '名前', value: 'name' },
        { text: '電話番号', value: 'tel' },
        { text: 'メールアドレス', value: 'email' },
        { text: '住所', value: 'address' },
        { text: '操作', value: 'action' },
      ],
      addresses: [
        // {
        //   name: '友人1',
        //   tel: '090-0000-1111',
        //   email: 'sample1@mail.com',
        //   address: '東京都渋谷区',
        // },
        // {
        //   name: '友人2',
        //   tel: '090-2222-3333',
        //   email: 'sample2@mail.ecom',
        //   address: '東京都品川区',
        // },
      ],
    };
  },
  created() {
    this.addresses = this.$store.state.addresses;
  },
  methods: {
    deleteConfirm(id) {
      if (confirm('削除してよろしいですか？')) {
        this.deleteAddress({ id });
      }
    },
    ...mapActions(['deleteAddress']),
    // mapActoinsはmethodsの中に書くこと！
    // methodsの外に書いていたからずっと発動しなかった。
  },
};
</script>

<style scoped lang="scss"></style>
