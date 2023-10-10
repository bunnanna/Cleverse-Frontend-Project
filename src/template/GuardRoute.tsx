import { Navigate, Outlet } from 'react-router-dom'

interface IGuardedRouteProps {
  isRouteAccessible: boolean
  redirectRoute: string
}
const GuardRoute = ({ isRouteAccessible, redirectRoute }: IGuardedRouteProps) => {
  return isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} replace />
}
export default GuardRoute
