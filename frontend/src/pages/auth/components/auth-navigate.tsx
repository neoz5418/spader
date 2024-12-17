import { isLoggedIn } from '@/hooks/use-auth'
import { useNavigate,Outlet } from 'react-router-dom'

function AuthRouter() {
    console.log('AuthRouter', isLoggedIn())
    const navigate = useNavigate()
    if (isLoggedIn()) {
        navigate('/')
    }
    return  <Outlet />
}

function PrivateRoute() {
    console.log('PrivateRoute', isLoggedIn())
    // const navigate = useNavigate()
    if (!isLoggedIn()) {
        // navigate('/sign-in')
    }
    return  <Outlet />
}

function PrivateRoute2() {
    console.log('PrivateRoute', isLoggedIn())
    const navigate = useNavigate()
    if (!isLoggedIn()) {
        navigate('/sign-in')
    }
    return  <Outlet />
}

export { AuthRouter, PrivateRoute,PrivateRoute2 }
