//The simplest example of callback function

function someFunction(callback) {
	// ,,,,
	callback();
}

const logB = function() {
	console.log('b');
};

someFunction(logB);
