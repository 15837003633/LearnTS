import type { App } from 'vue'
import { createPinia } from 'pinia'
import { useLoginStore } from '@/store/login/login'

// pinia的初始化
const pinia = createPinia()
function registerStore(app: App) {
  app.use(pinia)
  // 每次启动或者刷新页面，读取缓存
  const loginStore = useLoginStore()
  loginStore.loadDataFromCache()
}

export default registerStore
