import { defineStore } from 'pinia'
import {
  entireRolesRequest,
  entireDepartmentsRequest,
  entireMenuListRequest
} from '@/service/main/main'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      //所有角色列表
      entireRools: [] as any[],
      // 所有部门列表
      entireDepartments: [] as any[],
      // 所有菜单列表,也就是所有权限列表
      menuList: [] as any[]
    }
  },
  actions: {
    async getEntireData() {
      const roolsRes = await entireRolesRequest({ offset: 0, size: 100 })
      this.entireRools = roolsRes.data.list

      const departmentsRes = await entireDepartmentsRequest({ offset: 0, size: 100 })
      this.entireDepartments = departmentsRes.data.list

      const menuList = await entireMenuListRequest({ offset: 0, size: 100 })
      this.menuList = menuList.data.list
    }
  }
})

export default useMainStore
