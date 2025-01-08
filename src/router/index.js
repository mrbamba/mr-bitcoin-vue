import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ContactIndex from '@/views/ContactIndex.vue'
import ContactDetails from '@/views/ContactDetails.vue'
import Statistics from '@/views/Statistics.vue'
import UserLoginSignup from '@/views/UserLoginSignup.vue'
import ContactEdit from '@/views/ContactEdit.vue'
import store from '@/store'



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
            children:{
                
            }
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
            component: UserLoginSignup,
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
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/NotFound.vue'),
        },
        {
            path: '/:pathMatch(.*)',
            name: 'NotFound',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/NotFound.vue'),
        },
    ],
})
// router.beforeEach((to, from, next) => {
//     // to and from are both route objects. must call `next`.
//     const exists = sourceData.destinations.find(
//         destination => destination.id === parseInt(to.param.id)
//     )
//     if(!exists) return{name: 'NotFound'}
// })

router.beforeEach(async(to, from, next) => {
    const isAuthenticated = await store.getters.user ? true : false
    if (to.name !== 'Signup' && !isAuthenticated) next({ name: 'Signup' })
    else next()
  })

export default await router
