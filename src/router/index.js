import { createRouter, createWebHistory } from 'vue-router'
// import WeekView from '../views/WeekView.vue'
import DailyDeporteView from '@/views/DailyDeporteView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'dailyDeporte',
    component: DailyDeporteView
  },
  {
    path: '/week',
    name: 'Week',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WeekDeporteView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/auth/formulario',
    name: 'formulario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormularioView.vue')
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  } /* Se especifica que cualquier ruta que no se encuentre muestre el vista PageNotFound*/
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
