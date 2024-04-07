// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If the programs are straightforward at this point, just add your name and the current date at the top of each program file.
// Then, write one sentence describing what the program does.

// Saleem Khan 17.03.2024
// Store my favorite number in a variable.
let favoriteNumber: number = 20;
let massege: string = `My Favorite Number is ${favoriteNumber}`;
console.log(massege);

// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element 
// in the list, one at a time.

let friendsName:string[]=["Asif", "Aamir", "Farhan", "Nasir"];
for (let i = 0; i <friendsName.length; i++){
console.log(friendsName[i]);
}

// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. 
// The message should be the same for each person, but personalized with their name.

let friends: string[] = ["Asif", "Aamir", "Farhan", "Nasir"];
for (let name of friends) {
    console.log(`hello ${name}, you are my best friend`);
}

