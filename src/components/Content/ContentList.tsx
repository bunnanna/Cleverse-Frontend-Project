import { Link } from 'react-router-dom'
import useContents from '../../hooks/useContents'
import { useUser } from '../../provider/AuthProvider'
import ContentCard from './ContentCard'
import Pagination from '../Pagination'
import { useEffect, useState } from 'react'
import Dropdown from '../Dropdown'

const ContentList = () => {
  const { user } = useUser()
  const { contents } = useContents()
  const [chunkNum, setChunkNum] = useState(0)
  const [chunkLen, setChunkLen] = useState(0)
  const [rating, setRating] = useState(0)

  useEffect(() => {
    setChunkLen(
      Math.ceil(
        contents.filter((val) => {
          if (rating === 0) return true
          return val.rating === rating
        }).length / 20,
      ),
    )
  }, [contents, rating])

  return (
    <div className="mx-32 my-9 flex flex-col gap-12">
      <div className="w-full flex justify-between">
        <Dropdown rating={rating} setRating={setRating} />
        <Pagination chunkNum={chunkNum} setChunkNum={setChunkNum} chunkLen={chunkLen} />
      </div>
      <div className="flex justify-end">
        {user && (
          <button className="btn btn-primary bg-orange-500 ">
            <Link to={'/new'}>Crate New Content</Link>
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
        {contents
          .filter((val) => {
            if (rating === 0) return true
            return val.rating === rating
          })
          .slice(chunkNum * 20, (chunkNum + 1) * 20)
          .map((content) => {
            return <ContentCard key={content.id} content={content} />
          })}
      </div>
    </div>
  )
}
export default ContentList
