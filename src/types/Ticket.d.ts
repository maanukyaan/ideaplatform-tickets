export interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: `${number}.${number}.${number}`;
  departure_time: `${number}:${number}`;
  arrival_date: `${number}.${number}.${number}`;
  arrival_time: `${number}:${number}`;
  carrier: string;
  stops: number;
  price: number;
}
