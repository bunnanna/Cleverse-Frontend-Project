import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import BASEPATH from '../config/basePath'
import { useAppStatus } from '../provider/StateProvider'
import { CredentialDTO, LoginDTO, RegisterDTO, UserDTO } from '../types/authdto'
import { ErrorDTO } from '../types/errordto'

const useAuth = () => {
  const [userToken, setUserToken] = useState<string | null>(localStorage.getItem('token'))
  const [user, setUser] = useState<UserDTO | null>(null)
  const { onLoading, onError, onSuccess } = useAppStatus()

  useEffect(() => {
    const GetUserData = async () => {
      if (!userToken) return
      onLoading('User data')
      await axios
        .get<UserDTO>(`${BASEPATH}/auth/me`, {
          headers: { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' },
        })
        .then((res) => {
          setUser(res.data)
          onSuccess('')
        })
        .catch((err: AxiosError<ErrorDTO>) => {
          onError(err)
        })
    }
    GetUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken])

  const onLogin = async (loginBody: LoginDTO) => {
    onLoading('Login')
    await axios
      .post<CredentialDTO>(`${BASEPATH}/auth/login`, loginBody, {
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
      onError({ message: 'Password not match' })
    }
    onLoading('Create User')
    await axios
      .post<RegisterDTO>(`${BASEPATH}/user`, registerBody, {
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
    onLogin,
    onLogout,
    onCreateUser,
  }
}
export default useAuth
