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
            <h2 class="mb-5">23</h2>
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
              Weekly Orders
              <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
            </h4>
            <h2 class="mb-5">45,6334</h2>
            <h6 class="card-text">Decreased by 10%</h6>
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
              Visitors Online
              <i class="mdi mdi-diamond mdi-24px float-right"></i>
            </h4>
            <h2 class="mb-5">95,5741</h2>
            <h6 class="card-text">Increased by 5%</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Order List</h4>
            <div class="table-responsive">
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
                    <td>{{ order.customer.name }}</td>
                    <td>{{ order.customer.email }}</td>
                    <td>{{ order.customer.phone }}</td>
                    <td>{{ order.total_price }}</td>
                    <td>{{ order.due_price }}</td>
                    <td>


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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {

  computed: {
    orders() {
      return this.$store.getters.getOrder;
    },

  },
  methods: {
    monthly_amount(){
      axios.get('/monthly/sell').then((response)=>{
        console.log('hi');
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

  mounted() {
    this.all_order(), this.monthly_amount();
  },
};
</script>

<style>
</style>
