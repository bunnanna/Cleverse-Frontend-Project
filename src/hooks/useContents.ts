import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import BASEPATH from '../config/basePath'
import { useAppStatus } from '../provider/StateProvider'
import { ContentDTO, ContentsDTO, CreateContentDTO } from '../types/contentdto'
import { ErrorDTO } from '../types/errordto'

const useContents = () => {
  const url = `${BASEPATH}/content/`
  const [contents, setContents] = useState<ContentDTO[]>([])
  const { onLoading, onError, onSuccess } = useAppStatus()

  useEffect(() => {
    const fetchContents = async () => {
      onLoading('All Contents')
      await axios
        .get<ContentsDTO>(url)
        .then((res) => {
          onSuccess('')
          setContents(res.data)
        })
        .catch((err: AxiosError<ErrorDTO>) => {
          onError(err)
        })
    }
    fetchContents()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const onCreateContent = async (newData: CreateContentDTO) => {
    onLoading('Create Content')
    await axios
      .post(url, newData)
      .then(() => onSuccess('Create Content'))
      .catch((err: AxiosError<ErrorDTO>) => {
        onError(err)
      })
  }

  return { contents, onCreateContent }
}
export default useContents
