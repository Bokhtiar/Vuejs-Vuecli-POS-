<template>
  <div class="my-5">
     <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="text-center mb-0">List Of Company</h2>
      <router-link
        class="text-light btn btn-icon btn-primary text-center"
        style="width: 180px; padding: 12px"
        :to="{ path: '/company/create' }"
      >
        Create Company
      </router-link>
    </div>
  <table class="table" style="background-color: white">
  <thead>
    <tr>
      <th scope="col">indexing</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Phone</th>
      <th scope="col">Location</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="company in companies" :key="company.id">
      <th scope="row">{{company.id}}</th>
      <td>{{ company.name }}</td>
      <td>{{ company.email }}</td>
      <td>{{ company.phone }}</td>
      <td>{{ company.location }}</td>
      <td>
            <router-link
              class="btn btn-success btn-sm"
              :to="{ path: '/company/show/' + company.id }"
              ><i class="mdi mdi-table-eye">View</i
            ></router-link>

             <router-link
              class="btn btn-success btn-sm"
              :to="{ path: '/company/edit/' + company.id }"
              ><i class="mdi mdi-table-edit"></i
            ></router-link>

            <button
              @click="remove(company.id)"
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
  computed:{
    companies(){
      return this.$store.getters.getCompany
    }
  },
  methods:{
    all_company(){
      axios.get('/company/index').then((response)=>{
        this.$store.commit('setCompany', response.data)
      })
    },
    remove(id){
      axios.get('/company/delete/' + id).then((response)=>{
        this.all_company()
      })
    }
  },
  mounted(){
    this.all_company()
  }
}
</script>

<style>

</style>
