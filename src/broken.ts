// Example code that breaks the specified TypeScript ESLint rules

const unusedVariable = 42; // This variable is declared but not used

function greet(name: string) {
	console.log("Hello, " + name);
} // Missing explicit return type and parameter type

class Greeter {
	message;
	constructor(msg: any) {
		this.message = msg;
	} // Missing property type declaration and parameter type
}