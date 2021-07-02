<template>
  <div class="my-5">
    <div class="">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <button
            @click="category_ways_product_show(category.id)"
            class="mt-2 btn btn-info btn-sm"
            href="#home"
          >
            {{ category.name }}
          </button>
        </li>
      </ul>
    </div>

    <div class="my-3">
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

    <section class="mt-2">
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <div
              v-for="product in products"
              :key="product.id"
              class="col-md-3 col-sm-6 col-lg-3"
            >
              <div class="my-2 bg-light">
                <img
                  class="p-1 my-3"
                  height="150px"
                  width="150px"
                  :src="product.image"
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
        <div class="col-md-3">
          <div class="my-2">
            <p
              class="bg-light"
              v-for="cart in carts"
              :key="cart.id"
            >
              {{ cart.id }}
              <strong class="ml-5">{{ cart.product_id }}Taka</strong>
            <button  class="btn btn-danger btn-sm" @click="remove_cart(cart.id)" >X</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getCategory;
    },
    carts() {
      return this.$store.getters.getCart;
    },
    products() {
      return this.$store.getters.getProduct;
    },
  },
  methods: {
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

    remove_cart(id){
      axios.get('http://localhost/laravelVuejsPos/public/api/cart/delete/' +id).then((response)=>{
        this.all_cart();
      })
    },

    all_cart(){
      var user_id = localStorage.getItem("user_id");
      axios.get('http://localhost/laravelVuejsPos/public/api/all-cart/' + user_id).then((response)=>{
        console.log(response.data)
        this.$store.commit("setCart", response.data)

      })
    }
  },
  mounted() {
    this.all_product(), this.getCategory(), this.all_cart()
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
