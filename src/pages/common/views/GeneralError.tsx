type GeneralErrorProps = {
  error: Error;
  resetErrorBoundary?: () => void;
};

export function GeneralError({ error, resetErrorBoundary }: GeneralErrorProps) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl mb-4">Ups! Algo salió mal.</h1>
      <p className="mb-4">{ error.message }</p>
      { resetErrorBoundary && (
        <button
          onClick={ resetErrorBoundary }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Intentar de nuevo
        </button>
      ) }
    </div>
  )
}
