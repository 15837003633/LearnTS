import { LOGIN_TOKEN, USER_INFO, USER_MENU } from '@/constants/login'
import router from '@/router'
import { accountLoginRequest, userInfoRequest, userMenuListRequest } from '@/service/login'
import type { IAccount } from '@/type'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.get(LOGIN_TOKEN),
    userInfo: localCache.get(USER_INFO) ?? {},
    menuList: localCache.get(USER_MENU) ?? []
  }),
  getters: {
    /**
     * 判断用户是否已登录
     *
     * 此方法通过检查用户令牌（token）是否存在来确定用户登录状态
     * 如果token存在，则返回true，表示用户已登录；否则返回false，表示用户未登录
     *
     * @returns {boolean} 用户登录状态，true表示已登录，false表示未登录
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

      // 获取用户管理权限，也就是显示的menu
      const menu = await userMenuListRequest(uid)
      this.menuList = menu.data
      localCache.set(USER_MENU, this.menuList)

      router.push('/main')
    },
    logout() {
      localCache.remove(LOGIN_TOKEN)
      router.push('/login')
    }
  }
})
