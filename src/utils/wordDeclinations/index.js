function getDayDeclination(formatter) {
  if (formatter === 0 || formatter >= 5) {
    return ' дней';
  }
  if (formatter > 1) {
    return ' дня';
  }
  return ' день';
}

function getHotelDeclination(formatter) {
  if (formatter === 0 || formatter >= 5) {
    return 'отелей';
  }
  if (formatter === 1) {
    return 'отель';
  }
  return 'отеля';
}

export default function getRUDeclination(word, formatter) {
  switch (word) {
    case 'hotel':
      return getHotelDeclination(formatter);
    case 'day':
      return getDayDeclination(formatter);
    default:
      return null;
  }
}
