import { useState } from 'react'
const ForgetPassword = () => {
  const [show, setShow] = useState(false)
  const onHandleClick = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 3000)
  }
  return (
    <>
      <div onClick={onHandleClick} className=" cursor-pointer">
        ForgetPassword?
      </div>
      {show && (
        <div className="toast toast-top toast-center ">
          <div className="alert alert-error bg-red-50">
            <span>Just Relax And Try It Again</span>
          </div>
        </div>
      )}
    </>
  )
}
export default ForgetPassword
