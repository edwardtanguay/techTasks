const { findCertainCities, isDivisible } = require('./ex_pbLanguage_basicSkills');

test('findCertainCities() is correctly implemented', () => {
    expect(findCertainCities('Berlin')).toBe('not found');
    expect(findCertainCities('Bologna')).toBe('Bologna');
    expect(findCertainCities('bologna')).toBe('bologna');
    expect(findCertainCities('Paris')).toBe('not found');
    expect(findCertainCities('Los Angeles')).toBe('Los Angeles');
    expect(findCertainCities('London')).toBe('London');
    expect(findCertainCities('Brussels')).toBe('not found');
    expect(findCertainCities('Bordeaux')).toBe('Bordeaux');
});

test('isDivisible() is correctly implemented', () => {
    expect(isDivisible(200)).toBe(true);
    expect(isDivisible(3010)).toBe(true);
    expect(isDivisible(11)).toBe(false);
    expect(isDivisible(0)).toBe(false);
    expect(isDivisible(10)).toBe(true);
    expect(isDivisible(-10)).toBe(false);
    expect(isDivisible(11)).toBe(false);
    expect(isDivisible(9)).toBe(false);
    expect(isDivisible(-1111)).toBe(false);
    expect(isDivisible(200)).toBe(true);
    expect(isDivisible(162)).toBe(false);
    expect(isDivisible(333.4234)).toBe(false);
});
