<template>
  <div class="my-5">
     <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="mb-0">LIST OF CUSTOMERS</h2>
      <router-link
        class="text-light btn btn-icon btn-primary text-center"
        style="width: 180px; padding: 12px"
        :to="{ path: '/customer/create' }"
      >
        CREATE CUSTOMER
      </router-link>
    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(customer, index) in customers" :key="customer.id">
      <th scope="row">{{index +1}}</th>
      <td>{{customer.name}}</td>
      <td>{{customer.email}}</td>
      <td>{{customer.phone}}</td>
      <td>{{customer.location}}</td>
      <td>
        <router-link
              class="btn btn-success btn-sm"
              :to="{ path: '/edit/customer/' + customer.id }"
              ><i class="mdi mdi-table-edit"></i
            ></router-link>

            <router-link
              class="btn btn-success btn-sm"
              :to="{ path: '/customer/view/' + customer.id }"
              ><i class="">View</i
            ></router-link>

            <button
              @click="remove(customer.id)"
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
    customers(){
      return this.$store.getters.getCustomer
    }
  },
methods:{
  all_customer(){
    axios.get('customer/index').then((response)=>{
      console.log(response.data);
      this.$store.commit('setCustomer', response.data)
    })
  },
  remove(id){
    axios.get('customer/delete/' +id).then((response)=>{
      this.all_customer();
    })
  }
},
mounted(){
  this.all_customer();
}
}
</script>

<style>

</style>
