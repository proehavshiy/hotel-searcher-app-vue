const getFormattedRUCurrency = (price) => Number.parseInt(price, 10).toLocaleString('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0, // не отбрасывает дробную часть в цифрах вида 7000.50
});

const getFormattedRUDate = (date) => {
  const fDate = typeof date === 'number' ? new Date(date) : date;

  return fDate.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).slice(0, -2);
};

export default function format(type, value) {
  switch (type) {
    case 'currency':
      return getFormattedRUCurrency(value);
    case 'date':
      return getFormattedRUDate(value);
    default:
      return null;
  }
}
