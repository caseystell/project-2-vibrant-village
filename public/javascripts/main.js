const requestCareBtn = document.getElementById("req-care-btn");

requestCareBtn.addEventListener("click", showChoiceButtons);

function showChoiceButtons() {
    const choiceButtons = document.getElementById("show-choices-menu");
    choiceButtons.style.visibility = "visible";
}
