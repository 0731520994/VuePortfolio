import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './views/HomeView.vue'
import './views/AboutView.vue'
createApp(App).use(store).use(router).mount('#app')













