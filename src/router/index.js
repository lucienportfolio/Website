/*
 * @Author       : hwl
 * @Date         : 2022-05-11 16:39:03
 * @LastEditors  : hwl
 * @LastEditTime : 2022-06-25 17:21:42
 * @Description  :
 */
import { createRouter, createWebHistory } from 'vue-router'
import IndexIndex from '../views/index/Index.vue'
import GameIndex from '../views/game/Index.vue'
import GameNewsList from '../views/game/NewsList.vue'
import GameNewsContent from '../views/game/NewsContent.vue'
import GameArchive from '../views/game/Archive.vue'
import GameShop from '../views/game/Shop.vue'
import GameShopItem from '../views/game/ShopItem.vue'
import WorldviewIndex from '../views/worldview/Index.vue'
import WorldviewRanger from '../views/worldview/Ranger.vue'
import WorldviewOrganization from '../views/worldview/Organization.vue'
import IndexAboutus from '../views/index/Aboutus.vue'

const routes = [
  {
    path: '/',
    name: 'IndexIndex',
    component: IndexIndex,
    meta: { title: 'HOME', keepAlive: true, type: 'home' }
  },
  {
    path: '/game/:gid',
    name: 'GameIndex',
    component: GameIndex,
    meta: { title: 'GAME', keepAlive: true, type: 'game' }
  },
  {
    path: '/game/news/list/:gid',
    name: 'GameNewsList',
    component: GameNewsList,
    meta: { title: 'NEWS', keepAlive: true, type: 'game' }
  },
  {
    path: '/game/news/content/:cid',
    name: 'GameNewsContent',
    component: GameNewsContent,
    meta: { title: 'NEWS', keepAlive: true, type: 'game' }
  },
  {
    path: '/game/archive/:gid',
    name: 'GameArchive',
    component: GameArchive,
    meta: { title: 'ARCHIVE', keepAlive: true, type: 'game' }
  },
  {
    path: '/game/shop/:gid',
    name: 'GameShop',
    component: GameShop,
    meta: { title: 'SHOP', keepAlive: true, type: 'game' }
  },
  {
    path: '/game/shop/item/:id',
    name: 'GameShopItem',
    component: GameShopItem,
    meta: { title: 'SHOP ITEM', keepAlive: true, type: 'game' }
  },
  {
    path: '/worldview',
    name: 'WorldviewIndex',
    component: WorldviewIndex,
    meta: { title: 'WORLDVIEW', keepAlive: true, type: 'worldview' }
  },
  {
    path: '/worldview/ranger/:id',
    name: 'WorldviewRanger',
    component: WorldviewRanger,
    meta: { title: 'WORLDVIEW RANGER', keepAlive: true, type: 'worldview' }
  },
  {
    path: '/worldview/organization/:id',
    name: 'WorldviewOrganization',
    component: WorldviewOrganization,
    meta: { title: 'WORLDVIEW ORGANIZTION', keepAlive: true, type: 'worldview' }
  },
  {
    path: '/aboutus',
    name: 'IndexAboutus',
    component: IndexAboutus,
    meta: { title: 'ABOUT US', keepAlive: true, type: 'aboutus' }
  }
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
