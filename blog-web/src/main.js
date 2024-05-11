import { createApp } from 'vue'
import './style.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'

import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/components/SvgIcon.vue' // svg component
//分页
import pagination from '@/components/pagination/index.vue'
//空状态
import empty from '@/components/empty/index.vue'
// 注册指令
import plugins from './plugins' // plugins
//代码高亮
import 'highlight.js/styles/atom-one-dark-reasonable.css' //样式
//图片预览
import VueViewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//图片懒加载
import VueLazyLoad from 'vue-lazyload'
import defaultSetting from '@/setting'
//全局导入el图标
import * as components from '@element-plus/icons-vue'
import { Vue3Marquee } from 'vue3-marquee'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'

const app = createApp(App)

// app.use(VueParticles)

app.use(router)

app.use(store);

app.component('svg-icon', SvgIcon)

app.component("sy-pagination", pagination);

app.component("sy-empty", empty);

app.component('marquee', Vue3Marquee)
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    // await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
  },
})
app.use(plugins)


//创建v-highlight全局指令
app.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
   // hljs.highlightBlock(block)
  })
})

app.use(VueViewer);

// 2.注册插件
app.use(VueLazyLoad, {
  preLoad: 1,
  // 懒加载默认加载图片
  loading: 'http://127.0.0.1:8444/helloscala/asserts/20240505/20240123_1705973123698.gif',
  // 加载失败后加载的图片
  error: 'http://127.0.0.1:8444/helloscala/asserts/20240505/20240123_1705973581037.png',
  attempt: 1
})

app.config.globalProperties.$setting = defaultSetting


for (const key in components) {
    const componentConfig = components[key];
    app.component(componentConfig.name, componentConfig);
}
app.mount('#app')
