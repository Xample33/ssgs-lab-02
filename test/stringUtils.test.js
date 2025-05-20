const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters
} = require('../src/stringUtils');

describe('reverseString', () => {
    test('dovrebbe invertire una stringa normale', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('dovrebbe gestire una stringa vuota', () => {
        expect(reverseString('')).toBe('');
    });

    test('dovrebbe gestire una stringa con un solo carattere', () => {
        expect(reverseString('a')).toBe('a');
    });
});

describe('isPalindrome', () => {
    test('dovrebbe rilevare un palindromo semplice', () => {
        expect(isPalindrome('anna')).toBe(true);
    });

    test('dovrebbe ignorare maiuscole e spazi', () => {
        expect(isPalindrome('A n Na')).toBe(true);
    });

    test('dovrebbe restituire false per stringhe non palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    test('dovrebbe gestire una stringa vuota come palindroma', () => {
        expect(isPalindrome('')).toBe(true);
    });
});

describe('truncateString', () => {
    test('dovrebbe troncare una stringa più lunga del limite', () => {
        expect(truncateString('Hello world', 5)).toBe('Hello...');
    });

    test('dovrebbe restituire la stringa se è più corta del limite', () => {
        expect(truncateString('Hi', 10)).toBe('Hi');
    });

    test('dovrebbe restituire la stringa se è esattamente lunga quanto il limite', () => {
        expect(truncateString('Hello', 5)).toBe('Hello');
    });
});

describe('countCharacters', () => {
    test('dovrebbe contare i caratteri correttamente', () => {
        expect(countCharacters('aabbc')).toEqual({ a: 2, b: 2, c: 1 });
    });

    test('dovrebbe gestire stringhe con spazi e simboli', () => {
        expect(countCharacters('a a!')).toEqual({ a: 2, ' ': 1, '!': 1 });
    });

    test('dovrebbe gestire una stringa vuota', () => {
        expect(countCharacters('')).toEqual({});
    });
});
