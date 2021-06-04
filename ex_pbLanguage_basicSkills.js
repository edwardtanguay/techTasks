/* eslint-disable no-console */

// findCertainCities
function findCertainCities(city) {
	if (city.toLowerCase().startsWith('bo') || city.toLowerCase().startsWith('lo')) {
		return city;
	}
	return 'not found';
}

module.exports = { findCertainCities };
// const getName = () => 'Michael';
// module.exports = findCertainCities;