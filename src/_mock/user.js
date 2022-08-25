import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map(() => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/review.jpg`,
  name:sample([
    'Present Simple',
    'Third Person',
    'Present Continuous',
    'Present Perfect',
    'Past Simple',
    'Past Continuous',
    'Past Perfect',
    'Future Simple',
  ]),
  company: sample([
    'vegetable',
    'travel',
    'fruit',
    'animal',
    'vehicle',
    'food',
    'tool',
    'clothing',
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(["passed", "failed"]),
  role: sample([
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
  ]),
}));

export default users;
