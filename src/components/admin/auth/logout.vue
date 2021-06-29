<template>
  <div class="my-5">
    logout successfully !...
  </div>
</template>

<script>
export default {
  mounted(){
    localStorage.removeItem('Atoken');
    this.$router.push('/login')
  }

}
</script>

<style>

</style>
