console.log('running main.js')

/* I need to write a code that will analyse all numbers from 1 to 100.
Will console.log Fizz to each number multiple of 3;
Will console.log Buzz for each number multiple of 5;
Will console.log FizzBuzz for each number multiple of 3 AND multiple of 5.
Will console.log the number for the others */

for (var i=1; i<101; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i%3 === 0) {
        console.log("Fizz");
    }
    else if (i%5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }  
}  
