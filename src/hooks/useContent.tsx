import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ContentDTO, UpdateContentDTO } from '../types/contentdto'
import { ErrorDTO } from '../types/errordto'
import { useAppStatus } from '../provider/StateProvider'

const useContent = (id: string) => {
  const url = `https://api.learnhub.thanayut.in.th/content/${id}`
  const [content, setContent] = useState<ContentDTO | null>()
  const { onLoading, onError, onSuccess } = useAppStatus()

  useEffect(() => {
    const fetchContent = async () => {
      onLoading(`Content number ${id}`)
      await axios
        .get<ContentDTO>(url, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          setContent(res.data)
          onSuccess(``)
        })
        .catch((err: AxiosError<ErrorDTO>) => {
          onError(err)
        })
    }
    fetchContent()
  }, [url])

  const onUpdateContent = async (newData: UpdateContentDTO) => {
    onLoading(`Update Content number ${id}`)
    await axios
      .patch(url, newData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      })
      .then(() => onSuccess(`Update Content number ${id}`))
      .catch((err: AxiosError<ErrorDTO>) => {
        onError(err)
      })
  }

  const onDeleteContent = async () => {
    onLoading(`Delete Content number ${id}`)
    await axios
      .delete(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' },
      })
      .then(() => onSuccess(`Delete Content number ${id}`))
      .catch((err: AxiosError<ErrorDTO>) => {
        onError(err)
      })
  }

  return { content, onUpdateContent, onDeleteContent }
}
export default useContent
