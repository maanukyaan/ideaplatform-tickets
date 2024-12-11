import CurrencyPicker from "./@ui/CurrencyPicker";
import TransfersAmount from "./@ui/TransfersAmount";

export default function Filters() {
  return (
    <div className="flex min-h-[300px] min-w-[250px] flex-col gap-5 rounded-lg bg-white py-5 shadow-md">
      <CurrencyPicker />
      <TransfersAmount />
    </div>
  );
}
