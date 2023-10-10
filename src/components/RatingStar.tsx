import { useState } from 'react'

interface IRatingStarProps {
  rating: number
  setRating?: (ratingNum: number) => void | null
  size?: 'rating-xs' | 'rating-sm' | 'rating-md' | 'rating-xl'
}
const RatingStar = ({ rating, setRating, size = 'rating-md' }: IRatingStarProps) => {
  const [currentRating, setCurrentRating] = useState(rating + 1)
  const changeable = !!setRating

  return (
    <div className={`rating ${size}`}>
      {[...new Array(5)].map((_, idx) => {
        return (
          <input
            key={idx}
            type="radio"
            name="rating-2"
            className={`mask mask-star-2 ${currentRating >= idx + 1 ? 'bg-orange-400' : 'bg-gray-400'} ${
              changeable ? '' : 'cursor-default'
            } `}
            onMouseEnter={() => changeable && setCurrentRating(idx + 1)}
            onClick={() => changeable && setRating(currentRating)}
          />
        )
      })}
    </div>
  )
}
export default RatingStar
