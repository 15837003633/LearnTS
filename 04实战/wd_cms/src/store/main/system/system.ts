import {
  userListRequest,
  deleteUserById,
  newUserDataRequest,
  updateUserDataRequest
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { IUser } from './type'

const useSystemStore = defineStore('system', {
  state: () => {
    return {
      userList: [] as IUser[],
      totalCount: 0
    }
  },
  actions: {
    async fetchUserList(queryInfo: any) {
      const res = await userListRequest(queryInfo)
      this.userList = res.data.list
      this.totalCount = res.data.totalCount
    },
    async deleteUserById(id: number) {
      await deleteUserById(id)
      await this.fetchUserList({ offset: 0, size: 10 })
    },
    async newUserDataRequest(userInfo: any) {
      await newUserDataRequest(userInfo)
      await this.fetchUserList({ offset: 0, size: 10 })
    },
    async updateUserDataRequest(uid: number, userInfo: any) {
      await updateUserDataRequest(uid, userInfo)
      await this.fetchUserList({ offset: 0, size: 10 })
    }
  }
})

export default useSystemStore
