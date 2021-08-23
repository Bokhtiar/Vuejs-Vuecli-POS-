<template>
  <div class="">

    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <a class="navbar-brand text-light" href="#">POS</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto bg-primary">
        <li class="nav-item">
          <router-link class="nav-link bg-primary text-light h5" :to="{path:'/'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link  bg-primary text-light h5" :to="{path:'/customers'}">Customer</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link  bg-primary text-light h5" :to="{path:'/categories'}">Category</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link  bg-primary text-light h5" :to="{path:'/products'}">Product</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link  bg-primary text-light h5" :to="{path:'/brands'}">Brands</router-link>
        </li>
      </ul>
    </div>
  </nav>


    <div class="">
      <ul>
        <li v-for="category in categories" :key="category.id"></li>
      </ul>
    </div>

    <section class="">
      <div class="row">
        <div class="col-sm-12 col-md-2 col-lg-2">
          <div class="text-center">
            <h3 class="bg-primary text-light">Categories</h3>
            <span v-for="category in categories" :key="category.id">
              <button
                @click="category_ways_product_show(category.id)"
                class="mt-1"
                style="border: none; background-color: transparent"
              >
                {{ category.name }}</button
              ><br />
            </span>
          </div>

          <div class="text-center my-2">
            <h3 class="bg-primary text-light">Brands</h3>
            <span v-for="brand in brands" :key="brand.id">
              <button
                @click="brand_ways_product_show(brand.id)"
                class="mt-1"
                style="border: none; background-color: transparent"
              >
                {{ brand.name }}</button
              ><br />
            </span>
          </div>
        </div>
        <!--brand and category end -->

        <div class="col-sm-12 col-md-6">
          <div class="">
            <form action="">
              <input
                v-model="search"
                @input="searchword"
                placeholder="Search Product"
                type="text"
                name=""

                class="form-control"
                id=""
              />
            </form>
          </div>
          <div class="row">
            <div
              v-for="product in products"
              :key="product.id"
              class="col-md-3 col-sm-6 col-lg-3"
            >
              <div class="my-2">
                <img
                  class="p-1 my-3"
                  height="150px"
                  width="150px"
                  :src="imgUrl(product.image)"
                  alt=""
                />
              </div>
              <div>
                <router-link :to="{ path: '/product-detail/' + product.id }">{{
                  product.title
                }}</router-link>
                <button
                  @click="add_to_cart(product.id)"
                  class="btn btn-primary btn-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--product show end -->

        <div class="col-md-4 col-sm-12 col-lg-4">
          <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cart in carts" :key="cart.id">
              <td style="">{{ cart.product.title }}</td>

              <span class="" style="display: none">{{
                (total += cart.product.price * cart.quantity)
              }}</span>

              <td style="widht: 60px">
                <form @submit.prevent="cart_quantity(cart.id)" method="post">
                  <input
                    class="q"
                    :value="cart.quantity"
                    style="width: 43px"
                    type="number"
                    name="quantity"
                  />
                </form>
              </td>
              <td>{{ cart.product.price * cart.quantity }} tk</td>
              <td>
                <button
                  class="btn btn-primary btn-sm"
                  @click="remove_cart(cart.id)"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="float-right text-light bg-primary btn">
          {{ total_price }} Tk
        </div>
        <br><br><br>

         <div class="bg-primary text-center text-light">
          <h3>Order Place</h3>
        </div>
        <form action="" class="form-group" @submit.prevent="order_confirm">
          <div class="form-group">
            <label for="">Select Customer</label>
            <select
              v-model="customer_id"
              name="customer_id"
              class="form-control"
              id=""
            >
              <option value="">Select Customer</option>
              <option
                v-for="customer in customers"
                :key="customer.id"
                :value="customer.id"
              >
                {{ customer.name }}
              </option>
            </select>
          </div>

          <div class="form-gorup">
            <label for="">Total Price</label>
            <input
              v-model="total_price"
              type="number"
              class="form-control"
              name=""
              id=""
            />
          </div>

          <div class="form-gorup">
            <label for="">Total Due</label>
            <input
              v-model="due_price"
              type="number"
              class="form-control"
              placeholder="Enter Due Payment"
              name=""
              id=""
            />
          </div>

          <div class="text-center my-2">
            <input
              type="submit"
              name=""
              class="btn btn-primary"
              value="Order Confirm"
              id=""
            />
          </div>
        </form>
        </div>
        <!--cart and order end -->
      </div>
    </section>

    <hr />

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      quantity: "",
      search: "",
      customer_id: "",
      due_price: "",
      user_id: localStorage.getItem("user_id"),
    };
  },
  computed: {
    total_price() {
      var total = 0;
      this.carts.forEach((cart) => {
        total += cart.product.price * cart.quantity;
      });
      return total;
    },
    categories() {
      return this.$store.getters.getCategory;
    },
    carts() {
      return this.$store.getters.getCart;
    },
    products() {
      return this.$store.getters.getProduct;
    },
    customers() {
      return this.$store.getters.getCustomer;
    },
    brands() {
      return this.$store.getters.getBrand;
    },
  },
  methods: {
    imgUrl(img){
      return "http://localhost:8000/" + img
    },
    getCategory() {
      axios
        .get("http://localhost/laravelVuejsPos/public/api/category/index")
        .then((response) => {
          this.$store.commit("SetCategory", response.data);
        });
    },
    searchword() {
      axios
        .get(
          "http://localhost/laravelVuejsPos/public/api/product/search/" +
            this.search
        )
        .then((response) => {
          this.$store.commit("setProduct", response.data);
        });
    },
    category_ways_product_show(id) {
      axios
        .get(
          "http://localhost/laravelVuejsPos/public/api/product/category/" + id
        )
        .then((response) => {
          this.$store.commit("setProduct", response.data);
        });
    },
    brand_ways_product_show(id) {
      axios.get("/brand/ways/product/" + id).then((response) => {
        this.$store.commit("setProduct", response.data);
      });
    },
    all_product() {
      axios
        .get("http://localhost/laravelVuejsPos/public/api/product/index")
        .then((res) => {
          this.$store.commit("setProduct", res.data);
        });
    },

    add_to_cart(id) {
      var user_id = localStorage.getItem("user_id");
      axios
        .post("http://localhost/laravelVuejsPos/public/api/add-to-cart", {
          id: id,
          user_id: user_id,
        })
        .then((response) => {
          this.all_cart();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    remove_cart(id) {
      axios
        .get("http://localhost/laravelVuejsPos/public/api/cart/delete/" + id)
        .then((response) => {
          this.all_cart();
        });
    },

    all_cart() {
      var user_id = localStorage.getItem("user_id");
      axios
        .get("http://localhost/laravelVuejsPos/public/api/all-cart/" + user_id)
        .then((response) => {
          console.log(response);
          this.$store.commit("setCart", response.data);
        });
    },

    total_taka(cart) {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
      }
    },

    all_customer() {
      axios.get("customer/index").then((response) => {
        console.log(response.data);
        this.$store.commit("setCustomer", response.data);
      });
    },
    order_confirm() {
      var user_id = localStorage.getItem("user_id");
      axios
        .post("/order", {
          customer_id: this.customer_id,
          total: this.total_price,
          due_price: this.due_price,
          user_id: this.user_id,
        })
        .then((response) => {
          console.log(response);
          this.all_cart();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    cart_quantity(id) {
      axios.post("/quantity/update/" + id).then((response) => {
        this.all_cart();
      });
    },
    allBrand() {
      axios.get("/brand/index").then((response) => {
        this.$store.commit("setBrand", response.data);
      });
    },
  },
  mounted() {
    this.all_product(),
      this.getCategory(),
      this.all_cart(),
      this.all_customer(),
      this.allBrand();
  },
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-left: 6px;
}
li a {
  color: rgb(3, 3, 3);
  border: 2px;
  background: white;
}
</style>
