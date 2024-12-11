import { ITicket } from "../types/Ticket";
import { convertPrice, formatCurrency } from "../utils/currency";
import { formatDate } from "../utils/formatDate";
import Button from "./@ui/Button";

const Ticket = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
  currency = "RUB",
}: ITicket & { currency?: string }) => {
  const convertedPrice = convertPrice(price, "RUB", currency);
  const formattedPrice = formatCurrency(convertedPrice, currency);

  return (
    <div className="flex h-[130px] w-full min-w-[450px] rounded-lg bg-white shadow-md">
      <div className="left flex w-[200px] flex-col items-center justify-center gap-5 border-r border-black/10 px-7 py-5">
        <img
          src={`/companies/${carrier.toLowerCase()}.svg`}
          alt={`${carrier} logo`}
          className="h-8 w-auto"
        />
        <Button className="w-full">
          <span className="block">Купить</span>
          <span className="block font-medium">за {formattedPrice}</span>
        </Button>
      </div>
      <div className="right grow px-7 py-5">
        <div className="flex flex-col">
          <div className="time flex w-full items-center justify-between gap-x-5">
            <span className="min-w-[75px] text-3xl font-normal">
              {departure_time}
            </span>
            <div
              className="relative flex w-[40%] flex-col items-center"
              id="timeLine"
            >
              <span className="text-xs text-black/40">
                {stops === 0
                  ? "без пересадок"
                  : stops === 1
                    ? `${stops} пересадка`
                    : `${stops} пересадки`}
              </span>
              <div className="mt-1 h-px w-full bg-black/20"></div>
            </div>
            <span className="min-w-[75px] text-3xl font-normal">
              {arrival_time}
            </span>
          </div>
          <div className="info mt-2 flex items-center justify-between">
            <div className="left flex flex-col">
              <span className="text-xs font-semibold">
                {origin}, {origin_name}
              </span>
              <span className="text-xs text-black/40">
                {formatDate(departure_date)}
              </span>
            </div>
            <div className="right flex flex-col">
              <span className="text-xs font-semibold">
                {destination}, {destination_name}
              </span>
              <span className="text-xs text-black/40">
                {formatDate(arrival_date)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
