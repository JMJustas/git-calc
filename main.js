function sum(arg1, arg2) {
	return arg1 + arg2
}
function sub(arg1, arg2) {
    return arg1 - arg2;
}

function div(arg1, arg2) {
	if (arg2 === 0) {
		throw new Error('Division by zero is not allowed.')
	}
	return arg1 / arg2
}

function main() {
	const arg1 = parseInt(process.argv[2])
	const arg2 = parseInt(process.argv[4])
	const operation = process.argv[3]

	switch(operation) {
		case '+':
			console.log(sum(arg1, arg2))
			break;
		case '-':
			console.log(sub(arg1, arg2));
			break;
		case '/':
			console.log(div(arg1, arg2))
			break;
		default:
			console.err('Unknown operation: ' + operation)	
			process.exit(1);
	}
}

main();
