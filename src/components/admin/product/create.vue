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

        <div class=" row">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Product Title</label>
          <input v-model="title" type="text" class="form-control" name="title" placeholder="Enter Product Title" id="">
        </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Product Code</label>
          <input v-model="product_code" type="number" class="form-control" name="product_code" placeholder="Enter Product Code" id="">
        </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Product Quantity</label>
          <input v-model="product_quantity" type="number" class="form-control" name="product_quantity" placeholder="Enter Product Quantity" id="">
        </div>
          </div>
        </div>

        <div class=" row">
          <div class=" form-group col-sm-12 col-md-6 col-lg-6">
            <label for="">Select Category</label>
            <select v-model="category_id" class="form-control" name="category_id" id="">
              <option value="">Select Category</option>
              <option v-for="item in items" :key="item.id" :value="item.id">{{item.name}}</option>
            </select>
          </div>

          <div class=" form-group col-sm-12 col-md-6 col-lg-6">
            <label for="">Select Brand</label>
            <select v-model="brand_id" class="form-control" name="brand_id" id="">
              <option value="1">Category</option>
              <option value="2">Category</option>
            </select>
          </div>
        </div>


          <div class=" row">
          <div class=" col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Product Unit</label>
          <select v-model="product_unit" name="product_unit" class="form-control" id="">
            <option value="Piece">Piece</option>
            <option value="Piece">Dozen Box</option>
            <option value="Piece">Cartoon Box</option>
            <option value="Meter">Meter</option>
            <option value="Kilogram">Kilogram</option>
          </select>
        </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Product Sele Unit</label>
          <select v-model="product_sell_unit" name="product_sell_unit" class="form-control" id="">
            <option value="Piece">Piece</option>
            <option value="Piece">Dozen Box</option>
            <option value="Piece">Cartoon Box</option>
            <option value="Meter">Meter</option>
            <option value="Kilogram">Kilogram</option>
          </select>
        </div>
          </div>
          <div class=" col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Product Purchase Unit</label>
          <select v-model="product_purchase_unit" name="product_sell_unit" class="form-control" id="">
            <option value="Piece">Piece</option>
            <option value="Piece">Dozen Box</option>
            <option value="Piece">Cartoon Box</option>
            <option value="Meter">Meter</option>
            <option value="Kilogram">Kilogram</option>
          </select>
        </div>
          </div>
        </div>



        <div class=" row">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Product Cost</label>
          <input v-model="product_cost_price" type="number" class="form-control" name="product_cost_price" placeholder="Enter Product Cost Price" id="">
        </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Product Price</label>
          <input v-model="price" type="text" class="form-control" name="price" placeholder="Enter Product Title" id="">
        </div>

          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Product Display in Pos</label> <br>
          <input type="checkbox" name="" v-model="pos_display" value="1" id="">
        </div>
          </div>
        </div>


        <div class="">
            <div class="form-group">
              <label for="">Product Image</label>
              <input type="file" class="form-control" v-on:change="onImageChange" name="image" id="">
            </div>
        </div>

        <div class="">
            <div class="form-group">
              <label for="">Product Description</label>
              <textarea v-model="description" name="" class="form-control" id="" cols="30" rows="10"></textarea>
            </div>
        </div>

        <div>
          <input v-model="product_promotion" type="checkbox" value="1" name="" id="">Add Promotional Price
          <div v-if="product_promotion == 1">
            <div class="row my-3">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Promotional Price</label>
          <input v-model="promotional_price" type="number" class="form-control" name="promotional_price" placeholder="Enter Promotional Price" id="">
        </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Promotional Starts Date</label>
          <input v-model="promotion_start_date" type="date" class="form-control" name="" id="">
        </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="form-group">
          <label for="">Promotional End Date</label> <br>
          <input v-model="promotion_end_date" type="date" class="form-control" name="" id="">
        </div>
          </div>
        </div>
          </div>
        </div>

        <div class="text-center my-2">
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
              product_code: '',
              product_quantity:'',
              category_id : '',
              brand_id : '',
              product_unit:'',
              product_sell_unit:'',
              product_purchase_unit:'',
              product_cost_price:'',
              price: '',
              pos_display:'',
              image: '',
              description:'',
              product_promotion: '',
              promotional_price:'',
              promotion_start_date:'',
              promotion_end_date:'',
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
                formData.append('product_code', this.product_code);
                formData.append('product_quantity', this.product_quantity);

                formData.append('category_id', this.category_id);
                formData.append('brand_id', this.brand_id);

                formData.append('product_unit', this.product_unit);
                formData.append('product_sell_unit', this.product_sell_unit);
                formData.append('product_purchase_unit', this.product_purchase_unit);

                formData.append('product_cost_price', this.product_cost_price);
                formData.append('price', this.price);
                formData.append('pos_display', this.pos_display);

                formData.append('image', this.image);
                formData.append('description', this.description);

                formData.append('product_promotion', this.product_promotion);

                formData.append('promotional_price', this.promotional_price);
                formData.append('promotion_start_date', this.promotion_start_date);
                formData.append('promotion_end_date', this.promotion_end_date);

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
