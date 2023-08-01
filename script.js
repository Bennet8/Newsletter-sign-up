const button1 = document.querySelector("button");
const input1 = document.querySelector("#input-email");
const containerEmail = document.querySelector(".label_error_div");

let errorMessageAdded = false;


function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const regex2 = /[ ]/.test(email);
    if (regex && !regex2) {
      return true;
    } else {
      return false;
    }
}



button1.addEventListener("click", () => {
  var userEmail = input1.value;
  if(userEmail === ""){
    input1.style.backgroundColor = "#ffd7d7";
    input1.style.border = "1px solid red";
     
     if(!errorMessageAdded){
          
      const newParagraph = document.createElement("p");
      newParagraph.textContent = "Valid email required";
      newParagraph.style.color = "red";
      newParagraph.style.fontSize = "12.8px";
      newParagraph.style.fontWeight = "550";
      containerEmail.appendChild(newParagraph);
      errorMessageAdded = true;

      input1.addEventListener("click", () => {
        input1.style.backgroundColor = "#fff";
        input1.style.border = "1px solid black";
        newParagraph.remove();
        errorMessageAdded = false;
        });
    }
    }else{
      window.location.href = `confirmation.html?email=${encodeURIComponent(userEmail)}`;
    }
});
