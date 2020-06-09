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
