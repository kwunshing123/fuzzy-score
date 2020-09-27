import fuzzyScore from '../index';

test('Empty string', () => {
  expect(fuzzyScore('', '')).toBe(0);
});

test('Normal case 1', () => {
  expect(fuzzyScore('Workshop', 'b')).toBe(0);
});

test('Normal case 2', () => {
  expect(fuzzyScore('Room', 'o')).toBe(1);
});

test('Normal case 3', () => {
  expect(fuzzyScore('Workshop', 'w')).toBe(1);
});

test('Normal case 4', () => {
  expect(fuzzyScore('Workshop', 'ws')).toBe(2);
});

test('Normal case 5', () => {
  expect(fuzzyScore('Workshop', 'wo')).toBe(4);
});