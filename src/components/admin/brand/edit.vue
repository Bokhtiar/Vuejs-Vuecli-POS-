<template>
  <div class="my-5">
    <div class="card-header d-flex justify-content-between align-item-center">
          <h2 class="mb-0">Update Brand Form</h2>
          <router-link class="text-light btn btn-icon btn-primary text-center " style="width:180px; padding:12px" :to="{path: '/brands'}">
        All Brands
      </router-link>
        </div>
      <div class="row justify-content-center">
        <div class="col-md-8 my-5">
          <form @submit.prevent="update_brand" action="">
            <div class="form-group">
              <label class="h5" for="">Brands Name:</label>
              <input placeholder="Brands Name" v-model="form.name" type="text" class="form-control" name="" id="">
            </div>
            <div class="float-right">
              <button type="submit" class="btn btn-info">Create New Brand</button>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
export default {
  data(){
    return {
      form: new Form({
        name: '',
      })
    }
  },

  methods:{
    editBrand(){
      axios.get('/brand/edit/' + this.$route.params.id).then(response =>{
        console.log(response)
        this.form.name = response.data.name
      })
    },
    update_brand(){
      this.form.post("/brand/update/" +this.$route.params.id).then((response)=>{
        this.$router.push('/brands')
      })
    }
  },

  mounted(){
    this.editBrand()
  }


}
</script>

<style>

</style>
