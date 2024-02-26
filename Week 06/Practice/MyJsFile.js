// Select elements
// const h1 = document.getElementById("h1");
// const button1 = document.getElementById("b1");

// // Modify element styles
// h1.style.color = "red";
// document.body.style.backgroundColor = "aqua";
// document.getElementById("h2").style.color = "green";
// button1.style.backgroundColor = "red";

// // Event listener for button click
// // button1.onclick = changeName;

// // Function to change button text and display an alert
// function changeName() {
//     button1.innerHTML = "I am Clicked";
//     alert("Button Clicked");
// }

// // Event listener for button click to create a ball
// button1.onclick = createMyBall;

// Function to create a ball
// function createMyBall() {
//     const ball = document.createElement("div");
//     ball.style.width = "20px";
//     ball.style.height = "20px";
//     ball.style.backgroundColor = "blue";
//     ball.style.position = "absolute";
//     ball.style.top = "50px";
//     ball.style.left = "50%";
//     ball.style.transform = "translateX(-50%)";
//     document.body.appendChild(ball);
// }

// function ButtonPressed(){
//     const container = document.getElementById("container")
//     const ball = document.getElementById("div")
//     ball.className= "ball"
//     container.appendChild(ball)
// }


const h1 = document.getElementById("h1");
h1.style.color = "blue";
h1.style.backgroundColor = "skyBlue";

const h2 = document.getElementById("h2");

const b1 = document.getElementById("b1");

b1.style.color = "Green";
b1.style.backgroundColor = "red";

function buttonPressed() {
  // alert("Hey there  i am button");

  const container = document.getElementById("container");

  console.log(" i am button. ");
  for(i=0;1<=2;i++){

  
  const ball = document.createElement("div");

  ball.className = "ball";
  container.appendChild(ball);}
}

b1.onclick = buttonPressed;
