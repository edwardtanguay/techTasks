function findCertainCities(city) {
	if (city.toLowerCase().startsWith('bo') || city.toLowerCase().startsWith('lo')) {
		return city;
	}
	return 'not found';
}

function isDivisible(number) {
	return number >= 10 && number % 10 === 0 ? true : false;
}

module.exports = { findCertainCities, isDivisible };