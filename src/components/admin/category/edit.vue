<template>
  <div class="my-5">
    <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="text-center mb-0"><i class="mdi mdi-certificate"></i>CATEGORY EDIT FORM</h2>
      <router-link
        class="text-light btn btn-icon btn-primary text-center"
        style="width: 180px; padding: 12px"
        :to="{ path: '/categories' }"
      >
       <span> <i class="mdi mdi-border-all"></i> </span> ALL CATEGORY
      </router-link>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row justiy-content-center">
          <div class="col-md-12 my-4">
            <form
              class="forms-sample"
              action=""
              @submit.prevent="update_category(form.id)"
            >
              <div>
               <label for="exampleInputName1"
                  >Update Category Name <span class="text-danger">*</span>
                </label>
                <input
                  class="form-control"
                  v-model="form.name"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div class="">
                <button type="submit" class="btn btn-gradient-primary mr-2">
               <span> <i class="mdi mdi-checkbox-marked"></i></span> CATEGORY UPDATE
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "vform";
export default {
  data: () => ({
    form: new Form({
      name: ""
    })
  }),

  methods: {
    single_category() {
      var id = this.$route.params.id;
      axios
        .get("http://localhost/laravelVuejsPos/public/api/category/edit/" + id)
        .then(response => {
          this.form.name = response.data.name;
          this.form.id = response.data.id;
        });
    },
    update_category(id) {
      this.form
        .post(
          "http://localhost/laravelVuejsPos/public/api/category/update/" + id
        )
        .then(response => {
          console.log(response);
          this.$router.push("/categories");
        });
    }
  },
  mounted() {
    this.single_category();
  }
};
</script>

<style></style>
