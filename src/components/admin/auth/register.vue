<template>
  <div class="my-5">
    <form @submit.prevent="reg" @keydown="form.onKeydown($event)">
      <input v-model="form.name" type="text" name="name" placeholder="name" />
      <div v-if="form.errors.has('name')" v-html="form.errors.get('name')" />

      <input
        v-model="form.email"
        type="text"
        name="email"
        placeholder="email"
      />
      <div v-if="form.errors.has('email')" v-html="form.errors.get('email')" />

      <input
        v-model="form.password"
        type="password"
        name="password"
        placeholder="Password"
      />
      <div
        v-if="form.errors.has('password')"
        v-html="form.errors.get('password')"
      />

      <button type="submit" :disabled="form.busy">Log In</button>
    </form>
  </div>
</template>

<script>
import Form from "vform";

export default {
  data: () => ({
    form: new Form({
      name: "",
      email: "",
      password: "",
    }),
  }),

  methods: {
    reg() {
      axios
        .post("/registration", {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
        })
        .then(response=> {
          localStorage.setItem('AToken',response.data.token)
          localStorage.setItem('user_id',response.data.id)
          console.log(response);
          this.$router.push('/dashboard')
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
   mounted(){
    var atoken = localStorage.getItem('AToken')
      if(atoken){
        this.$router.push('/dashboard')
      }
  }
};
</script>
