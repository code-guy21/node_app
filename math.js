function add(x, y) {
	return x + y;
}

function multiply(x, y) {
	return x * y;
}

function subtract(x, y) {
	return x - y;
}

function generateReadme(result) {
	return `# Output
	${result}`;
}

module.exports = { add, multiply, subtract, generateReadme };
