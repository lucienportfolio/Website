import { createRouter, createWebHistory } from 'vue-router'
import IndexIndex from '../views/index/Index.vue'
import UserIndex from '../views/user/Index.vue'

const routes = [
  { path: '/', name: 'IndexIndex', component: IndexIndex },
  { path: '/user', name: 'UserIndex', component: UserIndex }
]
const router = createRouter({ history: createWebHistory(), routes })
export default router
