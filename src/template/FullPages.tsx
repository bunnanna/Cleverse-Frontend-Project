import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const FullPages = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <Navbar />
      <div className="bg-white w-full flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
export default FullPages
