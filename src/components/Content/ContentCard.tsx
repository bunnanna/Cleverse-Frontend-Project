import { IContentDTO } from '../../types/contentdto'
import RatingStar from '../RatingStar'

const contentProto: IContentDTO = {
  id: 1,
  videoTitle: 'ฉลามชอบงับคุณ - Bonnadol Feat IIVY B [Official MV]',
  videoUrl: 'https://www.youtube.com/watch?v=IkxhsTwNybU',
  comment: 'แนะนำเลยครับ',
  rating: 5,
  thumbnailUrl: 'https://i.ytimg.com/vi/IkxhsTwNybU/hqdefault.jpg',
  creatorName: 'Bonnadol',
  creatorUrl: 'https://www.youtube.com/c/bonnadol',
  postedBy: {
    id: 'b9e1a5c5-ff16-4e50-8bb3-cb76d8900f70',
    username: 'john',
    name: 'John Doe',
    registeredAt: '2022-01-01T00:00:00.000Z',
  },
  createdAt: '2022-01-01T00:00:00.000Z',
  updatedAt: '2022-01-01T00:00:00.000Z',
}

const ContentCard = () => {
  return (
    <div className="card shadow-xl">
      <figure>
        <img className="object-cover" src={contentProto.thumbnailUrl} alt={contentProto.videoUrl} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{contentProto.videoTitle}</h2>
        <p>{contentProto.creatorName}</p>
        <p>{contentProto.comment}</p>
        <div className="card-actions justify-between">
          <div className="">{contentProto.postedBy.name}</div>
          <div className="">
            <RatingStar rating={contentProto.rating} changeable={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentCard
