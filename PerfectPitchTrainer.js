 // ================================
// Perfect Pitch Trainer
// Phase 2 - Random Note Generator
// ================================

 const notes = [
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4"
];
// Create a piano-like synth
const synth = new Tone.Synth().toDestination(); 

// Stores the current note
let currentNote = "";

// Buttons and text
const hearButton = document.querySelector(".hear-btn");
const currentNoteText = document.querySelector(".current-note");

// Function to choose a random note
function getRandomNote() {

    const randomIndex = Math.floor(Math.random() * notes.length);

    return notes[randomIndex];

}

// When Hear Note is clicked
hearButton.addEventListener("click", function () {

    currentNote = getRandomNote();

    console.log("Current Note:", currentNote);

    // Display it on the page
    currentNoteText.textContent = "Current Note: " + currentNote;

});