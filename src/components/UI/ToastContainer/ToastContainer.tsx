import { useEffect, useState } from 'react'
import { useToastStore } from '@stores/index'

interface ToastProps {
  id: number;
  message: string;
  type: string;
}

function Toast({ id, message, type }: ToastProps) {
  const { removeToast } = useToastStore()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 10)

    const hideTimeout = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    const removeTimeout = setTimeout(() => {
      removeToast(id)
    }, 3000)

    return () => {
      clearTimeout(showTimeout)
      clearTimeout(hideTimeout)
      clearTimeout(removeTimeout)
    }
  }, [id, removeToast])

  return (
    <div
      className={ `toast ${type} transform transition-opacity duration-200 ease-in-out
       ${isVisible ? 'opacity-100' : 'opacity-0'} translate-y-0 max-w-sm w-full bg-white shadow-lg
        rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden` }>
      <div
        className={ `w-full flex items-center ${type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'} p-4` }>
        <div className="text-white max-w-xs ">
          { message }
        </div>
      </div>
    </div>
  )
}

export function ToastContainer() {
  const { toasts } = useToastStore()

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col space-y-2">
      { toasts.map((toast) => (
        <Toast key={ toast.id } { ...toast } />
      )) }
    </div>
  )
}
