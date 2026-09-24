const button = document.querySelector("#statusButton");
const statusMessage = document.querySelector("#statusMessage");
// 3rd bug: The ID used here does not match the ID in the HTML file; it should be "statusMessage" instead of "statusMsg"

function showStatus() {
    console.log("Within showStatus function:Button double-clicked");
    statusMessage.textContent = "Status: Working as intended";
}

button.addEventListener("dblclick", showStatus);
