import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppButton from './components/AppButton.vue'

const app = createApp(App)

app.use(router)
app.component('AppButton', AppButton)

app.mount('#app')
