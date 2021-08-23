<template>
  <div class="my-5">


<section class="container my-5">
    <div class="row">
        <div class="col-md-5 col-sm-12 col-lg-5">
            <div class="container polaroid-hover">
                <img :src="imgUrl(item.image)" height="400px" width="100%" alt="">
            </div>
        </div>
        <div class="col-md-7 col-sm-12 col-lg-7">
            <h4> {{ item.title }}  </h4>
            <h5 class="text-success">{{ item.price }} Taka</h5>

            <div class="my-5">
                <span class="bg-primary text-light btn btn-sm" v-if="item.product_quantity >= 1">in stock</span> <span class="bg-danger text-light btn btn-sm" v-else>out of stock</span>
            </div>

            <div class="my-5">
                <span><strong>Product Code : </strong># {{ item.product_code }}</span><br><br>
                <span><strong>Product Quantity : </strong>{{ item.product_quantity }}</span><br><br>
                <span><strong>Category : </strong>{{ item.category.name }}</span><br><br>
                <span><strong>Brand : </strong>{{item.brand.name}}</span><br><br>
                <span><strong>Company : </strong >{{item.company.name}}</span><br><br>
                <router-link :to="{path:'/products'}" class="btn btn-primary">Back</router-link>
            </div>
        </div>
    </div>

    <section>
      <div class="my-3">
        <h2 class="bg-primary text-light">Price Section</h2>
        <span><strong>Product Cost Price : </strong>{{ item.product_cost_price }} Taka</span><br><br>
        <span><strong>Produc Price : </strong>{{ item.price }} Taka</span><br><br>
      </div>

      <div class="my-3">
        <h2 class="bg-primary text-light">Product Units</h2>
        <span><strong>Product Unite : </strong>{{ item.product_unit }} </span><br><br>
        <span><strong>Product Unite Sell : </strong>{{ item.product_sell_unit }} </span><br><br>
        <span><strong>Product Purchase Unit Sell : </strong>{{ item.product_purchase_unit }} </span><br><br>
      </div>

      <div class="my-3" v-if="item.product_promotion = 1">
        <h2 class="bg-primary text-light">Product Promotion</h2>
        <span><strong>Promotional Price : </strong>{{ item.promotional_price }} Taka</span><br><br>
        <span><strong>Promotion Start Date : </strong>{{ item.promotion_start_date }} </span><br><br>
        <span><strong>Promotion End Date : </strong>{{ item.promotion_end_date }} </span><br><br>
      </div>
    </section>
</section>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      item:[],
    }
  },
methods:{
  imgUrl(img){
    return "http://localhost:8000/" + img
  },
  detail(){
    axios.get('http://localhost/laravelVuejsPos/public/api/product/detail/'+this.$route.params.id).then(response=>{
      console.log(response.data);
      this.item = response.data
    })
  }
},
mounted(){
  this.detail();
}
}
</script>

<style>

</style>
