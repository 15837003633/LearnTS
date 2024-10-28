// 这里是main下的所有的路由配置，先提前定义所有，根据角色权限动态添加子路由

export const config_routes = [
  {
    path: '/main/analysis/overview',
    component: () => import('@/views/main/analysis/overview/overview.vue')
  },
  {
    path: '/main/analysis/dashboard',
    component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
  },
  {
    path: '/main/system/user',
    component: () => import('@/views/main/system/user/user.vue')
  },
  {
    path: '/main/system/role',
    component: () => import('@/views/main/system/role/role.vue')
  },
  {
    path: '/main/system/department',
    component: () => import('@/views/main/system/department/department.vue')
  },
  {
    path: '/main/system/menu',
    component: () => import('@/views/main/system/menu/menu.vue')
  },
  {
    path: '/main/product/category',
    component: () => import('@/views/main/product/category/category.vue')
  },
  {
    path: '/main/product/goods',
    component: () => import('@/views/main/product/goods/goods.vue')
  },
  {
    path: '/main/story/list',
    component: () => import('@/views/main/story/list/list.vue')
  },
  {
    path: '/main/story/chat',
    component: () => import('@/views/main/story/chat/chat.vue')
  }
]
