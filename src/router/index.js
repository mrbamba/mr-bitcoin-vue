import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '@/views/ContactsView.vue'
import StatisticsView from '@/views/StatisticsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        }, 
        {
            path: '/contacts',
            name: 'ContactsView',
            component: ContactsView,
        },
        {
            path: '/statistics',
            name: 'StatisticsView',
            component: StatisticsView,
        },
        {
            path: '/about',
            name: 'AboutView',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
    ],
})

export default router
