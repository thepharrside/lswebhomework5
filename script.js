//1. print the number 5 to the console
console.log(5);

//2. Print your name to the console
console.log("your name");

//3. Store your age as a variable called "myAge"
var myAge = 37;

//4. Print to the console how old you will be in 5 years
console.log(myAge+5);

//5. Store your favorite food as a variable called "myFavoriteFood"
var myFavoriteFood = "Cheesecake";

//6. Publish your favorite food to `index.html` using `document.write()`
document.write(myFavoriteFood);

//7. Print the remainder of 14 / 3 to the console
console.log(14%3);   //Modulus  %

//8. Print the remainder of 829 / 13 to the console
console.log(829%13);

//9. Create a for loop that counts from 0 to 130 by 3s   

// JP:  130 is not a multiple of 3, so adujsted upper limit to reflect highest multiple of 3 to prevent 
// stepping over desired maximum of 130
var limit = 129;
for(i=0; i<limit; i=i+3) { }
console.log("i="+i);
console.log("----------------------");

//10. Create a for loop that counts from 3 to 17 by 2s
var i;
for(i=3;i<17;i=i+2) {}
console.log("i="+i);
console.log("----------------------");

//11. Create a for loop that counts from 100 to 3 by -1
var i;
for(i=100;i>3;i=i-1) {}
console.log("i="+i);
console.log("----------------------");

//12. Create a for loop that counts from 1 to 100 by 1s
var i=0;
for(i; i<100; i++){}
console.log("i="+i);
console.log("----------------------");

//13. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizz` if the number is divisible by 5
limit = 100;
for(i=0;i<limit;i++){
	if(i%5==0){ console.log("fizz");}
	else {console.log(i);}
}

//14. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `buzz` if the number is divisible by 3
limit = 100;
for(i=0;i<limit;i++){
	if(i%3==0){ console.log("buzz");}
	else {console.log(i);}
}

//15. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizzbuzz` if the number is divisible by 15
limit = 100;
for(i=0;i<limit;i++){
	if(i%15==0){ console.log("fizzbuzz");}
	else {console.log(i);}
}

//EXTRA CREDIT: Fizzbuzz

/*

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

Hint: Use your last three loops and if/then/else statements. You can learn about those here https://www.w3schools.com/js/js_if_else.asp

*/

limit=100;
var text;
for(i=1;i<limit;i++) {
    if(i%3==0 && i%5==0) { text = "FizzBuzz"; }
    else if(i%3==0) { text = "Fizz"; }
	else if(i%5==0) { text = "Buzz"; }
    else { text = i; }

	console.log(text);
}


