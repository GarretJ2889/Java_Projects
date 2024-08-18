const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];


// Map function to create a new array with updated data.
const updateUsers = users.map(function(user) {
	return {
        //Combines the names of the users
		fullName: `${user.firstName}' ${user.lastName}`,
        
		//Updates membership status
		mebership: user.points >= 100 ? "Premium" : "Standard"
    };
});

// output updated array
console.log(updateUsers);