import { useLoginStore } from '@/store/login'
import { first_main_route } from '@/utils/map-route'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      name: 'main',
      path: '/main',
      component: () => import('@/views/main/main.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      // not found
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/not-found/not-found.vue')
    }
  ]
})

// 导航守卫
router.beforeEach(to => {
  const loginStore = useLoginStore()
  if (!loginStore.isLogin && to.path !== '/login') {
    return '/login'
  }
  // 默认显示第一个子路由
  if (to.path === '/main') {
    return first_main_route.path
  }
})

export default router
