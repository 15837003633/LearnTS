import { accountLoginRequest } from '@/service/login'
import type { IAccount } from '@/type'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.get('token') || '',
    id: localCache.get('id') || '',
    name: localCache.get('name') || ''
  }),
  actions: {
    async fetchAccountLogin(data: IAccount) {
      const res = await accountLoginRequest(data)
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token
      console.log('login success')

      localCache.set('token', this.token)
      localCache.set('id', this.id)
      localCache.set('name', this.name)
    }
  }
})
