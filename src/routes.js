import VueRouter from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Reg from './components/Reg'

export default new VueRouter({
    routes: [
        {
            path: '/components/Login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/components/Home',
            component: Home,
            name: 'Home'
        },
        {
            path: '/components/Reg',
            component: Reg,
            name: 'Reg'
        }
    ],
    mode: 'history'
})