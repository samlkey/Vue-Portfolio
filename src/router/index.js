import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../components/Landing.vue'
import Projects from '../views/Projects.vue'
import Resume from '../views/Resume.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Landing,
    meta: { transition: 'slide-left', hideOverflow: true }
  },
  {
    path: "/projects",
    name: 'projects',
    component: Projects,
    meta: { hideOverflow: true }
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
    meta: { hideOverflow: false }
  }

  //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
