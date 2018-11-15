import Vue from 'vue'
import Router from 'vue-router'
import listCompany from './components/listCompany.vue'
import EditCompany from './components/editCompany.vue'
import AddCompany from './components/addCompany.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'companylist',
      component: listCompany
    },
    {
      path: '/add',
      name: 'AddCompany',
      component: AddCompany
    },
    {
      path: '/edit/:id',
      name: 'EditCompany',
      component: EditCompany
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
