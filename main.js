//Operations
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('division');
const equal = document.getElementById('equal');
const ac = document.getElementById('AC');
const dot = document.getElementById('dot')
//Numbers
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six   = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
//Display
const display = document.getElementById('textarea');

// Variables

let operation = '';
let number = 0;
let finalSum = 0;
let addDot = "";
//Operation Event Listeners
plus.addEventListener('click', () =>{
    operation = "+"
})
minus.addEventListener('click', () =>{
   operation = "-"
})
multiplication.addEventListener('click', () =>{
    operation = "*"
})
division.addEventListener('click', () =>{
    operation = "/"
})
equal.addEventListener('click', () =>{
    sumNums();
})
ac.addEventListener('click', () =>{
    display.innerHTML = '';
})
dot.addEventListener('click', () =>{
    addDot = "."
})
//Number Event Listeners

one.addEventListener('click', () =>{
   number = 1;
})
two.addEventListener('click', () =>{
    number = 2;
})
three.addEventListener('click', () =>{
    number = 3;
})
four.addEventListener('click', () =>{
    number = 4;
})
five.addEventListener('click', () =>{
    number = 5;
})
six.addEventListener('click', () =>{
    number = 6;
})
seven.addEventListener('click', () =>{
    number = 7;
})
eight.addEventListener('click', () =>{
    number = 8;
})
nine.addEventListener('click', () =>{
    number = 9;
})
zero.addEventListener('click', () =>{
    number = 0;
})
function sumNums(){
    switch(operation){
        case "+":
            break; 
    }
}