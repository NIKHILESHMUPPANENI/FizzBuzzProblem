// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”.
var output = [];
var count = 1;

function fizzbuzz(){
    if (count % 3 === 0 && count % 5 ===0){
        output.push("fizzbuzz");
    }
   else if (count % 3 === 0 )
{
    output.push ("fizz"); // .push() allows to add
}
else if (count % 5 === 0){
    output.push("buzz");
}
else{
    output.push (count);
}

count++;
   console.log(output);
}
// enter fizzbuzz(); in console of chrome devtools u get solution.

function whospaying(name){  // buying lunch code challenge
    var numberOfpeople = name.length;
    var randomPersonPosition = Math.floor(Math.random()) * randomPerson;
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today");
}

}