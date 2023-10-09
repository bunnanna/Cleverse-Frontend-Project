interface IRatingStarProps {
  rating: number
  changeable: boolean
}
const RatingStar = ({ rating, changeable }: IRatingStarProps) => {
  return (
    <div className="rating">
      {[...new Array(5)].map((_, idx) => {
        return (
          <input
            key={idx}
            type="radio"
            name="rating-2"
            className={`mask mask-star-2 bg-orange-400 ${changeable ? '' : 'cursor-default'}`}
            checked={rating === idx + 1}
            disabled={!changeable}
          />
        )
      })}
    </div>
  )
}
export default RatingStar
