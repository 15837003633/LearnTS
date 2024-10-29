import { userListRequest } from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { IUser } from './type'

const useSystemStore = defineStore('system', {
  state: () => {
    return {
      userList: [] as IUser[]
    }
  },
  actions: {
    async fetchUserList() {
      const res = await userListRequest()
      this.userList = res.data.list
    }
  }
})

export default useSystemStore
