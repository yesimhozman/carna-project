import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Going to the movies',
  'Tesla Cybertruck-inspired Electric Car',
  'Life in the 80s',
  '✨What is Done is Done ✨',
  'Fresh Prince',
  'Six Socks Studio',
  'The Best of the Best',
  'Traveling the World',
  'The Best of the Best',
  'New Year in New York',
  'Holiday in the City',
  'Road Trip to the Moon',
  'Dream Vacation with Friends',
  'My Mother is a Model',
];

const posts = [...Array(13)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/covers/cover_${index + 2}.jpg`,
  title: POST_TITLES[index + 1],
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  listen: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
