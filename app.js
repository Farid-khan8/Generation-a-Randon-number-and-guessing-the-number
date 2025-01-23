const maxx = prompt("enter a number");

const randum = Math.floor(Math.random() * maxx + 1);

let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    console.log("you have quitted");
    break;
  }

  if (guess == randum) {
    console.log("you have guess the correct number,Congrats!");
    break;
  } else if (guess < randum) {
    guess = prompt("Hint: you number was too small, try again.");
  } else {
    guess = prompt("Hint: your number was too large, try again.");
  }
}