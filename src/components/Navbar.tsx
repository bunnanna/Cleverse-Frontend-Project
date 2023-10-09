const Navbar = () => {
  return (
    <div className="navbar bg-orange-50 py-3 px-12">
      <div className="flex-1">
        <a className="normal-case">
          <div className="flex gap-5 items-center">
            <img src="https://learnhub.thanayut.in.th/logo.svg" alt="logo" className=" h-11" />
            <span className=" text-orange-500 font-bold text-2xl">LearnHub</span>
          </div>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold ">
          <li>
            <a className="text-orange-500">Login</a>
          </li>
          <li>
            <a className="text-orange-500">Register</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
