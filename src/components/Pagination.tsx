interface IPaginationProps {
  chunkNum: number
  chunkLen: number
  setChunkNum: React.Dispatch<React.SetStateAction<number>>
}
const Pagination = ({ chunkNum, chunkLen, setChunkNum }: IPaginationProps) => {
  return (
    <div className="join">
      <button
        className={`join-item btn ${chunkNum == 0 ? 'cursor-not-allowed' : ''}`}
        onClick={() => chunkNum !== 0 && setChunkNum((prev) => prev - 1)}
      >
        Previous
      </button>
      {[...new Array(chunkLen)].map((_, idx) => {
        return (
          <button
            key={idx}
            className={`join-item btn ${chunkNum == idx ? ' bg-orange-500' : ''}`}
            onClick={() => setChunkNum(idx)}
          >
            {idx + 1}
          </button>
        )
      })}
      <button
        className={`join-item btn ${chunkNum == chunkLen - 1 ? 'cursor-not-allowed' : ''}`}
        onClick={() => chunkNum !== chunkLen - 1 && setChunkNum((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  )
}
export default Pagination
