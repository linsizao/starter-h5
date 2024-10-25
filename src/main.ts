import { createApp } from 'vue'
import { router } from './router'
import Vant from 'vant'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'

//导入mock
import './mocks/index'
//axios文件

// createApp(App).use(Vant).mount('#app')

const app = createApp(App)

app.use(router)
app.use(Vant)
app.use(createPinia())

app.mount('#app')
