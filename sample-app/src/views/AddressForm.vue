<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>連絡先編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="address.name" label="名前"></v-text-field>
              <v-text-field
                v-model="address.tel"
                label="電話番号"
              ></v-text-field>
              <v-text-field
                v-model="address.email"
                label="メールアドレス"
              ></v-text-field>
              <v-text-field
                v-model="address.address"
                label="住所"
              ></v-text-field>
              <div class="text-center">
                <v-btn @click="$router.push({ name: 'Addresses' })"
                  >キャンセル</v-btn
                >
                <v-btn color="info" class="ml-2" @click="submit">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
// import { mapActions } from 'vuex';

export default {
  created() {
    const address = this.$store.getters.getAddressById(
      this.$route.params.address_id //
    );
    if (address) {
      this.address = address;
    }
    // this.$store.getters.hoge();
    // const hoge = this.$store.getters.getAddressById();
    // console.log(hoge);
  },
  data() {
    return {
      address: {},
    };
  },
  methods: {
    submit() {
      if (this.$route.params.address_id) {
        this.updateAddress({
          id: this.$route.params.address_id,
          address: this.address,
        });
        console.log(this.$route.params.address_id);
      } else {
        this.addAddress(this.address);
      }
      this.$router.push({ name: 'Addresses' });
      this.address = {};

      // console.log(this.address);
      // this.$router.push({ name: 'Addresses' });
      // this.address = {};
      // console.log(this.address);
      // this.addAddress(this.address); // 1
      // this.$router.push({ name: 'Addresses' }); // 3
      // this.address = {}; // 4
    },
    ...mapActions(['addAddress', 'updateAddress']),
    // addAddress() {
    //   this.$store.dispatch('addAddress', this.address); // 2 storeが一周されて
    // },
    // ...mapActions(['addAddress']),mapactionsなら引数が省略できる！
  },
};
</script>
