import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { CredentialDTO, LoginDTO, RegisterDTO, UserDTO } from '../types/authdto'
import { ErrorDTO } from '../types/errordto'
import { useLocation } from 'react-router-dom'

const useAuth = () => {
  const [userToken, setUserToken] = useState<string | null>(localStorage.getItem('token'))
  const [user, setUser] = useState<UserDTO | null>(null)
  const [isLoading, setIsLoading] = useState<string>('')
  const [isSuccess, setIsSuccess] = useState<string>('')
  const [isError, setIsError] = useState<ErrorDTO | null>(null)

  const location = useLocation()

  const onSuccess = (Successfrom: string) => {
    setIsLoading('')
    setIsSuccess(Successfrom)
    setTimeout(() => {
      setIsSuccess('')
    }, 3000)
  }

  const onError = (err: AxiosError<ErrorDTO>) => {
    setIsLoading('')
    setIsError(err?.response?.data || null)
    throw err
  }

  useEffect(() => {
    setIsError(null)
    setIsLoading('')
  }, [location.pathname])

  useEffect(() => {
    const GetUserData = async () => {
      if (!userToken) return
      setIsLoading('User data')
      await axios
        .get<UserDTO>('https://api.learnhub.thanayut.in.th/auth/me', {
          headers: { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' },
        })
        .then((res) => {
          setUser(res.data)
          onSuccess('')
        })
        .catch((err: AxiosError<ErrorDTO>) => {
          setIsError(err?.response?.data || null)
          throw err
        })
    }
    GetUserData()
  }, [userToken])

  const onLogin = async (loginBody: LoginDTO) => {
    setIsLoading('Login')
    await axios
      .post<CredentialDTO>('https://api.learnhub.thanayut.in.th/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => res.data)
      .then((res) => {
        localStorage.setItem('token', res.accessToken)
        setUserToken(res.accessToken)
        onSuccess('Login')
      })
      .catch((err: AxiosError<ErrorDTO>) => {
        onError(err)
      })
  }

  const onLogout = () => {
    localStorage.clear()
    setUserToken(null)
    setUser(null)
    onSuccess('Logout')
  }

  const onCreateUser = async (registerBody: RegisterDTO, confirmPassword: string) => {
    if (confirmPassword !== registerBody.password) {
      setIsError({ message: 'Password not match', statusCode: 0, error: 'error' })
    }
    setIsLoading('Create User')
    await axios
      .post<RegisterDTO>('https://api.learnhub.thanayut.in.th/user', registerBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => res.data)
      .then(() => {
        onLogin(registerBody)
      })
      .catch((err: AxiosError<ErrorDTO>) => {
        onError(err)
      })
  }

  return {
    user,
    isLoading,
    isError,
    onLogin,
    onLogout,
    onCreateUser,
    onSuccess,
    isSuccess,
    setIsError,
    setIsLoading,
    onError,
  }
}
export default useAuth
