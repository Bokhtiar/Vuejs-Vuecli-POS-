<template>
  <div class="my-5">
    <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="mb-0">LIST OF BRANDS</h2>
      <router-link
        class="text-light btn btn-icon btn-primary text-center"
        style="width: 180px; padding: 12px"
        :to="{ path: '/create-brand' }"
      >
        CREATE BRANDS
      </router-link>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-10 my-5">
        <table class="text-center table">
          <thead style="background-color: white">
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody style="background-color: white">
            <tr v-for="(brand, index) in brands" :key="brand.id">
              <th style="width: 10px" scope="row">{{ index +1 }}</th>
              <td>{{ brand.name }}</td>
              <td>
                <router-link  :to="{path:'/edit-brand/' + brand.id}" class="btn btn-success btn-sm"
                  ><i class="mdi mdi-table-edit"></i
                ></router-link>
                <button @click="removeBrand(brand.id)" class="btn btn-danger btn-sm" href="">
                  <i class="mdi mdi-delete"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {

    };
  },
  computed:{
    brands(){
      return this.$store.getters.getBrand
    }

  },
  methods: {
    allBrand() {
      axios.get("/brand/index").then((response) => {
        this.$store.commit('setBrand', response.data)
      });
    },
    removeBrand(id){
      axios.get('brand/delete/' + id).then(response =>{
        this.allBrand();
      })
    }
  },

  mounted(){
    this.allBrand()
  }

};
</script>

<style>
</style>
