// Import required modules
const math = require('./math'); // Import custom math module
const inquirer = require('inquirer'); // Import inquirer for user input
const fs = require('fs'); // Import fs for file system operations

// Prompt user for operation and numbers
inquirer
	.prompt([
		{
			type: 'list',
			name: 'operator',
			message: 'Which operation do you want to perform?',
			choices: ['add', 'multiply', 'subtract'],
		},
		{
			type: 'input',
			name: 'firstNumber',
			message: 'What is the first number?',
		},
		{
			type: 'input',
			name: 'secondNumber',
			message: 'What is the second number?',
		},
	])
	.then(answers => {
		// Log user's answers
		console.log(answers);

		let result;

		// Perform the selected operation
		if (answers.operator === 'multiply') {
			// Multiply operation
			result = math.multiply(answers.firstNumber, answers.secondNumber);
		} else if (answers.operator === 'add') {
			// Addition operation
			result = math.add(answers.firstNumber, answers.secondNumber);
		} else {
			// Subtraction operation
			result = math.subtract(answers.firstNumber, answers.secondNumber);
		}

		// Generate readme output and write it to a file
		let readmeOutput = math.generateReadme(result);
		fs.writeFileSync('output.md', readmeOutput);
	});
