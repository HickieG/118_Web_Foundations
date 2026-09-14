const placeholder = document.querySelector("#laserPlaceholder");
const laserButton = document.querySelector("#laserButton");

function changePhoto() {
    placeholder.textContent = "Laser items go here!";
}

laserButton.addEventListener("click", changePhoto);

/* This script is functioning well for changing the placeholder text when the laser button is clicked. However, further iterations would want to include the other storefront items
without violating the DRY principle. Further work will need to be done for this JavaScript file to handle other buttons and placeholders efficiently. */
