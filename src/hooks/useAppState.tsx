import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ErrorDTO } from '../types/errordto'
import { useLocation } from 'react-router-dom'

const useAppState = () => {
  const [isLoading, setIsLoading] = useState<string>('')
  const [isSuccess, setIsSuccess] = useState<string>('')
  const [isError, setIsError] = useState<ErrorDTO | null>(null)

  const location = useLocation()

  const onLoading = (Loadingform: string) => {
    setIsLoading(Loadingform)
  }

  const onSuccess = (Successfrom: string) => {
    setIsLoading('')
    setIsSuccess(Successfrom)
    setTimeout(() => {
      setIsSuccess('')
    }, 3000)
  }

  const onError = (err: AxiosError<ErrorDTO> | ErrorDTO) => {
    setIsLoading('')
    let errorValue: ErrorDTO | null
    let errError: AxiosError<ErrorDTO> | Error
    if (err instanceof AxiosError) {
      errorValue = err?.response?.data || null
      errError = err
    } else {
      errorValue = err
      errError = new Error(err.message)
    }

    setIsError(errorValue)
    throw errError
  }

  useEffect(() => {
    setIsError(null)
    setIsLoading('')
  }, [location.pathname])

  return {
    isLoading,
    isError,
    isSuccess,
    onSuccess,
    onLoading,
    onError,
  }
}
export default useAppState
