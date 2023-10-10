import { ContentDTO } from '../../types/contentdto'
import RatingStar from '../RatingStar'
interface IContentCardProps {
  content: ContentDTO
}
const ContentCard = ({ content }: IContentCardProps) => {
  return (
    <div className="card shadow-xl">
      <figure>
        <img className="object-cover aspect-video" src={content.thumbnailUrl} alt={content.videoUrl} />
      </figure>
      <div className="card-body p-3 justify-between">
        <h2 className="card-title font-normal text-base text-gray-700">{content.videoTitle}</h2>
        <div className=" text-sm text-gray-500">
          <p>{content.creatorName}</p>
          <p>{content.comment}</p>
        </div>
        <div className="card-actions justify-between">
          <div className="text-sm whitespace-normal">{content.postedBy.name}</div>
          <div className="">
            <RatingStar rating={content.rating} size={'rating-sm'} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentCard
