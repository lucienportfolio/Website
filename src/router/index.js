/*
 * @Author       : hwl
 * @Date         : 2022-05-11 16:39:03
 * @LastEditors  : hwl
 * @LastEditTime : 2022-05-13 17:43:09
 * @Description  :
 */
import { createRouter, createWebHistory } from 'vue-router'
import IndexIndex from '../views/index/Index.vue'
import IndexAboutus from '../views/index/Aboutus.vue'
import TestIndex from '../views/test/Index.vue'

const routes = [
  { path: '/', name: 'IndexIndex', component: IndexIndex, meta: { title: 'HOME' } },
  { path: '/aboutus', name: 'IndexAboutus', component: IndexAboutus, meta: { title: 'ABOUT US' } },
  { path: '/test', name: 'TestIndex', component: TestIndex, meta: { title: 'TEST' } }
]
const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 10)
  next()
})
export default router
