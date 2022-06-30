//Operations
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const ac = document.getElementById("AC");
const dot = document.getElementById("dot");
//Numbers
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
//Display
const display = document.getElementById("textarea");

// Global Variables
let operation = "";
let number = 0;
let num2 = 0;
let finalSum = 0;
let addDot = "";
let result = 0;
let beforeSum = 0;
//Operation Event Listeners
plus.addEventListener("click", () => {
  operation = "+";
});
minus.addEventListener("click", () => {
  operation = "-";
});
multiplication.addEventListener("click", () => {
  operation = "*";
});
division.addEventListener("click", () => {
  operation = "/";
});
equal.addEventListener("click", () => {
  sumNums();
});
ac.addEventListener("click", () => {
  display.innerHTML = "";
  operation = "";
  num2 = 0;
  number = 0;
});
dot.addEventListener("click", () => {
  addDot = ".";
});
//Number Event Listeners

one.addEventListener("click", () => {
    if(operation !== "+"){
        number = 1;
    }else{
        num2 = 1;
       
}
  });
  two.addEventListener("click", () => {
    if(operation == ""){
        number = 2;
    }else {
        num2 = 2;
       
    }
  });
  three.addEventListener("click", () => {
    if(operation == ""){
      number = 3;
  }else {
      num2 = 3;
     
  }
  });
  four.addEventListener("click", () => {
    if(operation == ""){
      number = 4;
  }else {
      num2 = 4;
     
  }
  });
  five.addEventListener("click", () => {
    if(operation == ""){
      number = 5;
  }else {
      num2 = 5;
     
  }
  });
  six.addEventListener("click", () => {
    if(operation == ""){
      number = 6;
  }else {
      num2 = 6;
     
  }
  });
  seven.addEventListener("click", () => {
    if(operation == ""){
      number = 7;
  }else {
      num2 = 7;
     
  }
  });
  eight.addEventListener("click", () => {
    if(operation == ""){
      number = 8;
  }else {
      num2 = 8;
     
  }
  });
  nine.addEventListener("click", () => {
    if(operation == ""){
      number = 9;
  }else {
      num2 = 9;
     
  }
  });
  zero.addEventListener("click", () => {
    if(operation == ""){
      number = 0;
  }else {
      num2 = 0;
     
  }
  });

function sumNums() {
  switch (operation) {
    case "+":
      result = num2 + number;
      display.innerHTML = result;
      break;
    case "*":
      result = num2 * number;
      display.innerHTML = result;
      break;
    case "/":
      result = num2 / number;
      display.innerHTML = result;
      break;
    case "-":
      result = num2 - number;
      display.innerHTML = result;
      break;
    default: display.innerHTML = "Error"
  }
}
