<template>
  <div>
    <div class="row" v-for="item in items" :key="item">
      <input type="text" placeholder="nama" v-model="item.namaItem" />
      &nbsp;
      <input type="number" placeholder="harga" v-model="item.harga" />
      &nbsp;
      <input type="number" placeholder="stok" v-model="item.stok" />
    </div>
    <b-button class="mt-2 mr-3" @click.prevent="addForm()">Tambah Form</b-button>
    <b-button class="mt-2" @click.prevent="inputForm">Input</b-button>
    {{this.items}}
  </div>
</template>

<script>
import axios from "../API/axios";
export default {
  name: "about",
  data() {
    return {
      items: [
        {
          namaItem: "",
          harga: 0,
          stok: 0
        }
      ]
    };
  },
  methods: {
    addForm() {
      let lastItem = this.items[this.items.length - 1];
      this.items.push({ ...lastItem });
    },
    inputForm() {
      let saya = [];
      return axios
        .post("/item", { saya: this.items })
        .then(data => {
          console.log(data, "-----------");
          this.items = [
            {
              namaItem: "",
              harga: 0,
              stok: 0
            }
          ];
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style>
</style>