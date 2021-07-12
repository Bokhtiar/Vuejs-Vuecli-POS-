<template>
  <div id="app my-5">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 mounted(){
    var atoken = localStorage.getItem('AToken')

      if(atoken){
        this.$router.push('/')
      }else{
        this.$router.push('/login')
      }
  }
};
</script>

<style></style>
