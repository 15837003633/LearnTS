import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import '@/assets/css/index.css'
import icons from '@/global/register-icons'
import store from '@/store'

const app = createApp(App)
app.use(store)
app.use(icons)
app.use(router)
app.mount('#app')
