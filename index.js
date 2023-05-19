
//This code block is a function of the result container.
//It will pop up a window with the result when the submit button is pressed
//the background will be blur
const addBtn = document.getElementById('add-book-btn');
addBtn.addEventListener('click', addClick);
function addClick() {
    const formContainer = document.getElementById('form-container');
    const blurBackground = document.getElementById('blur-background');
    formContainer.style.display = "block"; 
    blurBackground.style.display = "block";
}

