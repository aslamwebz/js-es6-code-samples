const personalInformation = {
	firstName: 'Dylan',
	lastName: "IS",
	city: 'austin',
	state:'Texas',
	zip:'12312'
};

// const{firstName, lastName} = personalInformation;

const{firstName:fn, lastName:ln} = personalInformation;

// console.log(`
// 	${firstName}
// 	${lastName}
// 	`);


console.log(`
	${fn}
	${ln}
	`);