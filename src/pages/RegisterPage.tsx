import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../provider/AuthProvider'
import { FormEvent, useState } from 'react'
import { RegisterDTO } from '../types/authdto'

const initRegister: RegisterDTO = {
  username: '',
  password: '',
  name: '',
}

const RegisterPage = () => {
  const navigate = useNavigate()
  const { onCreateUser, isError } = useUser()
  const [registerBody, setLoginBody] = useState(initRegister)
  const [confirmPassword, setConfirmPassword] = useState('')

  const onHandleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginBody({ ...registerBody, [e.target.name]: e.target.value })
  }

  const onHandleLogin = (e: FormEvent) => {
    e.preventDefault()
    onCreateUser(registerBody, confirmPassword)
      .then(() => navigate('/'))
      .catch(() => console.log(isError))
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
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full min-w-xs bg-slate-100"
          name="name"
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
      <div className="w-full flex flex-col items-start">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full min-w-xs bg-slate-100"
          name="ConfirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="btn w-full bg-orange-500 hover:bg-orange-600 text-white">Login</button>
      <Link to={'/login'}>Already have an account? Login</Link>
    </form>
  )
}

export default RegisterPage
