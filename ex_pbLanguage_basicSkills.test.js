const { findCertainCities } = require('./ex_pbLanguage_basicSkills');

test('findCertainCities() finds correct cities', () => {
    expect(findCertainCities('Berlin')).toBe('not found');
    expect(findCertainCities('Bologna')).toBe('Bologna');
    expect(findCertainCities('bologna')).toBe('bologna');
    expect(findCertainCities('Paris')).toBe('not found');
    expect(findCertainCities('Los Angeles')).toBe('Los Angeles');
    expect(findCertainCities('London')).toBe('London');
    expect(findCertainCities('Brussels')).toBe('not found');
    expect(findCertainCities('Bordeaux')).toBe('Bordeaux');
});

