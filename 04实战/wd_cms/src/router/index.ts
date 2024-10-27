import { useLoginStore } from '@/store/login'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
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

router.beforeEach(to => {
  const loginStore = useLoginStore()
  if (!loginStore.isLogin && to.path.startsWith('/main')) {
    return '/login'
  }
})

export default router
