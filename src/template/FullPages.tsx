import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Toast from '../components/Toast'
import { useUser } from '../provider/AuthProvider'

const FullPages = () => {
  const { isLoading, isError } = useUser()
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <Toast isLoading={isLoading} isError={isError} />
      <Navbar />
      <div className="bg-white w-full flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
export default FullPages
