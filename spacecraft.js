/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
const activateHyperdrive = () => console.log('Hyperdrive Activated!');
activateHyperdrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => console.log('"No lifeforms detected"');
scanForLife();

/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinates = () => console.log('Coordinates: X: 45, Y: 66, Z: 100');
currentCoordinates();
/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = {
	name: "Galactic Voyager",
	receiveMessage: (message) =>
	{
		console.log(`Message received: ${message}`);
		console.log(`This spacecraft is: ${this.name}`);
	}
};
spacecraft.receiveMessage("Hello from Earth!");

/*
 * Observations:
 * TODO: The console.log statement prints "undefined" for `this.name` because arrow functions do not have their own `this` context.
 * it doesn't know that `this.name` is supposed to represent the ship name because it wasn't defined in the arrow function.
 */
