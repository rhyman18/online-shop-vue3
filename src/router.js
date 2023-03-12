import { createWebHistory, createRouter } from 'vue-router'
import Products from './components/Products.vue'
import Detail from './components/Detail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Products
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }
]

const router = createRouter({ 
    history: createWebHistory(),
    routes
})

export default router