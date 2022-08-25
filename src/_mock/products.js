import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Family At The Airport',
  'Nationalities and Countries',
  'Places to Visit',
  'House and Home',
  'Numbers',
  'Colors',
  'Introducing the World',
  'Travel and Time',
  'Food and Drink',
  'Animals',
  'Sports',
  'Fashion',
  'Music',
  'Art and Culture',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const names = {
  "A1": "A1 Beginner",
  "A2": "A2 Elementary",
  "B1": "B1 Intermediate",
  "B2": "B2 Upper",
}


const products = [...Array(13)].map((_, index) => {
  const setIndex = index + 1;
  const status =  sample(['A1', 'A2', 'B1', 'B2']);
  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/products/${status}.jpg`, 
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: names[status],
  };
});

export default products;
