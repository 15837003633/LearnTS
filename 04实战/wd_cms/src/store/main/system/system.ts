import {
  userListRequest,
  deleteUserById,
  newUserDataRequest,
  updateUserDataRequest,
  pageListRequest,
  deletePageById,
  newPageDataRequest,
  updatePageDataRequest
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { IUser } from './type'

const useSystemStore = defineStore('system', {
  state: () => {
    return {
      userList: [] as IUser[],
      totalCount: 0,

      pageList: [] as any[],
      pageTotalCount: 0
    }
  },
  actions: {
    // 用户管理的crud
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
    },

    // 通用页面的crud
    async fetchPageList(pageName: string, queryInfo: any) {
      const res = await pageListRequest(pageName, queryInfo)
      this.pageList = res.data.list
      this.pageTotalCount = res.data.totalCount
    },
    async deletePageById(pageName: string, id: number) {
      await deletePageById(pageName, id)
      await this.fetchPageList(pageName, { offset: 0, size: 10 })
    },
    async newPageDataRequest(pageName: string, userInfo: any) {
      await newPageDataRequest(pageName, userInfo)
      await this.fetchPageList(pageName, { offset: 0, size: 10 })
    },
    async updatePageDataRequest(pageName: string, uid: number, userInfo: any) {
      await updatePageDataRequest(pageName, uid, userInfo)
      await this.fetchPageList(pageName, { offset: 0, size: 10 })
    }
  }
})

export default useSystemStore
