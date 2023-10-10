import { Link } from 'react-router-dom'
import useContents from '../../hooks/useContents'
import { useUser } from '../../provider/AuthProvider'
import ContentCard from './ContentCard'

const ContentList = () => {
  const { user } = useUser()
  const { contents } = useContents()

  return (
    <>
      {user && (
        <Link to={'/new'} className="w-full flex justify-end">
          <button className="btn btn-primary mx-32 mt-9 bg-orange-500">Crate New Content</button>
        </Link>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 my-9 mx-32">
        {contents.map((content) => {
          return <ContentCard key={content.id} content={content} />
        })}
      </div>
    </>
  )
}
export default ContentList
