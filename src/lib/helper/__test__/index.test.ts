import {formatDateTime, getValueByKey} from '../helper';

test('getValueByKey', () => {
  const obj = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'Jakarta',
      country: 'Indonesia',
    },
  };

  expect(getValueByKey(obj, 'name')).toBe('John Doe');
  expect(getValueByKey(obj, 'age')).toBe(30);
  expect(getValueByKey(obj, 'address.city')).toBe('Jakarta');
  expect(getValueByKey(obj, 'address.country')).toBe('Indonesia');
  expect(getValueByKey(obj, 'address.country', 'default')).toBe('Indonesia');
  expect(getValueByKey(obj, 'address.country', 'default')).toBe('Indonesia');
  expect(getValueByKey(obj, 'address.province', 'default')).toBe('default');
});

test('formatDateTime', () => {
  const date = '2020-01-01T00:00:00.000Z';
  expect(formatDateTime(date)).toBe('1 Januari 2020 07.00');
});
