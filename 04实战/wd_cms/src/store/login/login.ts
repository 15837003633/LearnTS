import { LOGIN_TOKEN, USER_INFO, USER_MENU } from '@/constants/login'
import router from '@/router'
import { accountLoginRequest, userInfoRequest, userMenuListRequest } from '@/service/login'
import type { IAccount } from '@/type'
import { localCache } from '@/utils/cache'
import { mapRouteFromMenu } from '@/utils/map-route'
import { defineStore } from 'pinia'
import useMainStore from '../main/main'
import { mapMenuListToPermissions } from '@/utils/map-role'

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: null,
    userInfo: {} as any,
    menuList: [] as any[],
    userPermissionList: [] as string[]
  }),
  getters: {
    /**
     * 判断用户是否已登录
     */
    isLogin(): boolean {
      return !!this.token
    }
  },
  actions: {
    async fetchAccountLogin(data: IAccount) {
      // 调用登录接口
      const res = await accountLoginRequest(data)
      this.token = res.data.token
      const uid = res.data.id
      console.log('login success')

      localCache.set(LOGIN_TOKEN, this.token)

      // 获取用户信息
      const user_info = await userInfoRequest(uid)
      this.userInfo = user_info.data
      localCache.set(USER_INFO, this.userInfo)

      // 获取用户显示的menu
      const all_menu_res = await userMenuListRequest(uid)
      this.menuList = all_menu_res.data ?? []
      localCache.set(USER_MENU, this.menuList)

      // 获取用户的menu里权限
      this.userPermissionList = mapMenuListToPermissions(this.menuList)

      // 动态添加路由
      const routes = mapRouteFromMenu(this.menuList)
      for (const item of routes) {
        router.addRoute('main', item)
      }

      //获取一些公共的数据
      const mainStore = useMainStore()
      mainStore.getEntireData()

      router.push('/main')
    },

    // 当用户刷新网页时，需要重新加载的数据
    loadDataFromCache() {
      console.log('load data from cache')
      this.token = localCache.get(LOGIN_TOKEN)
      this.userInfo = localCache.get(USER_INFO)
      this.menuList = localCache.get(USER_MENU)
      if (this.token && this.userInfo && this.menuList) {
        //路由
        const routes = mapRouteFromMenu(this.menuList)
        for (const item of routes) {
          router.addRoute('main', item)
        }
        //请求数据
        const mainStore = useMainStore()
        mainStore.getEntireData()

        //获取权限
        this.userPermissionList = mapMenuListToPermissions(this.menuList)
      }
    },

    // 退出登录，清空缓存数据
    logout() {
      localCache.remove(LOGIN_TOKEN)
      localCache.remove(USER_INFO)
      localCache.remove(USER_MENU)
      router.push('/login')
    }
  }
})
