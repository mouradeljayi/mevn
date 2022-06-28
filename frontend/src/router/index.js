import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'
import NewArticlePage from '@/pages/NewArticlePage'
import EditArticlePage from '@/pages/EditArticlePage'



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
        path: '/new',
        component: NewArticlePage,
        name: 'NewArticlePage',
    }, 
    {
        path: '/edit/:id',
        component: EditArticlePage,
        name: 'EditArticlePage'
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