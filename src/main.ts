import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import vuex from './store/index'
import './mock/mock'
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(Vant)
app.use(router)
app.use(vuex)
app.mount('#app')
