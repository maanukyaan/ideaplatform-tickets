export const CurrencyItem = ({
  currency,
  active = false,
  onCurrencySelect,
}: {
  currency: string;
  active?: boolean;
  onCurrencySelect: (currency: string) => void;
}) => (
  <div
    className={`flex w-1/3 cursor-pointer items-center justify-center rounded border border-black/10 px-5 py-2 text-xs uppercase transition-colors duration-200 first:rounded-r-none last:rounded-l-none even:rounded-none even:border-l-0 even:border-r-0 hover:border-l hover:border-r hover:border-blue hover:bg-blue/20 hover:text-blue ${
      active ? "bg-blue text-white" : ""
    }`}
    onClick={() => onCurrencySelect(currency)}
  >
    {currency}
  </div>
);
