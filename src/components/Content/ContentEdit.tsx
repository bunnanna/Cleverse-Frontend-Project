import { Navigate, useParams } from 'react-router-dom'
import Toast from '../Toast'
import useContent from '../../hooks/useContent'
import ContentEditForm from './ContentEditForm'
import { useUser } from '../../provider/AuthProvider'

const ContentEdit = () => {
  const { id } = useParams()
  const { user } = useUser()
  const { content, onUpdateContent, onDeleteContent, isLoading, isError } = useContent(id || '1')

  return (
    <>
      <Toast isLoading={isLoading} isError={isError} />
      {content &&
        user &&
        (content.postedBy.id === user.id ? (
          <ContentEditForm
            contentData={content}
            onUpdateContent={onUpdateContent}
            onDeleteContent={onDeleteContent}
            id={id || '1'}
          />
        ) : (
          <Navigate to={`/content/${id}`} replace />
        ))}
    </>
  )
}
export default ContentEdit
