import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const mevnApp = createApp(App)
  
mevnApp.use(router)

mevnApp.mount('#app')
