import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/signin" replace /> // 1. Исправлен регистр пути
}

export default PrivateRoute