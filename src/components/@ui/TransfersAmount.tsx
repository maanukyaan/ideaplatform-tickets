import { useState } from "react";
import { useTickets } from "../../context/TicketsContext";
import { Checkbox } from "./Checkbox";

export default function TransfersAmount() {
  const { selectedTransfers, setSelectedTransfers } = useTickets();
  const [hoveredTransfer, setHoveredTransfer] = useState<number | null>(null);

  const allTransfers = [0, 1, 2, 3];
  const isAllSelected = selectedTransfers.includes(-1);

  const handleTransferChange = (amount: number) => {
    if (amount === -1) {
      setSelectedTransfers([-1]);
      return;
    }

    let newTransfers = selectedTransfers.filter((t) => t !== -1);

    if (newTransfers.includes(amount)) {
      newTransfers = newTransfers.filter((t) => t !== amount);
      if (newTransfers.length === 0) {
        setSelectedTransfers([-1]);
        return;
      }
    } else {
      newTransfers = [...newTransfers, amount].sort();
    }
    setSelectedTransfers(newTransfers);
  };

  const handleOnlyClick = (amount: number) => {
    setSelectedTransfers([amount]);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="pl-5 text-xs uppercase">Количество пересадок</h3>
      <div className="flex flex-col gap-1">
        <label className="flex cursor-pointer items-center gap-3 rounded p-2 px-5 transition-colors hover:bg-blue-light">
          <Checkbox
            checked={isAllSelected}
            onChange={() => handleTransferChange(-1)}
          />
          <span className="text-sm">Все</span>
        </label>
        {allTransfers.map((amount) => (
          <div
            key={amount}
            className="relative"
            onMouseEnter={() => setHoveredTransfer(amount)}
            onMouseLeave={() => setHoveredTransfer(null)}
          >
            <label className="flex w-full cursor-pointer items-center gap-3 rounded p-2 px-5 transition-colors hover:bg-blue-light">
              <Checkbox
                checked={selectedTransfers.includes(amount)}
                onChange={() => handleTransferChange(amount)}
              />
              <span className="text-sm">
                {amount === 0
                  ? "Без пересадок"
                  : `${amount} ${amount === 1 ? "пересадка" : "пересадки"}`}
              </span>
            </label>
            {hoveredTransfer === amount &&
              selectedTransfers.length > 1 &&
              !isAllSelected && (
                <button
                  onClick={() => handleOnlyClick(amount)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-blue-500 hover:text-blue-700"
                >
                  ТОЛЬКО
                </button>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
