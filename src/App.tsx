import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";
import Filters from "./components/Filters";
import { Loading } from "./components/Loading";
import { TicketsContainer } from "./components/TicketsContainer";
import { TicketsProvider } from "./context/TicketsContext";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background pt-8">
      <img src="/logo.png" alt="Logo" className="mb-8 size-14" />

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <TicketsProvider>
          <div className="lg :px-20 flex w-full items-start justify-between gap-x-5 px-5 2xl:px-[400px]">
            <Filters />
            <Suspense fallback={<Loading />}>
              <TicketsContainer />
            </Suspense>
          </div>
        </TicketsProvider>
      </ErrorBoundary>
    </div>
  );
}
