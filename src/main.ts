import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入文件
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


// const app = createApp(App)
// app.use(ElementPlus)
// app.mount('#app')

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
