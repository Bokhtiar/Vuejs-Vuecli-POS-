import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: () => import('../components/admin/app.vue'),
      children: [{
          path: '/dashboard',
          component: () => import('../components/admin/index.vue'),
        },
        {
          path: '/categories',
          component: () => import('../components/admin/category/index.vue'),
        },
        {
          path: '/category/create',
          component: () => import('../components/admin/category/create.vue'),
        },
        {
          path: '/edit-category/:id',
          component: () => import('../components/admin/category/edit.vue'),
        },
        {
          path: '/brands',
          component: () => import('../components/admin/brand/index.vue'),
        },
        {
          path: '/create-brand',
          component: () => import('../components/admin/brand/create.vue'),
        },
        {
          path: '/edit-brand/:id',
          component: () => import('../components/admin/brand/edit.vue'),
        },
        {
          path: '/products',
          component: () => import('../components/admin/product/index.vue'),
        },
        {
          path: '/product-edit/:id',
          component: () => import('../components/admin/product/edit.vue'),
        },
        {
          path: '/product-detail/:id',
          component: () => import('../components/admin/product/detail.vue'),
        },
        {
          path: '/pos',
          component: () => import('../components/admin/pos/index.vue'),
        },

        {
          path: '/login',
          component: () => import('../components/admin/auth/login.vue'),
        },

        {
          path: '/registration',
          component: () => import('../components/admin/auth/register.vue'),
        },

        {
          path: '/logout',
          component: () => import('../components/admin/auth/logout.vue'),
        },


      ]
    },

  ]
})
