import { Navigate, useParams } from 'react-router-dom'
import useContent from '../../hooks/useContent'
import ContentEditForm from './ContentEditForm'
import { useUser } from '../../provider/AuthProvider'

const ContentEdit = () => {
  const { id } = useParams()
  const { user } = useUser()
  const { content, onUpdateContent, onDeleteContent } = useContent(id || '1')

  return (
    <>
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
