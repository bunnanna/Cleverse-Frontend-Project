import useContents from '../../hooks/useContents'
import ContentCard from './ContentCard'

const ContentList = () => {
  const { contents, isLoading, isError } = useContents()
  if (isLoading) return <span className="loading loading-spinner loading-lg"></span>
  if (isError)
    return (
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>
    )

  return (
    <div className="grid grid-cols-5 gap-8 my-9 mx-32">
      {contents.map((content) => {
        return <ContentCard key={content.id} content={content} />
      })}
    </div>
  )
}
export default ContentList
