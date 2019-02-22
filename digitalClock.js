// write a function that takes in minutes, and returns the time in 24hr format

const minutes = [0,1,100,500,1000,1300,1500,4000,6000];


//example output

const output = ['00:01am','01:00am','01:40am','08:20am','04:40pm','11:59pm','00:00am',]

//note that the arrays won't equal to each other in javascript.




// start with accepting one
const printClockFormat = minuteInputs => {
	
	let formattedResponse =  minuteInputs.map(input => {
		
		let day = determineDays(input)[0];

		input = determineDays(input)[1];

		let hours = Math.floor((input / 60));

		let minutes = determineMinutes(input, hours);

		let amPm = "AM";

		// adding formatting and AM / PM	
		if (hours < 10) {
			hours = `0${hours}`
		} else if (hours > 12){
			amPm = "PM";
			hours -= 12;
		}

		// change to increasing the day
		return `${day} day past - time: ${hours}:${minutes}${amPm}`;
		
	})
		
	return formattedResponse;
};

// helper functions
const determineDays = input => {
	let day = 0;
	// 1440 minutes per day
	if (input >= 1440) {
		//determine how many days have passed
		day += Math.floor( input / 1440);
		input = (input / day - 1440);
	}
	return [day, input]
};

const determineMinutes = (input, hours) => {
	let minutes = input % 60
	//adding formatting
	if (minutes <= 10) {
		minutes+="0"
	}
	return minutes;
}





console.log(printClockFormat(minutes));














