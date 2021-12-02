import { choice, remove } from './helpers';

describe('choice', () => {
    test('returns random number from items list', () => {
        expect(choice([1, 2, 3])).toEqual(expect.any(Number));
    });

    test('returns random string from items list', () => {
        expect(choice(["one", "two", "three"])).toEqual(expect.any(String));
    });
});

describe('remove', () => {
    test('removes item from list', () => {
        expect(remove([1, 2, 3], 1)).toBe(1);
    });

    test('returns undefined if item to remove is not found', () => {
        expect(remove([1, 2, 3], 4)).toBe(undefined);
    });
});