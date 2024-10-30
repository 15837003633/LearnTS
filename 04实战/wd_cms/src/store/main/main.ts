import { defineStore } from 'pinia'
import { entireRolesRequest, entireDepartmentsRequest } from '@/service/main/main'

const useMainStore = defineStore('main', {
  state: () => {
    return {
      entireRools: [] as any[],
      entireDepartments: [] as any[]
    }
  },
  actions: {
    async getEntireData() {
      const roolsRes = await entireRolesRequest()
      this.entireRools = roolsRes.data.list

      const departmentsRes = await entireDepartmentsRequest()
      this.entireDepartments = departmentsRes.data.list
    }
  }
})

export default useMainStore
