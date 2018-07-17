import Home from '@/components/Home/index.js'
import Kind from '@/components/Kind/index.js'
import Cart from '@/components/Cart/index.js'
import User from '@/components/Home/index.js'

const appRoutes = {
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/kind',
            component: Kind
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/user',
            component: User
        }
    ]
}

export default appRoutes