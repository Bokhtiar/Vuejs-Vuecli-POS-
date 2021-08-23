<template>
  <div class="my-5">

      <div class="row">
        <div class="col-md-6 col-sm-12 col-lg-6">
          <h2>Customer Information</h2>
            <p class="">
              <strong>Name: </strong><span>{{customers.name}}</span>
            </p>
            <p class="">
              <strong>E-mail: </strong><span>{{customers.email}}</span>
            </p>
            <p class="">
              <strong>Phone: </strong><span>{{customers.phone}}</span>
            </p>
            <p class="">
              <strong>Location: </strong><span>{{customers.location}}</span>
            </p>
        </div>

        <div class="col-md-6 col-sm-12 col-lg-6">
          <h2>Payment Information</h2>
        </div>
      </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Product Title</th>
          <th scope="col">Product Price</th>
          <th scope="col">Product image</th>
          <th scope="col">Product Qunatity</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d, index) in detail" :key="d.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ d.product.title }}</td>
          <td>{{ d.product.price }}</td>
          <td>
            <img :src="imgUrl(d.product.image)" alt="" />
          </td>
          <td>{{ d.quantity }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="remove_cart(d.id)">
              X
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="float-right">
      <span class="btn btn-primary">{{ total }} Taka</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detail: [],
      customers: [],
    };
  },
  computed: {
    total() {
      var total = 0;
      this.detail.forEach(d => {
        total += d.product.price * d.quantity;
      });
      return total;
    },

  },
  methods: {
    imgUrl(img) {
      return "http://localhost:8000/" + img;
    },
    details() {
      var id = this.$route.params.id;
      axios
        .get("http://localhost/laravelVuejsPos/public/api/order/detail/" + id)
        .then(response => {
         this.customers = response.data.customer;
          this.detail = response.data.order;
        });
    },
    remove_cart(id) {
      axios
        .get("http://localhost/laravelVuejsPos/public/api/cart/delete/" + id)
        .then(response => {
          this.details();
        });
    }
  },
  mounted() {
    this.details();
  }
};
</script>

<style></style>
