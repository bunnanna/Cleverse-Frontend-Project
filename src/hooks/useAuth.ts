import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { CredentialDTO, LoginDTO, RegisterDTO, UserDTO } from '../types/authdto'
import { ErrorDTO } from '../types/errordto'
import { useLocation } from 'react-router-dom'

const useAuth = () => {
  const [userToken, setUserToken] = useState<string | null>(localStorage.getItem('token'))
  const [user, setUser] = useState<UserDTO | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<ErrorDTO | null>(null)
  const location = useLocation()

  useEffect(() => {
    setIsError(null)
    setIsLoading(false)
  }, [location.pathname])

  useEffect(() => {
    const GetUserData = async () => {
      if (!userToken) return
      setIsLoading(true)
      await axios
        .get<UserDTO>('https://api.learnhub.thanayut.in.th/auth/me', {
          headers: { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' },
        })
        .then((res) => setUser(res.data))
        .catch((err: AxiosError<ErrorDTO>) => {
          setIsError(err?.response?.data || null)
          throw err
        })

      setIsLoading(false)
    }
    GetUserData()
  }, [userToken])

  const onLogin = async (loginBody: LoginDTO) => {
    setIsLoading(true)
    await axios
      .post<CredentialDTO>('https://api.learnhub.thanayut.in.th/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => res.data)
      .then((res) => {
        localStorage.setItem('token', res.accessToken)
        setUserToken(res.accessToken)
      })
      .catch((err: AxiosError<ErrorDTO>) => {
        setIsError(err?.response?.data || null)
        throw err
      })
      .finally(() => setIsLoading(false))
  }

  const onLogout = () => {
    localStorage.clear()
    setUserToken(null)
    setUser(null)
  }

  const onCreateUser = async (registerBody: RegisterDTO, confirmPassword: string) => {
    if (confirmPassword !== registerBody.password) {
      setIsError({ message: 'Password not match', statusCode: 0, error: 'error' })
    }
    setIsLoading(true)
    await axios
      .post<RegisterDTO>('https://api.learnhub.thanayut.in.th/user', registerBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => res.data)
      .then(() => {
        onLogin(registerBody)
      })
      .catch((err: AxiosError<ErrorDTO>) => {
        setIsError(err?.response?.data || null)
        throw err
      })
    setIsLoading(false)
  }

  return { user, isLoading, isError, onLogin, onLogout, onCreateUser }
}
export default useAuth
