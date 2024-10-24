import './assets/main.css'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'

//导入mock
import './mocks/index'
//axios文件

import Vant from 'vant'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(Vant).mount('#app')
