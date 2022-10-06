//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'auth.login',
        component: () => import( '@/views/auth/login.vue')
    },
    {
        path: '/register',
        name: 'auth.register',
        component: () => import( '@/views/auth/register.vue')
    },
    {
        path: '/dashboard',
        name: 'user.dashboard',
        component: () => import( '@/views/dashboard/dashboard.vue')
    },
    {
        path: '/profile',
        name: 'user.profile',
        component: () => import( '@/views/profile/profile.vue')
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router