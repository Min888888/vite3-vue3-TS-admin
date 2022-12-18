import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia"; //仓库
import Router from '@/router/index' //router
import 'nprogress/nprogress.css' //加载条
//element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import * as ElementPlusIconsVue from '../node_modules/@element-plus/icons-vue'
//

const app = createApp(App).use(Router).use(createPinia());

// app.use(ElementPlus);
app.mount('#app');
