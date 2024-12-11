import { createContext, ReactNode, useContext, useState } from "react";

type TicketsContextType = {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  selectedTransfers: number[];
  setSelectedTransfers: (transfers: number[]) => void;
};

const TicketsContext = createContext<TicketsContextType | undefined>(undefined);

export function TicketsProvider({ children }: { children: ReactNode }) {
  const [selectedCurrency, setSelectedCurrency] = useState("RUB");
  const [selectedTransfers, setSelectedTransfers] = useState<number[]>([-1]);

  return (
    <TicketsContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        selectedTransfers,
        setSelectedTransfers,
      }}
    >
      {children}
    </TicketsContext.Provider>
  );
}

export function useTickets() {
  const context = useContext(TicketsContext);
  if (context === undefined) {
    throw new Error("useTickets must be used within a TicketsProvider");
  }
  return context;
}
