import uniqid from 'uniqid';
import { ru } from 'date-fns/esm/locale';

const URL = 'https://engine.hotellook.com/api/v2/cache.json';

const SLIDER_IMAGES = [
  {
    id: uniqid(),
    link: 'https://content.api.news/v3/images/bin/54758dc1adee67c3c8689c4e59f8e70e?width=1280',
  },
  {
    id: uniqid(),
    link: 'https://media.cntraveler.com/photos/58e4005abdecd628dc467e91/master/pass/Exterior-TaylorRiverLodge-Colorado-CRHotel.jpg',
  },
  {
    id: uniqid(),
    link: 'https://www.kayak.com/rimg/himg/d2/2b/64/hotelsdotcom-462487-5313d364_w-061851.jpg?width=1366&height=768&crop=true',
  },
  {
    id: uniqid(),
    link: 'https://content.api.news/v3/images/bin/f8c05e33a89118ac4d68758823ffa330',
  },
];

const APP_LOCALE = ru;

export { URL, SLIDER_IMAGES, APP_LOCALE };
