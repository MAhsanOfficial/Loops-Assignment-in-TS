// // // // 1. Creating a Lesson Plan(Using for loop )
 
let myWork = [];
for(let i=1; i<=10; i++){
    let Lesson={
        name:`Lesson ${i}`,
        status:(1%2===1)?true:false
    }
    myWork.push(Lesson);
}
console.log(myWork);

// // // // 2. Guessing Game (Using while loop )

let maxValue = 300;
let randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random number (for development purposes):", randomNumber);
let isCorrectGuess = false;
let guesses = [75, 155, 190, 245, 300];
let i = 0;
while (!isCorrectGuess && i < guesses.length) {
  let currentGuess = guesses[i];
  if (currentGuess === randomNumber) {
    console.log(`Guess ${currentGuess} is correct!`);
    isCorrectGuess = true;
  } else if (currentGuess > randomNumber) {
    console.log(`Guess ${currentGuess} is too high.`);
  } else {
    console.log(`Guess ${currentGuess} is too low.`);
  }

  i++;
}

if (!isCorrectGuess) {
  console.log("None of the guesses were correct.");
}

// // // // 3. Counter Incrementer (Using do while loop )

let counter = 0;
let step = 1;
while(counter <= 100){
    console.log(counter);
    counter += step;
};

// // // // 4.Exploring Objects with for...in Loop

let myObject:any={
  item1:"Property1",
  item2:"Property2",
  item3:"Property3"
}

for(let key in myObject){
  console.log(`${myObject} : ${myObject[key]}`); 
}

// // // // // 5.Exploring Arrays with Loops(Using loop )

let myArray : number[]= []
for(let i=1; i<=10; i++){
myArray.push(i)
}
console.log(myArray);
for(let i=0; i<myArray.length; i++){
  console.log(`Index ${i}, Value: ${myArray[i]}`);
}
for (const value of myArray) {
  console.log(value);
}