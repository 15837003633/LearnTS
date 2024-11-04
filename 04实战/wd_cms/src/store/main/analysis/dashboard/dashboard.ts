import { goodAmountListRequest } from '@/service/main/analysis/dashboard/dashboard'
import { defineStore } from 'pinia'
import type { IAmountItem } from './type'
const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    amountList: [] as IAmountItem[]
  }),
  actions: {
    async getAmountList() {
      const res = await goodAmountListRequest()
      this.amountList = res.data
    }
  }
})

export default useDashboardStore
