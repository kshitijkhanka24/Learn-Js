// Topics Covered
// ---> operators
// ---> loops
// ---> functions

// Operators : Arithmatic, Assignment, Relational & Logical

// Arithmatic operators
let num1 = 10;
let num2 = 20;

console.log(`Additon Operator (+) : ${num1+num2}`);
console.log(`Substraction Operator (-) : ${num1-num2}`);
console.log(`Multiplicatio Operator (*) : ${num1*num2}`);
console.log(`Division Operator (/) : ${num1/num2}`);
console.log(`Remainder/Modulus Operator (%) : ${num1%num2}`);
console.log(`Power Operator (**) : ${num1**num2}`);

// Assignment & Increment Operators

// num1 = num1 + 1; -> i.e. adding 1 to num1's original value / incrementing values.... can be written as
console.log(`Value of num1 : ${num1}`);

console.log(`Increment Operator (++) : ${num1++}`); // this is post increment so you will still see the past value of num1, to fix this use pre increment i.e. ++num1

console.log(`Value of num1 : ${num1}`);

console.log(`Decrement Operator (--) : ${--num1}`); // using pre decrement 

console.log(`Value of num1 : ${num1}`);


// Assignment Operators (=)
// You can write num1 = num1 + 1 as num1 += 1;
num1 += num2;
console.log(`Increment Assignment (+=) : ${num1}`);

num1 -= num2;
console.log(`Decrement Assignment (-=) : ${num1}`);
// and so on more *, /, % & ** .


// Relational Operators
// Used to write logic, gives either True or False as output

let result;
result = 4>5; // 4 greater than 5
console.log(`Result : ${result}`);

result = 4>=5; // 4 greater than or equal to 5
console.log(`Result : ${result}`);

result = 4==5; // 4 equal to 5
console.log(`Result : ${result}`);

result = 4<5; // 4 less than 5
console.log(`Result : ${result}`);

result = 4<=5; // 4 less than or equal to 5
console.log(`Result : ${result}`);


// Logical Operators
// Used to write logic, gives either True or False as output

// AND : && => Gives true if all given statements are true
// OR : || => Gives true if either one of the statements is true
// NOT : ! => Inverses the given result i.e. if true is returned by statement it will make it false

// Go through Loops once before this!

let condition1 = true;
let condition2 = true;

if(condition1 && condition2){
    console.log("Both conditions were true!");
}

condition1 = false;
if(condition1 || condition2){
    console.log("Atleast one of the conditions are true!");
}

if(!(condition1)){
    console.log("The condition was false!");
}


// Loops : If-Else & Ternary Operator, If-ElseIf-Else & Switch, For, For Each, While & Do While

// If - Else
// if the statement inside if(here) returns true then if block will execute or else block will.

result = 4 < 5;

if(result){
    console.log("If Block Executed!");
}else{
    console.log("Else Block Executed!");
}

result = 4 > 5;

if(result){
    console.log("If Block Executed!");
}else{
    console.log("Else Block Executed!");
}

// Or to write this in one line use Ternary operator (?)

result? console.log("If Block Executed!") : console.log("Else Block Executed!");
// first part executes is result is true or else second part.


// If-Else If-Else

let number = 5;

if(number == 2){
    console.log("If Block Executed!");
}else if(number == 5){
    console.log("Else-If Block Executed!");
}else{
    console.log("Else Block Executed!");
}

// To write above statements cleaner, use switch
switch(number){
    case 2 : 
        console.log("Case 2 Block Executed!");
        break;
    case 5 :
        console.log("Case 5 Block Executed!");
        break;
    default :
        console.log("Default Block Executed!");
}


// For Loop
// Syntax : for(initaialization; condition; increment/decrement){ Operations }

for(let i = 1; i <= 10; i++){
    //operations
    console.log(i);
}

// For Each Loop
// Used on arrays
// Syntax : arr_name.forEach(function)

let student_names = ["Kshitij", "Tonny", "Albus"];

student_names.forEach(name => console.log(name));


// While 
// used instead of for loop : when you dont know how many times your loop will run
// Syntax : while(condition){ operations & increment}
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

// to use infinite while loop do : while(true){ operations }


// Do while (useless)
// It will execute atleast once even if condition is false

do{
    console.log("Hello!");
}while(false);


// Funtions : Normal Functions & Arrow Functions

// 1 : Normal Functions
// Syntax : function func_name(arguements){ operations }
// or Syntax : let func_name = function(arguements){ operations }
greet("Kshitij");

function greet(name){
    console.log(`Hello ${name}`);
}
// You can use this function before declaration w/o error

// 2 : Arrow Functions
// Syntax : let func_name = (arguements) => { operations }

greet_again("Kshitij"); // will throw error
let greet_again = (name) => console.log(`Hello ${name}`);
greet_again("Kshitij");

// You can use this function before declaration w/o error


// Variable Length arguements : what if you wanted to pass any lenght of arguements

// in arguements write (...arr_name) & in normal functions you can use arguements keyword instead.

function print(){
    console.log(arguments); // this is an object i.e. key:value pair.
}

print("Kshitij", "Tonny", "Albus");
// you can not do this using arguements keyword in arrow functions instead use (...arr_name)

let print_again = (...names) => {
    console.log(names); // but this is Array
}
print_again("Kshitij", "Tonny", "Albus");


// If a function is passed as an arguement in another function, this is called higher order functions and the function given as arguement is called callback.

function add(ele1, ele2, func){
    let ans = ele1 + ele2;
    func(ans);
}
function func(ans){
    console.log(ans);
}
add(1,2, func);
// Function can also return a function

function add2(ele1, ele2){
    return ()=>{console.log(ele1+ele2)}
}
let returned_func = add2(3,5);
console.log(returned_func); // gives [Function (anonymous)]
returned_func(); // gives 8 i.e. performs the operations