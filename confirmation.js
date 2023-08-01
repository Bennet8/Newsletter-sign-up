const urlParams = new URLSearchParams(window.location.search);
const userEmail = urlParams.get("email");

const userEmailElement = document.getElementById("user-email");
userEmailElement.textContent = userEmail;