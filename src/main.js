import { createApp } from 'vue'
import App from './App.vue'
import { router } from "@/router"
import AppLayout from './App.Layout.vue';

createApp(App)
    .use(router)
    .component('AppLayout', AppLayout)
    .mount('#app')
