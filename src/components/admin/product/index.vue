<template>
  <div class="my-5">

    <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="mb-0">LIST OF PRODUCTS</h2>
      <router-link
        class="text-light btn btn-icon btn-primary text-center"
        style="width: 180px; padding: 12px"
        :to="{ path: '/brands' }"
      >
        CREATE PRODUCT
      </router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">title</th>
              <th scope="col">Category Name</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <th scope="row">1</th>
              <td style="width:100px">{{product.title}}</td>
              <td>{{product.category}}</td>
              <td>
                <img :src="product.image" alt="">
              </td>
              <td>
                <router-link :to="{path:'/product-edit/' + product.id}" class="btn btn-success btn-sm"
                  ><i class="mdi mdi-table-edit"></i
                ></router-link>
                <router-link :to="{path:'/product-detail/' + product.id}" class="btn btn-success btn-sm"
                  ><i class="mdi mdi-table-eye"></i
                ></router-link>
                <button
                  @click="removeBrand(brand.id)"
                  class="btn btn-danger btn-sm"
                  href=""
                >
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
  computed:{
    products(){
     return this.$store.getters.getProduct
    }
  },
  methods: {
   
    all_product() {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        this.$store.commit("setProduct", res.data);
      });
    },
  },
  mounted() {
    this.all_product();
  },
};
</script>

<style>
</style>
