//The simplest example of callback function

function someFunction(callback) {
	// ,,,,
	callback();
}

const logC = function() {
	console.log('c');
};

someFunction(logC);

//Using setTimeout()

function logA() {
	setTimeout(() => {
		console.log('a');

		return 'this is from a';
	}, 1000);
}
function logB(param) {
	console.log('b');
	console.log(param);
}

const a = logA();
logB(a);

//Using callback()

function logZ(callback) {
	setTimeout(() => {
		console.log('z');

		const someValue = 'this is from z';
		callback(someValue);
	}, 1000);
}
function logY(param) {
	console.log('y');
	console.log(param);
}

logZ(logY);

//Another using of callback

const multiplay = (elem) => elem * 2;

const arr = [ 1, 3, 5 ].map(multiplay); //muliply : it is callback

console.log(arr);

// or as an anonym function:
// const arr = [ 1, 3, 5 ].map((elem) => elem * 2);
// console.log(arr);

//Transform this piece of code with using callback:
// const arr1 = [ 4, 6, 10 ];

// function transformArray() {
// 	for (let i = 0; i < arr1.length; i++) {
// 		arr1[i] = arr1[i] * 2;
// 	}
// }

// transformArray(arr1);
// console.log(arr1);

const arr1 = [ 4, 6, 10 ];

const odd = (elem) => elem - 1;
const sum = (elem) => elem + 2;
const multiply = (elem) => elem * 2;

const transformArray = (arr, callback) => {
	for (let i = 0; i < arr1.length; i++) {
		arr[i] = callback(arr1[i]);
	}
};

transformArray(arr, odd);

console.log(arr);
