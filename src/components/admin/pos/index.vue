<template>
  <div class="my-5">
    <div class="">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <a class="mt-2 btn btn-info btn-sm " href="#home">{{category.category}}</a>
        </li>
      </ul>
    </div>

    <div class="my-3">
      <form action="">
        <input v-model="search" @input="searchword" placeholder="Search Product" type="text" name="" class="form-control" id="">
      </form>
    </div>

    <section class="mt-2">
      <div class="row">
        <div class="col-md-9">
          <div class="row">


          <div v-for="category in categories" :key="category.id" class="col-md-3 col-sm-6 col-lg-3">
          <div class="my-2 bg-light ">
            <img class="p-1 my-3" height="150px" width="150px" :src="category.image" alt="">
          </div>
          <div>
            <router-link  :to="{path:'/product-detail/' + category.id}">{{category.title}}</router-link>
          </div>
        </div>
        </div>
        </div>
      <div class="col-md-3">

        <div class=" my-2">
          <p class="bg-light" v-for="category in categories" :key="category.id">
            {{category.title}} <strong class="ml-5">{{category.price}}Taka</strong> <strong class="btn btn-danger btn-sm"><a href="">X</a></strong>
          </p>
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
      search:'',
    }
  },
  computed:{
   categories(){
      return this.$store.getters.getProduct
    }
  },
  methods:{
    searchword(){
      alert('hi')
    },
    all_category(){
      axios.get('https://fakestoreapi.com/products/').then(res=>{
        this.$store.commit('setProduct', res.data)
      })
    }
  },
  mounted(){
    this.all_category()
  }
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
  color:rgb(3, 3, 3);
  border: 2px;
  background: white;

}
</style>
