import { useParams } from 'react-router-dom'
import Toast from '../Toast'
import useContent from '../../hooks/useContent'
import ContentEditForm from './ContentEditForm'

const ContentEdit = () => {
  const { id } = useParams()
  const { content, onUpdateContent, onDeleteContent, isLoading, isError } = useContent(id || '1')
  let node: React.ReactNode | null = null
  if (content)
    node = (
      <ContentEditForm
        contentData={content}
        onUpdateContent={onUpdateContent}
        onDeleteContent={onDeleteContent}
        id={id || '1'}
      />
    )
  return (
    <>
      <Toast isLoading={isLoading} isError={isError} />
      {node}
    </>
  )
}
export default ContentEdit
