// Topics Covered
// ---> Console
// ---> var, let & const
// ---> Datatypes


// logging in chrome console (ctrl + shift + i)
console.log("Hello World");

// variable declaration

// var
console.log(name);
var name = "Kshitij";
var name = "K";
console.log(name);

// This is global declaration, you can print it before declaring but will give undefined
// Can be declared multiple times w/o error
//e.g.
{
    var surname = "Khanka";
}
console.log(surname);

// -------------------------------------------- 
// let
console.log(name2);
let name2 = "Tonny";
let name2 = "T"; // re-declaration will throw error
console.log(name2);

// This is local declaration, only available within the scope
//e.g.
{
    let surname2 = "Khanka";
}
console.log(surname2);

//----------------------------------------------
// const
const gender = "Male";
// just like let but its value cannot change and always need to be initialized while declaration.

//----------------------------------------------
// ** To print statements better w/o concatination use `${var_name}` 
// Datatype : number
let roll_no = 123;
console.log(`The datatype of selected var is ${typeof roll_no} & value is ${roll_no}`);

roll_no = 12.3; // not possible ideally but just an example
console.log(typeof roll_no);

// Datatype : string
let fname = "Kshitij";
console.log(`The datatype of selected var is ${typeof fname} & value is ${fname}`);

// you can also directly change the datatype as Js is loosely typed language

fname = 123; // doesnt make sense but you can do this

// Datatype : boolean
let isMarried = false;
console.log(`The datatype of selected var is ${typeof isMarried} & value is ${isMarried}`);

const isLearning = true;
// changing isLearning's value will throw error

// Datatype : null
let no_of_apples_in_basket = null;
// signifies empty
console.log(`The datatype of selected var is ${typeof no_of_apples_in_basket} & value is ${no_of_apples_in_basket}`);

// Datatype : undefined
// used when you want to remove resources like storage assigned, etc from a variable

let networth = 100000000000;
console.log(`The datatype of selected var is ${typeof networth} & value is ${networth}`);

networth = undefined;
console.log(`The datatype of selected var is ${typeof networth} & value is ${networth}`);

// Datatype : NaN (Not a number)
let lname = "Khanka";
let contains_number = "123";
console.log(`Parsing string which can be converted to number gives : ${parseInt(contains_number)}`); // as contains_number is string and have integer, it will give integer

console.log(`Parsing string which cannot be converted to number gives : ${parseInt(lname)}`); // as lname is string and but do not have integer, it will give NaN

// Datatype : Array or List
// List is more appropriate as in Js, your array can store heterogenous datatype i.e. mix of different datatypes in one array.

let student_names = ["Kshitij", "Tonny", "Rachel"];
console.log(`The datatype of selected var is ${typeof student_names} & value is ${student_names}`);
// Access the elements using their index like 
console.log(`Using index : ${student_names[0]}`);
// Also it doesnt have fix value of its size
student_names.push("Albus");
console.log(`Updated : ${student_names}`);
// Slicing
let new_student_names = student_names.slice(1,3); //includes index 1 but not 3 (only till 3 - 1)
console.log(`Slicing : ${new_student_names}`);

// heterogenous property of array in Js
student_names.push(5);
student_names.push(false);
student_names.push(null);

console.log(`Updated : ${student_names}`); // contains different types of datatype bcz Js is loosely typed

// Datatype : Object
// This is same as Python Dictionary or C++ Hashmaps
// Contains key:value pairs
// Also funtions

let student = {
    name : "Kshitij",
    age : 19,
    isMarried : false,
    greet : (given_name) => {
        console.log(`Greetings of the day ${given_name}`);
    }
}
// values are accessed using keys
console.log(`Accessing name : ${student.name} & Datatype is : ${typeof student.name}`);
console.log(`Accessing age : ${student.age} & Datatype is : ${typeof student.age}`);
console.log(`Accessing isMarried : ${student.isMarried} & Datatype is : ${typeof student.isMarried}`);
console.log(`Accessing greet function : ${student.greet} & Datatype is : ${typeof student.greet}`); // you are accessing the function but not calling it. Output will be :-

//  Accessing greet function : (given_name) => {
//      console.log(`Greetings of the day ${given_name}`);
//  } & Datatype is : function

// but instead
console.log(`Using greet function : ${student.greet("Tonny")}`); // now you are using the function. Output will be :- 

//  Greetings of the day Tonny --> used our function
//  Using greet function : undefined --> therefore shouldnt print the function

