
//This code block is a function of the result container.
//It will pop up a window with the result when the submit button is pressed
//the background will be blur
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', submitClick);
function submitClick() {
    const resultContainer = document.getElementById('result-container');
    const blurBackground = document.getElementById('blur-background');
    resultContainer.style.display = "block"; 
    blurBackground.style.display = "block";
}

