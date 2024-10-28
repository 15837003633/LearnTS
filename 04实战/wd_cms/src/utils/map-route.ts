import { config_routes } from '@/router/config'
import { type RouteRecordRaw } from 'vue-router'

export let first_main_route: any

// 根据当前菜单，找到对应的路由对象，用于添加到动态路由中
export function mapRouteFromMenu(menuList: any[]) {
  const loacl_routes = config_routes
  const main_routes: RouteRecordRaw[] = []
  for (const sub_menu of menuList) {
    for (const menu_item of sub_menu.children) {
      const match_route = loacl_routes.find(item => item.path === menu_item.url)
      if (match_route) {
        if (!first_main_route) first_main_route = match_route

        //让父级路由重定向到第一个子标签
        if (!main_routes.find(item => item.path === sub_menu.url)) {
          main_routes.push({ path: sub_menu.url, redirect: match_route.path })
        }

        // 添加子标签路由
        main_routes.push(match_route)
      }
    }
  }
  return main_routes
}

// 根据当前路由，找到对应的菜单，比如用于刷新菜单UI
export function mapMenuFromRoute(menuList: any[], route_path: string) {
  let match_item: any = null
  for (const sub_menu of menuList) {
    for (const menu_item of sub_menu.children) {
      if (menu_item.url === route_path) {
        match_item = menu_item
      }
    }
  }
  return match_item
}

// 根据当前路由，获取面包屑
interface IBreadcrumbsItem {
  name: string
  path: string
}
export function mapPathToBreadcrumbs(menuList: any[], current_path: string) {
  const breadcrumbs: IBreadcrumbsItem[] = []
  for (const sub_menu of menuList) {
    for (const menu_item of sub_menu.children) {
      if (menu_item.url === current_path) {
        breadcrumbs.push({ name: sub_menu.name, path: sub_menu.url })
        breadcrumbs.push({ name: menu_item.name, path: menu_item.url })
      }
    }
  }
  return breadcrumbs
}
