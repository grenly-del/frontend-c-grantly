const calculateAge = (birthYear) => 2019 - birthYear

const yearUntilRetirement = ({year, firstName}) => {
	let age = calculateAge(year);
	let retirement = 60 - age;

 console.log(retirement > 0 ? `${firstName} retires in ${retirement} years` : `${firstName} is already retired.`)
}

export {yearUntilRetirement}

