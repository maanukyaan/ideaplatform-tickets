export function formatDate(
  dateStr: `${number}.${number}.${number}`
): `${number} ${string} ${number}, ${string}` {

  // 09.10.18 – 9 окт 2018, Пт
  const date = new Date(
    `20${dateStr.slice(6)}-${dateStr.slice(3, 5)}-${dateStr.slice(0, 2)}`
  );

  const months: string[] = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];

  const weekdays: string[] = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];

  return `${day} ${month} ${year}, ${weekday}`;
}
