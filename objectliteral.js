// function addressMaker(city, state){
// 	const newAddress = {
// 		newCity:city,
// 		newState:state,
// 	};

// 	console.log(newAddress);
// }

function addressMaker(city, state){
	const newAddress = {
		city,
		state,
		country: 'United states',
	};

	console.log(`
		${newAddress.city},	${newAddress.state},${newAddress.country},
		`);

	console.log(newAddress);
}

addressMaker('austing', 'texas');