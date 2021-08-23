<template>
  <div class="my-5">
    <div class="card-header d-flex justify-content-between align-item-center">
      <h2 class="text-center mb-0"> <span><i class="mdi mdi-certificate"></i></span> LIST OF CATEGORIES</h2>
      <router-link
        class="text-light btn btn-icon btn-primary text-center"
        style="width: 180px; padding: 12px"
        :to="{ path: '/category/create' }"
      >
        <span> <i class="mdi mdi-library-plus"></i> </span> CREATE CATEGORY
      </router-link>
    </div>

    <div class="table-responsive">
      <div class="card">
                  <div class="card-body">
      <table class=" text-center table ">
        <thead style="">
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Category Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(item, index) in items" :key="item.id">
            <th style="width: 10px" scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>
              <span v-if="item.status == 1">
                <button @click="status(item.id)" class="btn btn-sm btn-info">
                  <i class="mdi mdi-debug-step-into"></i>
                </button>
              </span>
              <span v-else>
                <button @click="status(item.id)" class="btn btn-sm btn-info">
                  <i class="mdi mdi-debug-step-out"></i>
                </button>
              </span>

              <router-link
                class="btn btn-success btn-sm"
                :to="{ path: '/edit-category/' + item.id }"
                ><i class="mdi mdi-table-edit"></i
              ></router-link>
              <button
                @click="remove(item.id)"
                class="btn btn-danger btn-sm"
                href=""
              >
                <i class="mdi mdi-delete"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
                  </div>
      </div>
    </div>
  </div>
  <!--end of list of category -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },

  computed: {
    items() {
      return this.$store.getters.getCategory;
    }
  },

  methods: {
    getCategory() {
      axios
        .get("http://localhost/laravelVuejsPos/public/api/category/index")
        .then(response => {
          this.$store.commit("SetCategory", response.data);
        });
    },
    status(id) {
      axios
        .get(
          "http://localhost/laravelVuejsPos/public/api/category/status/" + id
        )
        .then(response => {
          console.log(response);
          this.getCategory();
        });
    },
    remove(id) {
      axios
        .get(
          "http://localhost/laravelVuejsPos/public/api/category/delete/" + id
        )
        .then(response => {
          console.log(response);
          this.getCategory();
        });
    }
  },

  mounted() {
    this.getCategory();
  }
};
</script>

<style></style>
