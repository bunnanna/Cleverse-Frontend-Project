import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO, ContentsDTO, CreateContentDTO } from '../types/contentdto'
import { ErrorDTO } from '../types/errordto'
import { useUser } from '../provider/AuthProvider'

const useContents = () => {
  const url = 'https://api.learnhub.thanayut.in.th/content/'
  const [contents, setContents] = useState<ContentDTO[]>([])
  const { setIsLoading, onError, onSuccess } = useUser()

  useEffect(() => {
    const fetchContents = async () => {
      setIsLoading('All Contents')
      await axios
        .get<ContentsDTO>(url)
        .then((res) => {
          onSuccess('All Contents')
          setContents(res.data.data)
        })
        .catch((err: AxiosError<ErrorDTO>) => {
          onError(err)
        })
    }
    fetchContents()
  }, [])

  const onCreateContent = async (newData: CreateContentDTO) => {
    setIsLoading('Create Content')
    await axios
      .post(url, newData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      })
      .then(() => onSuccess('Create Content'))
      .catch((err: AxiosError<ErrorDTO>) => {
        onError(err)
      })
  }

  return { contents, onCreateContent }
}
export default useContents
