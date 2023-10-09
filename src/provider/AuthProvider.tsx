import { ReactNode, createContext, useContext } from 'react'
import useAuth from '../hooks/useAuth'

interface IAuthProvider {
  children: ReactNode
}

type IAUthContext = ReturnType<typeof useAuth>

const AuthContext = createContext<IAUthContext | null>(null)

export const useUser = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error()
  return context
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const store: IAUthContext = useAuth()
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}
export default AuthProvider
