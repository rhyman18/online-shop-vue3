import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faArrowUpWideShort, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping, faArrowUpWideShort, faPlus, faMinus)

createApp(App).use(router).mount('#app')
