import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import '@/assets/css/index.css'
import registerIcons from '@/global/register-icons'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(registerIcons)
app.use(router)
app.mount('#app')
