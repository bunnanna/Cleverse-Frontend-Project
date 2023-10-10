import { useUser } from '../provider/AuthProvider'

const Toast = () => {
  const { isLoading, isError, isSuccess } = useUser()
  return (
    <div className="toast toast-top toast-center">
      {isLoading && (
        <div className="alert alert-info">
          <span className="loading loading-spinner loading-md"></span>
          <span>Loading for {isLoading}</span>
        </div>
      )}
      {isError && (
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
          <span>Error: {isError.message}</span>
        </div>
      )}
      {isSuccess && (
        <div className="alert bg-green-200 text-black">
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{isSuccess} Complete</span>
        </div>
      )}
    </div>
  )
}
export default Toast
