import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../provider/AuthProvider'
import { FormEvent, useState } from 'react'

const LoginPage = () => {
  const navigate = useNavigate()
  const { onLogin } = useUser()
  const [loginBody, setLoginBody] = useState({ username: '', password: '' })

  const onHandleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginBody({ ...loginBody, [e.target.name]: e.target.value })
  }

  const onHandleLogin = (e: FormEvent) => {
    e.preventDefault()
    onLogin(loginBody)
      .then(() => navigate('/'))
      .catch()
  }
  return (
    <form className=" flex flex-col justify-between items-center gap-5 my-4 w-3/5" onSubmit={onHandleLogin}>
      <h1 className=" text-orange-500 text-3xl font-bold">Login</h1>
      <div className="w-full flex flex-col items-start">
        <label>Username</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full min-w-xs bg-slate-100"
          name="username"
          onChange={onHandleFormChange}
        />
      </div>
      <div className="w-full flex flex-col items-start">
        <label>Password</label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full min-w-xs bg-slate-100"
          name="password"
          onChange={onHandleFormChange}
        />
      </div>
      <button className="btn w-full bg-orange-500 hover:bg-orange-600 text-white">Login</button>
      <Link to={'/register'}> Do not have an account? Register</Link>
    </form>
  )
}

export default LoginPage
