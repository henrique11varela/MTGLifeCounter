import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/game', name: 'PlayerGrid', component: () => import('../views/PlayerGrid.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router