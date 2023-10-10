import { ErrorDTO } from '../types/errordto'
interface IToastProps {
  isLoading?: boolean
  isError?: ErrorDTO | null
}
const Toast = ({ isError, isLoading }: IToastProps) => {
  return (
    <div className="toast toast-top toast-center">
      {isLoading && (
        <div className="alert alert-info">
          <span>Loading</span>
        </div>
      )}
      {isError && (
        <div className="alert alert-error">
          <span>{isError.message}</span>
        </div>
      )}
    </div>
  )
}
export default Toast
