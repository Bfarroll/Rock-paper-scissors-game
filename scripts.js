var compare = function (choice1, choice2) {
if (choice1 === choice2) {
return "The result is a tie!";
} else if (choice1 === "rock") {
if (choice2 === "scissors") {
return "rock wins1";
} else {
return "paper wins1";
}
} else if (choice1 === "scissors") {
if (choice2 === "rock") {
return "rock wins2";
} else {
return "scissors wins2";
}
} else if (choice1 === "paper") {
if (choice2 === "scissors"){
return "scissors wins3";
} else {
return "paper wins3";
}
}
};

compare(userChoice, computerChoice);
