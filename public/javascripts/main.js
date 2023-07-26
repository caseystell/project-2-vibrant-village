const unfulfilledCheckBox = document.getElementById("unfulfilled-btn");
const careReqLogEl = document.getElementById("care-request-log");
const fulfilledStatusEl = document.getElementById("fulfilled-status");

unfulfilledCheckBox.addEventListener("click", hideFulfilled);

function hideFulfilled() {
    console.log("I am checked!")
    if (unfulfilledCheckBox.checked && fulfilledStatusEl.contains("Yes")) {
        console.log("Is this true?")
        careReqLogEl.style.display === "none";     
    }
}