const button = document.getElementById("b1")
function buttonPressed() {
    const container = document.getElementById("container");
    console.log(" i am button. ");
    const column1 = document.createElement("div");
    column1.className = "Column";
    container.appendChild(column1);
    
  }
button.style.backgroundColor = "red"
  button.onclick = buttonPressed;