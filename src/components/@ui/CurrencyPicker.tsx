import { useTickets } from "../../context/TicketsContext";
import { CurrencyItem } from "./CurrencyItem";

export default function CurrencyPicker() {
  const { selectedCurrency, setSelectedCurrency } = useTickets();
  const currencies = ["RUB", "USD", "EUR"];

  return (
    <div className="flex flex-col gap-2 px-5">
      <p className="text-gray-600 text-xs uppercase">Валюта</p>
      <div
        id="currencySelect"
        className="flex w-full items-center justify-between"
      >
        {currencies.map((item) => (
          <CurrencyItem
            key={item}
            currency={item}
            active={item === selectedCurrency}
            onCurrencySelect={setSelectedCurrency}
          />
        ))}
      </div>
    </div>
  );
}
