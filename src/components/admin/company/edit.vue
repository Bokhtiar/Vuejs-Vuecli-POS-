<template>
  <div class="my-5">
    <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="text-center mb-0">Create New Company Details</h2>
      <router-link
        class="text-light btn btn-icon btn-primary text-center"
        style="width: 180px; padding: 12px"
        :to="{ path: '/company' }"
      >
        List Of Company
      </router-link>
    </div>


     <section class="my-3">
      <div class="">
        <form @submit.prevent="Company_update" class="form-group" >
          <div class="row">
            <div class="col-md-4">
              <label for="">Company Name</label>
              <input v-model="form.name" class="form-control" type="text" placeholder="Enter Company Name" id="">
            </div>

            <div class="col-md-4">
              <label for="">Company E-mail</label>
              <input v-model="form.email" class="form-control" type="email"  placeholder="Enter Company Email" id="">
            </div>

            <div class="col-md-4">
              <label for="">Company Phone</label>
              <input v-model="form.phone" class="form-control" type="number"  placeholder="Enter Company Phone" id="">
            </div>
          </div>
          <div class="form-group my-1">
            <label for="">Company Location</label>
            <input v-model="form.location" class="form-control" type="text" placeholder="Enter Company Location"  id="">
          </div>
          <div class="bg-primary text-center my-3">
            <input type="submit" class="btn btn-primary" value="Create New Company" id="">
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
    Company_update(){
      var id = this.$route.params.id
      this.form.post('/company/update/' + id).then((response)=>{
        this.$router.push('/company')
      })
    },
    edit_company(){
      var id = this.$route.params.id
      axios.get('/company/edit/' + id).then((response)=>{
        this.form.name = response.data.name
        this.form.email = response.data.email
        this.form.phone = response.data.phone
        this.form.location = response.data.location
      })
    }
  },
  mounted(){
    this.edit_company()
  }
}
</script>

<style>

</style>
