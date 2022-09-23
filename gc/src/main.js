import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '../public/icon/iconfont.css'
import '../public/icon/color_icon/iconfont.css'
import '../public/icon/color_icon/iconfont.js'


createApp(App).use(store).use(router).mount('#app')