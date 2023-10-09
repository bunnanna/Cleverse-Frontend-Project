import { Link } from 'react-router-dom'
import { useUser } from '../provider/AuthProvider'

const Navbar = () => {
  const { user, onLogout } = useUser()
  return (
    <div className="navbar bg-orange-50 py-3 px-12">
      <div className="flex-1">
        <Link to={'/'} className="normal-case">
          <div className="flex gap-5 items-center">
            <img src="https://learnhub.thanayut.in.th/logo.svg" alt="logo" className=" h-11" />
            <span className=" text-orange-500 font-bold text-2xl">LearnHub</span>
          </div>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold ">
          {user ? (
            <>
              <li>
                <div className="text-orange-500">{user.name}</div>
              </li>
              <li>
                <Link to={'/'} className="text-orange-500" onClick={onLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={'/login'} className="text-orange-500">
                  Login
                </Link>
              </li>
              <li>
                <Link to={'/register'} className="text-orange-500">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
export default Navbar
