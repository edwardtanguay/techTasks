function findCertainCities(city) {
	if (city.toLowerCase().startsWith('bo') || city.toLowerCase().startsWith('lo')) {
		return city;
	}
	return 'not found';
}

function isDivisible(number) {
	// return number >= 10 && number % 10 === 0 ? true : false;
	if (number < 10) return false;
	if (0) {
		return false;
	} else if (number % 10 === 0) {
		return true;
	} else {
		return false;
	}
}

function getMissingAngle(angle1, angle2) {
	// const angle3 = 180 - angle1 - angle2;
	// if (angle3 < 90) {
	// 	return 'acute';
	// } else if (angle3 === 90) {
	// 	return 'right';
	// } else {
	// 	return 'obtuse';
	// }
	const sumOfAngles = (angle1 + angle2);
	const angle3 = (180 - sumOfAngles);

	if (angle3 < 90) {
		return 'acute';
	} else if (angle3 === 90) {
		return 'right angle';
	} else {
		return 'obtuse';
	}
}

module.exports = { findCertainCities, isDivisible, getMissingAngle };