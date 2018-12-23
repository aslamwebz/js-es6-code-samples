//Classes

//Animal.Js

export class Animal{
	constructor(type, legs){
		this.type = type;
		this.legs = legs;
	}

	meow(sound = 'Loud Noise'){
		console.log(sound)
	}

	static return10(){
		return 10;
	}

	get metaData(){
		return `Type: ${this.type}, Legs: ${this.legs}`
	}
}


//Cat.js

import {Animal} from './classes.js';

let cat = new Animal('Cat', 4);

console.log(cat.type);
console.log(cat.legs);


cat.legs = 3;


cat.makeNoise();
cat.makeNoise('Meow');



console.log(Animal.return10());

console.log(cat.metaData());


//Export extended classes

export class Cat extends Animal{
	constructor(type, legs, tail){
		super(type, legs);
		this.type = type;
		this.legs = legs;
		this.tail = tail;
	}

	makeNoise(sound = "meow"){
		console.log(sound);
	}
}

//Cat extended 

import {Animal, Cat} from './Animal.js';

let cat = new Cat('Cat', 4);

cat.makeNoise();

console.log(cat.metaData);