<template>
  <div>

  <html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Purple Admin</title>

    <link rel="shortcut icon" href="(../../assets/images/favicon.ico)" />
  </head>
  <body>
    <div class="container-scroller">
      <navbar ></navbar>
      <div class="container-fluid page-body-wrapper">
        <sidebar></sidebar>
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <ft></ft>
        </div>
      </div>
    </div>
  </body>



    <!-- <div class="container-scrolle">
      <navbar></navbar>
      <div class="container-fluid page-body-wrapper">
        <sidebar></sidebar>
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
            <ft></ft>
          </div>
        </div>
      </div>
    </div>-->
  </html>
  </div>
</template>

<script>
 import("../../assets/vendors/mdi/css/materialdesignicons.min.css");
//import("../../assets/vendors/css/vendor.bundle.base.css");
import("../../assets/css/style.css");

// import("../../assets/vendors/chart.js/Chart.min.js");
// import("../../assets/js/off-canvas.js");
import("../../assets/js/hoverable-collapse.js");
import("../../assets/js/misc.js");
//import("../../assets/js/dashboard.js");
import("../../assets/js/todolist.js");

import navbar from "./asset/header.vue";
import sidebar from "./asset/sidebar.vue";
import ft from "./asset/footer.vue";
export default {
  name: "App",
  components: {
    navbar,
    sidebar,
    ft,
  },
};
</script>

<style>
</style>
