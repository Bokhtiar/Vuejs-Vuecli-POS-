<template>
  <div class="my-5">


<section class="container my-5">
    <div class="row">
        <div class="col-md-5 col-sm-12 col-lg-5">
            <div class="container polaroid-hover">
                <img :src="item.image" height="400px" width="100%" alt="">
            </div>
        </div>
        <div class="col-md-7 col-sm-12 col-lg-7">
            <h4>Single {{ item.title }} Detials</h4>
            <h5 class="text-success">${{ item.price }}</h5>

            <div class="my-5">
                <a class="btn btn-info btn-sm text-light" href="">Add To Card</a>
            </div>

            <div class="my-5">
                <span>Category : {{ item.category }}</span><br><br>
                <span>Description: {{item.description}} </span><br><br>
                <router-link :to="{path:'/products'}" class="btn btn-primary">Back</router-link>
            </div>
        </div>
    </div>
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
  detail(){
    axios.get('https://fakestoreapi.com/products/'+this.$route.params.id).then(response=>{
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
