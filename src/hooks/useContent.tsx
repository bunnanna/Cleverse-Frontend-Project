import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import BASEPATH from '../config/basePath'
import { useAppStatus } from '../provider/StateProvider'
import { ContentDTO, UpdateContentDTO } from '../types/contentdto'
import { ErrorDTO } from '../types/errordto'

const useContent = (id: string) => {
  const url = `${BASEPATH}/content/${id}`
  const [content, setContent] = useState<ContentDTO | null>()
  const { onLoading, onError, onSuccess } = useAppStatus()

  useEffect(() => {
    const fetchContent = async () => {
      onLoading(`Content number ${id}`)
      await axios
        .get<ContentDTO>(url)
        .then((res) => {
          setContent(res.data)
          onSuccess(``)
        })
        .catch((err: AxiosError<ErrorDTO>) => {
          onError(err)
        })
    }
    fetchContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const onUpdateContent = async (newData: UpdateContentDTO) => {
    onLoading(`Update Content number ${id}`)
    await axios
      .patch(url, newData)
      .then(() => onSuccess(`Update Content number ${id}`))
      .catch((err: AxiosError<ErrorDTO>) => {
        onError(err)
      })
  }

  const onDeleteContent = async () => {
    onLoading(`Delete Content number ${id}`)
    await axios
      .delete(url)
      .then(() => onSuccess(`Delete Content number ${id}`))
      .catch((err: AxiosError<ErrorDTO>) => {
        onError(err)
      })
  }

  return { content, onUpdateContent, onDeleteContent }
}
export default useContent
