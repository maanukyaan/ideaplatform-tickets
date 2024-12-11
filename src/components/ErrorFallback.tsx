export const ErrorFallback = ({
  // error,
  resetErrorBoundary,
}: {
  // error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div
      role="alert"
      className="flex w-full flex-col items-center justify-center p-5 text-xl text-red-500"
    >
      <h2>Что-то пошло не так</h2>
      {/* <pre>{error.message}</pre> */}
      <button onClick={resetErrorBoundary}>
        Пожалуйста, обновите страницу или попробуйте позже
      </button>
    </div>
  );
};
