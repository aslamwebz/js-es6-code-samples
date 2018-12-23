//Arrow Functions

function add(...nums){

	let total1  = nums.reduce(function(x,y) {
		return x + y;
	});

	console.log(total1);


	let total2  = nums.reduce((x,y) => x + y);

	console.log(total2);
}

add(4,6,7,4,3); 