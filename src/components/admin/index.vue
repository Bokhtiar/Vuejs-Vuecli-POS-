<template>
  <div>
    <div class="page-header" id="proBanner" style="margin-top: 40px">
      <h3 class="page-title">
        <span class="page-title-icon bg-gradient-primary text-white mr-2">
          <i class="mdi mdi-home"></i>
        </span>
        Dashboard
      </h3>
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <span></span>Overview
            <i
              class="
                mdi mdi-alert-circle-outline
                icon-sm
                text-primary
                align-middle
              "
            ></i>
          </li>
        </ul>
      </nav>
    </div>
    <div class="row">
      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-danger card-img-holder text-white">
          <div class="card-body">
            <img
              src="@/assets/images/dashboard/circle.svg"
              class="card-img-absolute"
              alt="circle-image"
            />
            <h4 class="font-weight-normal mb-3">
              Monthly Sales
              <i class="mdi mdi-chart-line mdi-24px float-right"></i>
            </h4>
            <h2 class="mb-5">{{month}}</h2>
            <h6 class="card-text">Increased by 60%</h6>
          </div>
        </div>
      </div>
      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-info card-img-holder text-white">
          <div class="card-body">
            <img
              src="@/assets/images/dashboard/circle.svg"
              class="card-img-absolute"
              alt="circle-image"
            />
            <h4 class="font-weight-normal mb-3">
              Day Orders
              <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
            </h4>
            <h2 class="mb-5">{{day}}</h2>
            <h6 class="card-text">Increased by 10%</h6>
          </div>
        </div>
      </div>
      <div class="col-md-4 stretch-card grid-margin">
        <div class="card bg-gradient-success card-img-holder text-white">
          <div class="card-body">
            <img
              src="@/assets/images/dashboard/circle.svg"
              class="card-img-absolute"
              alt="circle-image"
            />
            <h4 class="font-weight-normal mb-3">
              Year Order
              <i class="mdi mdi-diamond mdi-24px float-right"></i>
            </h4>
            <h2 class="mb-5">{{year}}</h2>
            <h6 class="card-text">Increased by 5%</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title"> <span><i class="h3 mdi mdi-cart"></i></span> Order List</h2>
            <div class="table-responsive">
              <table class="table text-center">
                <thead class="font-weight-bold">
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

                  <tr v-for="(order, index) in orders" :key="order.id">
                    <th scope="row">{{index +1}}</th>
                    <td>{{ order.customer.name }}</td>
                    <td>{{ order.customer.email }}</td>
                    <td>{{ order.customer.phone }}</td>
                    <td>{{ order.total_price }}<span>৳</span> </td>
                    <td>{{ order.due_price }}<span>৳</span></td>
                    <td>


                      <router-link
                        class="btn btn-success btn-sm"
                        :to="{ path: 'order/detail/' + order.id }"
                        ><i class="mdi mdi-eye"></i></router-link>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {

mounted() {
    this.all_order(), this.monthly_amount(),this.year_amount(),this.day_amount();
  },
  data(){
    return{
      month:'',
      year: '',
      day:'',
    }
  },
  computed: {
    orders() {
      return this.$store.getters.getOrder;
    },

  },
  methods: {
    monthly_amount(){
      axios.get('/monthly/sell').then((response)=>{
        this.month = response.data.total
      })
    },
    year_amount(){
      axios.get('/year/sell').then((response)=>{
        this.year = response.data.total
      })
    },
    day_amount(){
      axios.get('/day/sell').then((response)=>{
        this.day = response.data.total
      })
    },

    all_order() {
      axios.get("/order/index").then((response) => {
        console.log(response.data);
        this.$store.commit("setOrder", response.data);
      });
    },

    remove(id) {
      axios.get("/order/delete/" + id).then((response) => {
        this.all_order();
      });
    },
  },


};
</script>

<style>
</style>
