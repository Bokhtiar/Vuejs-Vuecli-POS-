<template>
  <div class="my-5">
    <table class="text-center table">
      <thead style="background-color: white">
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Customer Phone</th>
          <th scope="col">Total</th>
          <th scope="col">Due</th>
          <th scope="col">Due Form</th>
          <th scope="col">Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody style="background-color: white">
        <tr v-for="(item, index) in customers" :key="item.id">
          <th style="width: 10px" scope="row">{{ index + 1 }}</th>
          <td>{{ item.customer.name }}</td>
          <td>{{ item.customer.phone }}</td>
          <td>{{ item.total_price }}</td>
          <td>{{ item.due_price }}</td>
          <td>
            <form @submit.prevent = "due_clear(item.id)" action="">
              <input width="100%" v-model="due_amount" type="text" name="due_amount" id="" />
              <input type="submit" name="" class="btn btn-info btn-sm" id="" />
            </form>
          </td>
          <td>{{ item.created_at }}</td>
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
    <div class="float-right">
      <h3>Total Amount: {{ total_amount }}</h3>
      <h3>Due: {{ due_total }} Taka</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.due(), this.due_clear(id);
  },
  data() {
    return {
      customers: "",
      due_amount: "",
    };
  },
  computed: {
    total_amount(){
      var total_payment = 0;
      this.customers.forEach(item => {
        total_payment += item.total_price;
      });
      return total_payment;
    },
    due_total() {
      var due_payment = 0;
      this.customers.forEach(item => {
        due_payment += item.due_price;
      });
      return due_payment;
    },

    due_amount(){
      this.customers.forEach(item => {
        return this.due_amount = item.due_price
      });
    }
  },
  methods: {
    due() {
      var id = this.$route.params.id;
      axios.get("/customer/due/" + id).then(response => {
        this.customers = response.data;
      });
    },
    due_clear(id){
      axios.post("/due/clear/" +id, {
       due_amount : this.due_amount
      }).then((response)=>{
       this.due()
      })
    }
  }
};
</script>

<style></style>
