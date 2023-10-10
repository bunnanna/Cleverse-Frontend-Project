import { useNavigate } from 'react-router-dom'
import { ContentDTO, UpdateContentDTO } from '../../types/contentdto'
import { useState } from 'react'
import RatingStar from '../RatingStar'

interface IContentEditFormProps {
  contentData: ContentDTO
  id: string
  onUpdateContent: (newData: UpdateContentDTO) => Promise<void>
  onDeleteContent: () => Promise<void>
}
const ContentEditForm = ({ contentData, onUpdateContent, onDeleteContent, id }: IContentEditFormProps) => {
  const navigate = useNavigate()

  const { comment, rating } = contentData
  const [content, setcontent] = useState<UpdateContentDTO>({ comment, rating })
  const onHandleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcontent({ ...content, [e.target.name]: e.target.value })
  }

  const setRating = (ratingNum: number) => {
    setcontent({ ...content, rating: ratingNum })
  }

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onUpdateContent(content)
      .then(() => navigate(`/content/${id}`))
      .catch()
  }
  const onHandleDelete = () => {
    onDeleteContent()
      .then(() => navigate('/'))
      .catch()
  }
  return (
    <>
      <form className=" flex flex-col justify-between items-center gap-5 my-4 w-3/5" onSubmit={onHandleSubmit}>
        <h1 className=" text-orange-500 text-3xl font-bold">Edit content</h1>
        <div className="w-full flex flex-col min-w-xs items-start">
          <label>Comment (280 characters maximum)</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full min-w-xs bg-slate-100"
            defaultValue={content.comment}
            name="comment"
            onChange={onHandleFormChange}
          />
        </div>
        <div className="w-full flex flex-col min-w-xs items-start">
          <label>Rating</label>
          <RatingStar rating={rating} setRating={setRating} />
        </div>
        <button className="btn w-full bg-orange-500 hover:bg-orange-600 text-white">Edit</button>
        <div className="btn btn-error w-full text-white" onClick={onHandleDelete}>
          Delete
        </div>
      </form>
    </>
  )
}
export default ContentEditForm
