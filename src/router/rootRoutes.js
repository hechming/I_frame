import Register from '@/components/Register.js'
import Login from '@/components/Login.js'
import Detail from '@/components/Detail.js'
import App from '@/App.js'

const routerRoutes = {
    routes: [
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/detail/:id',
            component: Detail
        },
        {
            path: '/',
            component: App
        }
    ]
}

export default routerRoutes