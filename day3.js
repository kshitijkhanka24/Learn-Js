// Topics covered 
// ---> Callbacks
// ---> Promises

// Callbacks are functions that are passed as a arguement to another function

function maths(a, b, callback_func_add){
    console.log(callback_func_add(a,b));
}

maths(2,5,function(a,b){
    return a+b;
}); // not exactly callback
// but now it is :

setTimeout(function(){
    console.log("It will execute after 10 seconds!")
}, 10000); // This will execute after 3 seconds i.e. in this case main stack would be already executed by then.

// Ability to recall the function after main stack is executed is called as callback
// So whenever you give a async call it goes to Web APIs which executes the task and keeps track of time, once the data is fetched it cannot directly put it into call stack so 
// it puts in callback queue & then event loop runs continuously which keeps track of call stack & callback queue
// whenever call stack is completely executed, it pushes the task from callback queue to call stack.

// But until callback is called what is stored inside the variable?

async function getData(){
    await setTimeout(function(){
        return 5;
    },5000);
}
const result = getData(); // This function simply returns 5 but after 5 seconds till then it contains : 
console.log(`The result is : ` + result);
// We get a promise of object, a promise is just like real world promise, it means whenever the data is received it will directly updated into the variable.



// creating a timer
var count = 1;
function counter(){
    console.clear(); // clears out the cli
    console.log(count++)
}
setInterval(counter,1000); // logs count every second


// This is callback hell :
// These are not performed parallely, this is called chaining!
setTimeout(function(){
    console.log("Task 1 Done");
    setTimeout(function(){
        console.log("Task 2 Done")
    }, 10000);
},10000);

// goto latentflip.com to visualize this code

// Now came to picture writing promises
// Js devs said, whenever you give a async call instantly give back a promise synchornously and then do async task.
// Syntax of promise : 
// new promise((resolve, reject)=>{
    // resolve or reject
//});
// if resolve was returned, .then will be accessible
// if reject was returned, .catch will be accessible

function willReturnPromise(){
    var answer = new Promise((resolve,reject)=>{
        // resolve & reject are functions that will take some value and when is called, would return their value to .then or .catch respectively
        setTimeout(resolve("I was resolved"), 2000);
        // similarly you can use reject
    });

    return answer;
}

const result2 = willReturnPromise();
result2.then(returnedValue => {
        console.log(returnedValue);
});
