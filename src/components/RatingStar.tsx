interface IRatingStarProps {
  rating: number
  changeable: boolean
}
const RatingStar = ({ rating, changeable }: IRatingStarProps) => {
  return (
    <div className="rating rating-sm">
      {[...new Array(5)].map((_, idx) => {
        return (
          <input
            key={idx}
            type="radio"
            name="rating-2"
            className={`mask mask-star-2 ${rating > idx + 1 ? 'bg-orange-400' : 'bg-gray-400'} ${
              changeable ? '' : 'cursor-default'
            } `}
          />
        )
      })}
    </div>
  )
}
export default RatingStar
