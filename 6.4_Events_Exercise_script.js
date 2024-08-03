// add event listener for when the DOM has fully loaded, this will ensure all elements are ready before trying to access them in your JavaScript code
document.addEventListener("DOMContentLoaded", function(){
    
    //elements to be worked on
    const boxContainer = document.getElementById("box-container");
	const newBoxButton = document.getElementById("new-box-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");

	let boxColor = null; // Stores box color from form
	let boxIdCounter = 0; // Counter for unique IDs to new boxes



    // function to add new box
	function addNewBox (){
		const box = document.createElement("div");

		box.setAttribute("data-box-id", boxIdCounter.toString());
		box.textContent = `Box ${boxIdCounter}`;
		box.className = "box";
		box.style.backgroundColor = boxColor;
		boxContainer.appendChild(box); 

		boxIdCounter++;
	}



    // get box color from form submission event and apply to all boxes
	colorForm.addEventListener("submit", function (event)
	{
		event.preventDefault();

		const newColor = colorInput.value.trim();
		const boxes = document.querySelectorAll(".box");

		for (const box of boxes){
			box.style.backgroundColor = newColor;
		}

		colorInput.value = ""; 
		boxColor = newColor;
	});



    // add new box when button is clicked
	newBoxButton.addEventListener("click", function (){
		addNewBox();
	});



    // double click on added boxes to remove
    boxContainer.addEventListener("dblclick", function (event){
        if (event.target.classList.contains("box")){
            event.target.remove ();
        }
    });



    // get box coordinates from mouse-over event
    boxContainer.addEventListener("mouseover", function (event){
        if (event.target.classList.contains("box")){
            event.target.textContent = `x: ${event.pageX}, y: ${event.pageY}`
        }
    });
    


    // return box text when mouse-out
    document.addEventListener("mouseout", function (event){
		if (event.target.classList.contains("box")){
			const boxId = event.target.getAttribute("data-box-id");
			event.target.textContent = `Box ${boxId}`;
		}
	});



    // create a new box when "n" is pressed on the keyboard
    document.addEventListener("keydown", function (event){

        // ignores if typing in color input field
        if (event.target.id === "color-input"){
            return;
        }

        // allows both lower and upper case to make new box
        if (event.key === "n" || event.key === "N" ){
            addNewBox();
        }
    });

    
  })