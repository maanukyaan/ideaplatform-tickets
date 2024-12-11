import { useEffect, useState } from "react";
import { ticketsJsonAPIUrl } from "../config";
import { useTickets } from "../context/TicketsContext";
import { ITicket } from "../types/Ticket.d";
import Ticket from "./Ticket";

export const TicketsContainer = () => {
  const { selectedCurrency, selectedTransfers } = useTickets();
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(ticketsJsonAPIUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch tickets: ${response.statusText}`);
        }
        const data = await response.json();
        setTickets(data.tickets);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("An error occurred while fetching tickets"),
        );
      }
    };

    fetchTickets();
  }, []);

  if (error) {
    throw error;
  }

  const filteredTickets = tickets.filter((ticket) => {
    // Если выбран вариант ВСЕ (-1), показывать все билеты
    if (selectedTransfers.includes(-1)) return true;

    // Иначе фильтруем по количеству пересадок
    return selectedTransfers.includes(ticket.stops);
  });

  return (
    <div className="flex max-h-[630px] w-full flex-col gap-5 overflow-y-scroll pr-3">
      {filteredTickets.map((ticket, index) => (
        <Ticket key={index} {...ticket} currency={selectedCurrency} />
      ))}
    </div>
  );
};
