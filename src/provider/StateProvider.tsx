import { ReactNode, createContext, useContext } from 'react'
import useAppState from '../hooks/useAppState'

interface IStateProvider {
  children: ReactNode
}

type IStateContext = ReturnType<typeof useAppState>

const StateContext = createContext<IStateContext | null>(null)

export const useAppStatus = () => {
  const context = useContext(StateContext)
  if (!context) throw new Error()
  return context
}

const StateProvider = ({ children }: IStateProvider) => {
  const store: IStateContext = useAppState()
  return <StateContext.Provider value={store}>{children}</StateContext.Provider>
}
export default StateProvider
