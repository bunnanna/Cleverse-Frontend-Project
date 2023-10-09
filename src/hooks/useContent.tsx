import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO, UpdateContentDTO } from '../types/contentdto'
import { ErrorDTO } from '../types/errordto'

const useContent = (id: number) => {
  const url = `https://api.learnhub.thanayut.in.th/content/${id}`
  const [content, setContent] = useState<ContentDTO | null>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<ErrorDTO | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true)
      await axios
        .get<ContentDTO>(url, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
        })
        .then((res) => setContent(res.data))
        .catch((err: AxiosError<ErrorDTO>) => {
          setIsError(err?.response?.data || null)
          throw err
        })
      setIsLoading(false)
    }
    fetchContent()
  }, [url])

  const onUpdateContent = async (newData: UpdateContentDTO) => {
    setIsLoading(true)
    await axios
      .patch(url, newData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      })
      .catch((err: AxiosError<ErrorDTO>) => {
        setIsError(err?.response?.data || null)
        throw err
      })
    setIsLoading(false)
  }

  const onDeleteContent = async () => {
    setIsLoading(true)
    await axios
      .delete(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      })
      .catch((err: AxiosError<ErrorDTO>) => {
        setIsError(err?.response?.data || null)
        throw err
      })
    setIsLoading(false)
  }

  return { content, isLoading, isError, onUpdateContent, onDeleteContent }
}
export default useContent
