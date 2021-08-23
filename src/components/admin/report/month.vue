<template>
  <div class="my-5">
    <table class="text-center table">
      <thead style="background-color: white">
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Total Price</th>
          <th scope="col">Due</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody style="background-color: white">
        <tr v-for="(item, index) in months" :key="item.id">
          <th style="width: 10px" scope="row">{{ index + 1 }}</th>
          <td>{{ item.customer.name }}</td>
          <td>{{ item.total_price }}</td>
          <td>{{ item.due_price }}</td>
          <td>
            <router-link
              class="btn btn-success btn-sm"
              :to="{ path: '/order/detail/' + item.id }"
              >View</router-link
            >
            <button
              @click="remove(item.id)"
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
import axios from "axios";
export default {
  mounted() {
    this.Monthly_sell();
  },
  data() {
    return {
      months: ""
    };
  },
  methods: {
    Monthly_sell() {
      axios.get("/monthly/sell").then(response => {
        console.log(response)
        this.months = response.data.month;
      });
    },
    remove(id) {
      axios.get("/order/delete/" + id).then(response => {
        this.all_order();
      });
    }
  }
};
</script>

<style></style>
