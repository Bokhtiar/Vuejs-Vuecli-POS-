<template>
  <div class="my-5">
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
    <tr v-for="d in detail" :key="d.id">
      <th scope="row">{{d.id}}</th>
      <td>{{d.product.title}}</td>
      <td>{{d.product.price}}</td>
      <td>{{d.product.image}}</td>
      <td>{{d.quantity}}</td>
      <td>
        <button
                class="btn btn-danger btn-sm"
                @click="remove_cart(d.id)"
              >
                X
              </button>
      </td>
    </tr>
  </tbody>
</table>
  <div class="float-right">
    <span class="btn btn-primary">{{total}} Taka</span>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      detail:[],
    }
  },
  computed:{
    total(){
      var total = 0;
      this.detail.forEach(d => {
        total += d.product.price * d.quantity
      });
      return total
    }
  },
  methods:{
    details(){
      var id = this.$route.params.id;
      axios.get("http://localhost/laravelVuejsPos/public/api/order/detail/" + id).then((response)=>{
        this.detail = response.data
      })
    },
    remove_cart(id) {
      axios
        .get("http://localhost/laravelVuejsPos/public/api/cart/delete/" + id)
        .then((response) => {
          this.details();
        });
    },
  },
  mounted(){
    this.details()
  }
}
</script>

<style>

</style>
