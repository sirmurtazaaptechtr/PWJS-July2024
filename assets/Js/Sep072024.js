// Get elements from the document
const noteTitle = document.getElementById('noteTitle'); // Input for the note's title
const addTxt = document.getElementById('addTxt'); // Input for the note's text
const addBtn = document.getElementById('addBtn'); // Button to add a note
const notes = document.getElementById('notes'); // Container to display notes
let notesArr = []; // Create an empty array to store notes

// Function to display notes
function disp_notes() {
    // Get saved notes from localStorage as a JSON string
    let saveNotesJSON = localStorage.getItem("notes");

    // Check if there are any saved notes
    if (saveNotesJSON == null) {
        // If no notes are saved, display a message
        notes.innerHTML = `
        <div class="alert alert-info" role="alert">
            Nothing to show!
        </div>`;
    } else {
        // If notes are found, parse the JSON string into a JavaScript array
        notesArr = JSON.parse(saveNotesJSON);
        
        // Clear the notes container and add a heading
        notes.innerHTML = `<h2>All Notes</h2>`;

        // Loop through each note and display it as a card
        notesArr.forEach(function (note, index) {
            notes.innerHTML += `
            <div class="col-lg-3 col-md-4">
                <div class="card">
                    <div class="card-header">
                        ${note.title} <!-- Note title in the card header -->
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${note.title}</h5> <!-- Note title inside the card -->
                        <p class="card-text">${note.text}</p> <!-- Note text inside the card -->
                        <button type="button" class="btn btn-danger" onclick="deleteNote(${index})">Delete</button> <!-- Delete button -->
                    </div>
                    <div class="card-footer text-body-secondary">
                        2 days ago <!-- Placeholder for when the note was created -->
                    </div>
                </div>
            </div>
            `;
        });
    }
}

function deleteNote(index) {
    // Get saved notes from localStorage
    let saveNotesJSON = localStorage.getItem("notes");
    
    // Parse them into the notesArr array
    notesArr = JSON.parse(saveNotesJSON);

    // Remove the note at the given index from the array
    notesArr.splice(index, 1);

     // Save the updated notesArr to localStorage as a JSON string
     localStorage.setItem("notes", JSON.stringify(notesArr));

    // Display the updated notes on the page
     disp_notes();

}

// Call the function to display notes on page load
disp_notes();

// Event listener for the "Add Note" button
addBtn.addEventListener("click", function () {
    // Get the values from the form inputs
    let titleValue = noteTitle.value; // Get the note title
    let textValue = addTxt.value; // Get the note text

    // Retrieve any previous notes from localStorage
    let saveNotesJSON = localStorage.getItem("notes");
    
    // If there are previous notes, parse them into the notesArr array
    if (saveNotesJSON != null) {
        notesArr = JSON.parse(saveNotesJSON); // Convert JSON string to array
    }

    // Append the new note to the notesArr array
    notesArr.push({ title: titleValue, text: textValue });

    // Save the updated notesArr to localStorage as a JSON string
    localStorage.setItem("notes", JSON.stringify(notesArr));

    // Display the updated notes on the page
    disp_notes();
});

