import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/otherpage', name: 'Other', component: () => import('../views/OtherPage.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router