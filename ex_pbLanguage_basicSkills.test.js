const { findCertainCities, isDivisible, getMissingAngle, allAreEqual, atLeastTwoAreEqual } = require('./ex_pbLanguage_basicSkills');

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


test('getMissingAngle() is correctly implemented', () => {
	expect(getMissingAngle(80, 80)).toBe('acute');
	expect(getMissingAngle(160, 10)).toBe('acute');
	expect(getMissingAngle(20, 10)).toBe('obtuse');
	expect(getMissingAngle(45, 45)).toBe('right angle');
});



test('allAreEqual() is correctly implemented', () => {
	expect(allAreEqual(1,1,1)).toBe(true);
	expect(allAreEqual(1,1,2)).toBe(false);
	expect(allAreEqual(1,2,3)).toBe(false);
});

test('atLeastTwoAreEqual() is correctly implemented', () => {
	expect(atLeastTwoAreEqual(1,2,2)).toBe(true);
	expect(atLeastTwoAreEqual(1,1,2)).toBe(true);
	expect(atLeastTwoAreEqual(1,2,'2')).toBe(false);
	expect(atLeastTwoAreEqual(1,2)).toBe(false);
	expect(atLeastTwoAreEqual(1,1)).toBe(false);
	expect(atLeastTwoAreEqual(1)).toBe(false);
	expect(atLeastTwoAreEqual(1,1,1)).toBe(true);
	expect(atLeastTwoAreEqual(2,99999999,2)).toBe(true);
	expect(atLeastTwoAreEqual(2,-121212,2)).toBe(true);
	expect(atLeastTwoAreEqual(1,2,3)).toBe(false);
	expect(atLeastTwoAreEqual(3, undefined, undefined)).toBe(true);
});