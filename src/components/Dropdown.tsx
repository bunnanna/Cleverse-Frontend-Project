interface IPaginationProps {
  rating: number
  setRating: React.Dispatch<React.SetStateAction<number>>
}
const Dropdown = ({ rating, setRating }: IPaginationProps) => {
  return (
    <details className="dropdown ">
      <summary className="m-1 btn">Rating</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {[...new Array(5)].map((_, idx) => {
          return (
            <li
              className={`${rating === idx + 1 ? 'bg-gray-600' : ''}`}
              key={idx}
              onClick={() => {
                setRating(idx + 1)
              }}
            >
              <a>{idx + 1}</a>
            </li>
          )
        })}
        <li
          onClick={() => {
            setRating(0)
          }}
        >
          <a>Clear</a>
        </li>
      </ul>
    </details>
  )
}
export default Dropdown
