<template>
  <div class="my-5">
    <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="mb-0">LIST OF PRODUCTS BRAND</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12">
        <table class="table" style="background-color: white">
          <thead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">title</th>
              <th scope="col">Category Name </th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="product.id">
              <th scope="row">{{ index + 1 }}</th>
              <td style="width:100px">{{ product.title }}</td>
              <td>{{ product.category.name }}</td>
              <td>
                <img :src="imgUrl(product.image)" />
              </td>
              <td>{{ product.price }}</td>
              <td>
                <router-link
                  class="btn btn-success btn-sm"
                  :to="{ path: '/product-detail/' + product.id }"
                  ><i class="mdi mdi-table-eye">view</i></router-link
                >

                <router-link
                  class="btn btn-success btn-sm"
                  :to="{ path: '/product-edit/' + product.id }"
                  ><i class="mdi mdi-table-edit"></i
                ></router-link>

                <button
                  @click="removeBrand(product.id)"
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
  data() {
    return {
      products: []
    };
  },
  methods: {
    imgUrl(img) {
      return "http://localhost:8000/" + img;
    },
    all_product() {
      var id = this.$route.params.id;
      axios.get("/brand/show/" + id).then(r => {
        console.log(r.data);
        this.products = r.data;
      });
    },

    removeBrand(id) {
      axios
        .get("http://localhost/laravelVuejsPos/public/api/product/delete/" + id)
        .then(response => {
          this.all_product();
        });
    }
  },
  mounted() {
    this.all_product();
  }
};
</script>

<style></style>
