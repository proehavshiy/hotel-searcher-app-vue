import { SLIDER_IMAGES, URL } from '@/constants';

export const fetchHotels = async ({
  city, date, days, limit = 10,
}) => {
  const dateObj = new Date(date);
  const checkInDate = dateObj.toISOString().split('T')[0];
  const checkOudDate = new Date(dateObj.setDate(dateObj.getDate() + days)).toISOString().split('T')[0];

  const adress = `${URL}?location=${city}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOudDate}&limit=${limit}`;
  const response = await fetch(adress);
  const responseData = await response.json();

  return responseData;
};

// mock of the slider images api request
// eslint-disable-next-line no-unused-vars
export const fetchImages = async ({ searchParam }) => {
  let responseData;

  await new Promise((resolve, reject) => {
    const flag = true;
    if (flag) {
      setTimeout(() => {
        responseData = SLIDER_IMAGES;
        resolve();
      }, 2000);
    } else {
      reject(new Error('Ошибка получения картинок'));
    }
  });

  return responseData;
};

// eslint-disable-next-line no-unused-vars
export const fetchLogin = async ({ loginParams }) => {
  let responseData;

  await new Promise((resolve, reject) => {
    const flag = true;
    if (flag) {
      setTimeout(() => {
        responseData = { isLogined: true };
        resolve();
      }, 2000);
    } else {
      reject(new Error('Ошибка логина'));
    }
  });

  return responseData;
};
