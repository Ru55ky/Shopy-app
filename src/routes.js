import VueRouter from 'vue-router'
import Login from './Login'
import Home from './App'

export default new VueRouter({
    routes: [
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/',
            component: Home
        }
    ],
    mode: 'history'
})