<template>
  <div class="my-5">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Customer Email</th>
      <th scope="col">Customer Phone</th>
      <th scope="col">Total Price</th>
      <th scope="col">Due Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="order in orders" :key="order.id">
      <th scope="row">1</th>
      <td>{{order.customer.name}}</td>
      <td>{{order.customer.email}}</td>
      <td>{{order.customer.phone}}</td>
      <td>{{order.total_price}}</td>
      <td>{{order.due_price}}</td>
      <td>
        <span v-if="order.status == 1">
              <button @click="status(order.id)" class="btn btn-sm btn-info">
                <i class="mdi mdi-debug-step-into"></i>
              </button>
            </span>
            <span v-else>
              <button @click="status(order.id)" class="btn btn-sm btn-info">
                <i class="mdi mdi-debug-step-out"></i>
              </button>
            </span>

            <router-link
              class="btn btn-success btn-sm"
              :to="{ path: 'order/detail/' + order.id }"
              ><i class="mdi mdi-table-edit"></i
            ></router-link>
            <button
              @click="remove(order.id)"
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
</template>

<script>
import axios from 'axios'
export default {
  computed: {
    orders(){
     return this.$store.getters.getOrder
    }
  },
methods:{
  all_order(){
    axios.get("/order/index").then((response)=>{
      console.log(response.data)
      this.$store.commit("setOrder", response.data)
    })
  },
},

mounted() {
    this.all_order()
  }

}
</script>

<style>

</style>
