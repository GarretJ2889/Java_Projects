document.addEventListener("DOMContentLoaded", function ()
{
	const noteContainer = document.getElementById("note-container");
	const newNoteButton = document.getElementById("new-note-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");

	// DONE: Load the note color from the local storage.
	let noteColor = localStorage.getItem("noteColor") || null; // Stores the selected note color from the form.
	
	// DONE: Load the note ID counter from the local storage.
	let noteIdCounter = localStorage.getItem("noteIdCounter") || 0; // Counter for assigning unique IDs to new notes.
	

	// DONE: Load the notes from the local storage.
	function localNotes (){
		let notes = localStorage.getItem("notes");
		if (!notes){
			notes = [];
		}
		else {
			notes = JSON.parse(notes);
		}
		return notes;
	}

	// DONE: Call the localNotes function to load the notes from the local storage.
	function saveNotes (notes){
		localStorage.setItem("notes", JSON.stringify(localNotes()));
	}

    // DONE: Display the notes from the saved notes in the note container.
    function loadNotes (notes){
		const notes = localNotes();
		for (const note of notes){
			const noteElement = document.createElement("textarea");
            noteElement.setAttribute("data-note-id", note.id.toString());
            noteElement.value = note.content; 
            noteElement.className = "note"; 
            noteElement.style.backgroundColor = noteColor;
            noteContainer.appendChild(note); 
        }
	}

	loadNotes();

	function addNewNote ()
	{
		const id = noteIdCounter;
		const content = `Note ${id}`;
		const note = document.createElement("textarea");
		note.setAttribute("data-note-id", id.toString());
		note.className = "note"; 
		note.style.backgroundColor = noteColor;
		noteContainer.appendChild(note);
		noteIdCounter++;


		// DONE: Add new note to the saved notes in the local storage.
        const notes = localNotes;
		notes.push({ id, content });
		saveNotes(notes);
		localStorage.setItem("noteIdCounter", noteIdCounter.toString()); // Updates the note ID counter in the local storage.
	}

	colorForm.addEventListener("submit", function (event)
	{
		event.preventDefault();
		const newColor = colorInput.value.trim(); 
		const notes = document.querySelectorAll(".note");
		for (const note of notes)
		{
			note.style.backgroundColor = newColor;
		}
		colorInput.value = ""; 
		noteColor = newColor; 



		// DONE: Update the note color in the local storage.
		localStorage.setItem("noteColor", noteColor);
	});

	newNoteButton.addEventListener("click", function ()
	{
		addNewNote();
	});

	document.addEventListener("dblclick", function (event){
		if (event.target.classList.contains("note")){
			event.target.remove();



			// DONE: Delete the note from the saved notes in the local storage.
			const id = Number(event.target.setAttribute("data-note-id"));
			const notes = localNotes();
			for (i = 0; i < notes.length; i++){
				if (notes[i].id == id){
                    notes.splice(i, 1);
                }
			}
			saveNotes(notes);
		}
	});

	noteContainer.addEventListener("blur", function (event)
	{
		if (event.target.classList.contains("note"))
		{


			// DONE: Update the note from the saved notes in the local storage.
			const id = Number(event.target.getAttribute("data-note-id"));
			const notes = localNotes();
			for (let i = 0; i < notes.length; i++){
				if (notes[i].id === id){
					notes[i].content = event.target.value;
				}
			}
			saveNotes(notes);
		}
	}, true);

	window.addEventListener("keydown", function (event)
	{
		if (event.target.id === "color-input" || event.target.type === "textarea")
		{
			return;
		}
		if (event.key === "n" || event.key === "N")
		{
			addNewNote();
		}
	});
});
