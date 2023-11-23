let string = "";
let buttons = document.querySelectorAll(".button");
const inputField = document.querySelector("input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.innerHTML;

    if (buttonText === "=") {
      try {
        string = new Function("return " + string)();
        inputField.value = string;
      } catch (error) {
        inputField.value = "Error";
      }
    } else if (buttonText === "C") {
      string = "";
      inputField.value = string;
    } else {
      string += buttonText;
      inputField.value = string;
    }
  });
});
