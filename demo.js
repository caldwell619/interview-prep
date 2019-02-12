// write a function that takes in minutes, and returns the time in 24hr format

const minutes = [1, 60, 100, 500, 1000, 1120, 1439, 0];

// start with accepting one
const printClockFormat = minuteInputs => {
	let outputArray = [];
	minuteInputs.forEach(input => {
		// 60 minutes per hour
	let day = 0;
	// 1440 minutes per day
	if (input >= 1440) {
		//determine how many days have passed
		day += Math.floor( input / 1440);
		input = (input / day - 1440);
	}
	// findout the hours and minutes individually
	let hours = Math.floor((input / 60));
	let minutes = ((input / 60).toFixed(2)) - hours;
	minutes = Math.round(minutes * 60);
	//adding formatting
	if (minutes <= 10) {
		minutes+="0"
	}
	let amPm = "";
	let zero = "";
	let output = "";

	// adding formatting and AM / PM	
	if (hours < 10) {
		amPm = "AM";
		zero = "0";
		hours = `${zero}${hours}`
	} else if (hours > 12){
		amPm = "PM";
		hours -= 12;
		hours = `${hours}`
	}

	// change to increasing the day
		output = `${day} day past - time: ${hours}:${minutes}${amPm}`;
		outputArray.push(output);
	})
	
	return outputArray;
};


console.log(printClockFormat([0,1,100,500,1000,1300,1500,4000,6000]));