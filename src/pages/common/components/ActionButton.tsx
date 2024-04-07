type ActionButtonProps = {
  taskName: string
}

export default function ActionButton({ taskName }: ActionButtonProps) {
  const handleClick = () => {
    alert(`Cambiar estado de: ${taskName}`)
  }

  return (
    <button
      onClick={ handleClick }
      className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-150 ease-in-out"
    >
      Cambiar Estado
    </button>
  )
}
