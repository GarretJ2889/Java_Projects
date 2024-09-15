/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = 'Dr. John Smith'
const age = '45'
const studyField = 'Physics'

const participant = {
    name,
    age,
    studyField
}
// Output: { name: 'participant', age: '', studyField: '' }
console.log(`Participant: ${name}, Age: ${age}, studyField: ${studyField}`)



/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participantCopy = {
	...participant,
	displayInfo (){
		console.log(`Participant: ${this.name}, Age: ${this.age}, studyField: ${this.studyField}`);
	}
};
participantCopy.displayInfo();



/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participantAnotherCopy = {
	...participant,
	displayInfo: () =>{
		console.log(`Participant: ${this.name}, Age: ${this.age}, studyField: ${this.studyField}`);
	}
};
participantAnotherCopy.displayInfo();
/*
 * Observations:
 * The Arrow function does not having its own 'this' property, it enharits the 'this' property
 * from the gobal scope which causes the output to be 'undefined'. This means the Arrow function
 * cannot access the participant object properties using the 'this' property.
 */



/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo (participant, key, value){
	return {
		...participant,
		[key]: value
	};
}
const updatedParticipant = updateParticipantInfo(participant, "Postion", "Projection Analysis");
console.log(updatedParticipant);