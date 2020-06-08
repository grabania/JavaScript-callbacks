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

		return 'thisis from a';
	}, 1000);
}
function logB(param) {
	console.log('b');
	console.log(param);
}

const a = logA();
logB(a);
