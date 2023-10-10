import { useNavigate, useParams } from 'react-router-dom'
import useContent from '../../hooks/useContent'
import ReactPlayer from 'react-player/youtube'
import RatingStar from '../RatingStar'
import { useUser } from '../../provider/AuthProvider'

const Content = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { id } = useParams<string>()
  const { content, isLoading } = useContent(id || '1')
  if (isLoading || !content) return null
  return (
    <div className="card shadow-2xl bg-slate-50 border my-9 items-center">
      <div className="card-body justify-center items-center">
        <h2 className="card-title text-3xl font-bold text-orange-500">{content.videoTitle}</h2>
        <a href={content.creatorUrl} className="text-xl">
          By: {content.creatorName}
        </a>
      </div>

      <ReactPlayer url={content.videoUrl} />

      <div className="grid grid-cols-3 my-9 mx-4">
        <div className="flex flex-col gap-3 col-span-2">
          <p className="text-center text-3xl">Comment</p>
          <p className="text-xl">{content.comment}</p>
        </div>
        <div className="flex flex-col justify-end items-end gap-1">
          <RatingStar rating={content.rating} size={'rating-sm'} />
          <p>
            <span className="text-3xl">—</span> {content.postedBy.name}
          </p>
          <p>{new Date(content.createdAt).toDateString()}</p>
          {content.updatedAt && <p>(Update on {new Date(content.updatedAt).toDateString()})</p>}
          {user && user.id === content.postedBy.id && (
            <button
              className="btn btn-sm bg-orange-500 text-white font-bold text-xl"
              onClick={() => navigate(`/content/${content.id}/edit`)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Content
