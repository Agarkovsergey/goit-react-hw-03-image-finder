import axios from 'axios';

const IMAGES_PER_PAGE = 12;
const PIXABAY_KEY = '22740436-05bbd607dbbc32bdc3528cde5';
const PIXABAY_URL = 'https://pixabay.com/api';

export const search = (q, page) => {
  return axios
    .get(PIXABAY_URL, {
      params: {
        q,
        page,
        per_page: IMAGES_PER_PAGE,
        key:  PIXABAY_KEY,
        image_type: 'photo',
        orientation: 'horizontal'
      }
    })
}
