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
        const items = [1, 2, 3];
        expect(remove(items, 1)).toBe(1);
        expect(items.length).toBe(2);
    });

    test('returns undefined if item to remove is not found', () => {
        const items = [1, 2, 3];
        expect(remove(items, 4)).toBe(undefined);
        expect(items.length).toBe(3);
    });
});