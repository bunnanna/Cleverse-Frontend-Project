import { useUser } from '../provider/AuthProvider'

const Toast = () => {
  const { isError, isLoading } = useUser()
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
