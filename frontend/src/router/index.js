import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'


const routes = [
    {
        path: '/',
        component: LoginPage,
        name: 'LoginPage'
    },
    {
        path: '/register',
        component: RegisterPage,
        name: 'RegisterPage',
    }, 
    {
        path: '/home',
        component: HomePage,
        name: 'HomePage',
    },  
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound 
    }, 

]



export default createRouter({
    history: createWebHistory(),
    routes, 
  })