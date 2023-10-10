import { useState } from 'react'
import { CreateContentDTO } from '../../types/contentdto'
import RatingStar from '../RatingStar'
import useContents from '../../hooks/useContents'
import { useNavigate } from 'react-router-dom'
const initCreateContent: CreateContentDTO = {
  videoUrl: '',
  comment: '',
  rating: 5,
}
const ContentCreate = () => {
  const navigate = useNavigate()
  const { onCreateContent } = useContents()
  const [content, setcontent] = useState<CreateContentDTO>(initCreateContent)
  const onHandleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcontent({ ...content, [e.target.name]: e.target.value })
  }
  const setRating = (ratingNum: number) => {
    setcontent({ ...content, rating: ratingNum })
  }
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreateContent(content)
      .then(() => {
        navigate('/')
      })
      .catch()
  }
  return (
    <>
      <form className=" flex flex-col justify-between items-center gap-5 my-4 w-3/5" onSubmit={onHandleSubmit}>
        <h1 className=" text-orange-500 text-3xl font-bold">Create new content</h1>
        <div className="w-full flex flex-col items-start">
          <label>Video URL</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full bg-slate-100"
            name="videoUrl"
            onChange={onHandleFormChange}
          />
        </div>
        <div className="w-full flex flex-col min-w-xs items-start">
          <label>Comment (280 characters maximum)</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full min-w-xs bg-slate-100"
            name="comment"
            onChange={onHandleFormChange}
          />
        </div>
        <div className="w-full flex flex-col min-w-xs items-start">
          <label>Rating</label>
          <RatingStar rating={content.rating} setRating={setRating} />
        </div>
        <button className="btn w-full bg-orange-500 hover:bg-orange-600 text-white">Create</button>
      </form>
    </>
  )
}
export default ContentCreate
