// Моковые курсы обмена (в реальном приложении они будут поступать из API)
const exchangeRates = {
  RUB: 1,
  USD: 0.0095, // 1 RUB = 0.0095 USD
  EUR: 0.009,  // 1 RUB = 0.009  EUR
};

export const convertPrice = (
  price: number,
  fromCurrency: string,
  toCurrency: string,
): number => {
  if (fromCurrency === toCurrency) return price;

  const priceInRub =
    fromCurrency === "RUB"
      ? price
      : price / exchangeRates[fromCurrency as keyof typeof exchangeRates];

  return priceInRub * exchangeRates[toCurrency as keyof typeof exchangeRates];
};

export const formatCurrency = (price: number, currency: string): string => {
  const formatter = new Intl.NumberFormat(
    currency === "RUB" ? "ru-RU" : "en-US",
    {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
  );

  return formatter.format(price);
};
