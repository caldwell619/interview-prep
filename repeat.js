// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

const repeatStringNumTimes = (value, repeatNumber) => {
	let output = "";
	if (repeatNumber > 0) {
		for (let i = 0; i < repeatNumber; i++){
		output+=value
		}
	}
	return output;
}



