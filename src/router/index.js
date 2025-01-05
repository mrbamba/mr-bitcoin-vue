import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ContactIndex from '@/views/ContactIndex.vue'
import ContactDetails from '@/views/ContactDetails.vue'
import Statistics from '@/views/Statistics.vue'
import UserSignup from '@/views/UserSignup.vue'
import ContactEdit from '@/views/ContactEdit.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        }, 
        {
            path: '/contacts',
            name: 'ContactIndex',
            component: ContactIndex,
        },
        {
            path: '/contacts/:_id',
            name: 'ContactDetails',
            component: ContactDetails,
        },
        {
            path: '/contacts/edit/:_id?',
            name: 'ContactEdit',
            component: ContactEdit,
        },
        {
            path: '/statistics',
            name: 'Statistics',
            component: Statistics,
        },
        {
            path: '/signup',
            name: 'Signup',
            component: UserSignup,
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/About.vue'),
        },
        {
            path: '/404',
            name: 'NotFound',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/NotFound.vue'),
        },
    ],
})

export default router
