<template>
  <div class="my-5">
    <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="mb-0">LIST OF PRODUCTS</h2>
      <router-link
        class="text-light btn btn-icon btn-primary text-center"
        style="width: 180px; padding: 12px"
        :to="{ path: '/products' }"
      >
        PRODUCT LIST
      </router-link>
    </div>


    <section class="my-3">
      <form @submit.prevent="formSubmit" action="POST" enctype="multipart/form-data">
        <div class="form-group">
          <label for="">Product Title</label>
          <input v-model="title" type="text" class="form-control" name="title" placeholder="Enter Product Title" id="">
        </div>

        <div class="my-3 row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <label for="">Select Category</label>
            <select v-model="category_id" class="form-control" name="category_id" id="">
              <option value="">Select Category</option>
              <option v-for="item in items" :key="item.id" :value="item.id">{{item.name}}</option>
            </select>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6">
            <label for="">Select Brand</label>
            <select v-model="brand_id" class="form-control" name="brand_id" id="">
              <option value="1">Category</option>
              <option value="2">Category</option>
            </select>
          </div>
        </div>


        <div class="my-3">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <label for="">Product Price</label>
              <input v-model="price" type="text" class="form-control" placeholder="Product Price" name="price" id="">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <label for="">Product Image</label>
              <input type="file" class="form-control" v-on:change="onImageChange" name="image" id="">
            </div>
          </div>
        </div>

        <div class="text-center">
          <input class="form-control btn btn-primary" type="submit" value="Create New Product" name="" id="">
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import Form from 'vform'
export default {

   data() {
            return {
              title: '',
              category_id : '',
              brand_id : '',
              price: '',
              image: '',
            };
        },
computed: {
    items() {
      return this.$store.getters.getCategory;
    },
  },
  methods:{
            onImageChange(e){
                console.log(e.target.files[0]);
                this.image = e.target.files[0];
            },
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;

                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

                let formData = new FormData();
                formData.append('title', this.title);
                formData.append('category_id', this.category_id);
                formData.append('brand_id', this.brand_id);
                formData.append('price', this.price);
                formData.append('image', this.image);

                axios.post('/product/store', formData, config)
                .then((response) => {
                    console.log(response)
                    this.$router.push('/products');
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            },
    getCategory() {
      axios
        .get("http://localhost/laravelVuejsPos/public/api/category/index")
        .then((response) => {
          this.$store.commit("SetCategory", response.data);
        });
    },

  },

  mounted(){
    this.getCategory()
  }
}
</script>

<style>

</style>
