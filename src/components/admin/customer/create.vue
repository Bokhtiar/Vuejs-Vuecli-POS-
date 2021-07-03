<template>
  <div class="my-5">
    <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="mb-0">CREATE NEW CUSTOMERS</h2>
      <router-link
        class="text-light btn btn-icon btn-primary text-center"
        style="width: 180px; padding: 12px"
        :to="{ path: '/customers' }"
      >
        LIST OF CUSTOMER
      </router-link>
    </div>

    <section class="my-3">
      <div class="">
        <form @submit.prevent="customer_create" class="form-group" >
          <div class="row">
            <div class="col-md-4">
              <label for="">Customer Name</label>
              <input v-model="form.name" class="form-control" type="text" placeholder="Enter Customer Name" id="">
            </div>

            <div class="col-md-4">
              <label for="">Customer E-mail</label>
              <input v-model="form.email" class="form-control" type="email"  placeholder="Enter Customer Email" id="">
            </div>

            <div class="col-md-4">
              <label for="">Customer Phone</label>
              <input v-model="form.phone" class="form-control" type="number"  placeholder="Enter Customer Phone" id="">
            </div>
          </div>
          <div class="form-group my-1">
            <label for="">Customer Location</label>
            <input v-model="form.location" class="form-control" type="text" placeholder="Enter Customer Location"  id="">
          </div>
          <div class="bg-primary text-center my-3">
            <input type="submit" class="btn btn-primary" value="Create New Customer" id="">
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
export default {
   data: () => ({
    form: new Form({
      name: '',
      email: '',
      phone: '',
      location: '',
    })
  }),

  methods:{
    customer_create(){
      this.form.post('customer/store').then((response)=>{
        console.log(response.data)
        this.$router.push('/customers');
      })
    }
  }
}
</script>

<style>

</style>
