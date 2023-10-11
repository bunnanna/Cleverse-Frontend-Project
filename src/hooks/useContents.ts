import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO, ContentsDTO, CreateContentDTO } from '../types/contentdto'
import { ErrorDTO } from '../types/errordto'
import { useAppStatus } from '../provider/StateProvider'

const useContents = () => {
  const url = 'https://api.learnhub.thanayut.in.th/content/'
  const [contents, setContents] = useState<ContentDTO[]>([])
  const { onLoading, onError, onSuccess } = useAppStatus()

  useEffect(() => {
    const fetchContents = async () => {
      onLoading('All Contents')
      await axios
        .get<ContentsDTO>(url)
        .then((res) => {
          onSuccess('')
          setContents(res.data.data)
        })
        .catch((err: AxiosError<ErrorDTO>) => {
          onError(err)
        })
    }
    fetchContents()
  }, [url])

  const onCreateContent = async (newData: CreateContentDTO) => {
    onLoading('Create Content')
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
