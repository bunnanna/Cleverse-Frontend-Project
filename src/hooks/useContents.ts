import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO, ContentsDTO, CreateContentDTO } from '../types/contentdto'
import { ErrorDTO } from '../types/errordto'

const useContents = () => {
  const url = 'https://api.learnhub.thanayut.in.th/content/'
  const [contents, setContents] = useState<ContentDTO[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<ErrorDTO | null>(null)

  useEffect(() => {
    const fetchContents = async () => {
      setIsLoading(true)
      await axios
        .get<ContentsDTO>(url)
        .then((res) => setContents(res.data.data))
        .catch((err: AxiosError<ErrorDTO>) => {
          setIsError(err?.response?.data || null)
          throw err
        })

      setIsLoading(false)
    }
    fetchContents()
  }, [])

  const onCreateContent = async (newData: CreateContentDTO) => {
    setIsLoading(true)
    await axios
      .post(url, newData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      })
      .catch((err: AxiosError<ErrorDTO>) => {
        setIsError(err?.response?.data || null)
        throw err
      })
    setIsLoading(false)
  }

  return { contents, isLoading, isError, onCreateContent }
}
export default useContents
