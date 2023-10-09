import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Toast from '../components/Toast'

const FullPages = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <Toast />
      <Navbar />
      <div className="bg-white w-full flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
export default FullPages
