let names = ['bob', ['sarah', ['jesse', ['borrat', ['veronica', ['norman']]]]]];

const capitalizeNames = names => {
	let capitalNames = names.map(name => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	})
	return capitalNames;
}

let outputArray = [];
const outputFunction = names => {
	outputArray = [...outputArray];
	names.forEach(name => {
		if (Array.isArray(name)) {
			outputFunction(name)
		} else {
			outputArray.push(name)
		}
	
	})
	return outputArray
}



console.log(capitalizeNames(outputFunction(names)))	



