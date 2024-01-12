console.log("Hello World");

let wildlifeQuiz = [
  [
    "What is the largest big cat in the world?",
    ["Tiger", "Lion", "Cheetah", "Jaguar"],
  ],

  ["Which mammal can fly?", ["Bat", "Penguin", "Kangaroo", "Elephant"]],

  [
    "What is the world's largest land mammal?",
    ["Elephant", "Giraffe", "Rhino", "Hippopotamus"],
  ],

  [
    "Which bird is known for its ability to imitate human speech?",
    ["Parrot", "Owl", "Eagle", "Penguin"],
  ],

  [
    "What is the largest species of bear?",
    ["Polar Bear", "Black Bear", "Grizzly Bear", "Panda Bear"],
  ],

  [
    "What is the world's fastest land animal?",
    ["Cheetah", "Gazelle", "Lion", "Zebra"],
  ],

  [
    "Which animal is known for its humps and is native to deserts?",
    ["Camel", "Horse", "Elephant", "Rhino"],
  ],

  [
    "What is the largest species of shark?",
    ["Whale Shark", "Great White Shark", "Hammerhead Shark", "Tiger Shark"],
  ],

  [
    "Which reptile is known for changing the color of its skin?",
    ["Chameleon", "Iguana", "Turtle", "Crocodile"],
  ],

  [
    "What is the only marsupial found in North America?",
    ["Opossum", "Kangaroo", "Wallaby", "Koala"],
  ],
];
// console.log(wildlifeQuiz[0][1]);

// document.getElementById("a1").innerHTML = "";

let question;
let i;
let userChoice;
let choices;
let y;
let correctAnswer;
let score = 0;
let response;
function askQuestion() {
  question = document.getElementById("question");
  i = Math.floor(Math.random() * (wildlifeQuiz.length - 1));
  question.innerHTML = wildlifeQuiz[i][0];
  console.log(question.innerHTML);
  correctAnswer = wildlifeQuiz[i][1][0];
  // console.log(wildlifeQuiz[i][1]);
  // console.log(wildlifeQuiz[i][1]);
  console.log(`Correct answer : ${correctAnswer}`); //
  // console.log(i);
  // console.log(wildlifeQuiz[i][1][0]);
}
askQuestion();

// let a1;
// let a2;
// let a3;
// let a4;

//this function src is from https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function displayChoice() {
  console.log("BEFORE : ", wildlifeQuiz[i][1]);
  // wildlifeQuiz[i][1].sort();
  shuffle(wildlifeQuiz[i][1]);
  console.log("AFTER : ", wildlifeQuiz[i][1]);
  //   console.log(wildlifeQuiz);

  let a1 = document.getElementById("a1");
  let a2 = document.getElementById("a2");
  let a3 = document.getElementById("a3");
  let a4 = document.getElementById("a4");

  a1.innerHTML = wildlifeQuiz[i][1][0];
  a2.innerHTML = wildlifeQuiz[i][1][1];
  a3.innerHTML = wildlifeQuiz[i][1][2];
  a4.innerHTML = wildlifeQuiz[i][1][3];
}

displayChoice();

function getUserInput(event) {
  event.preventDefault();
  let ans1 = document.getElementById("ans1");
  let ans2 = document.getElementById("ans2");
  let ans3 = document.getElementById("ans3");
  let ans4 = document.getElementById("ans4");

  ans1.value = wildlifeQuiz[i][1][0];
  ans2.value = wildlifeQuiz[i][1][1];
  ans3.value = wildlifeQuiz[i][1][2];
  ans4.value = wildlifeQuiz[i][1][3];

  choices = document.getElementsByName("choice");
  console.log(choices);
  for (y = 0; y < choices.length; y++) {
    if (choices[y].checked) {
      userChoice = choices[y].value;
      response = document.getElementById("response");
      // response.innerHTML = "Option selected: " + userChoice;
    }
  }
  checkAnswer(userChoice);
}

function checkAnswer(selectedOption) {
  console.log(selectedOption);
  if (selectedOption === correctAnswer) {
    alert("correct answer!!!");
    keepScore(userChoice);
  } else {
    alert("Oops! That's not Correct!");
  }
  removeQuestion();
  askQuestion();
  displayChoice();
}

function keepScore() {
  // if (userValue === correctAnswer) {
  score++;
  console.log(score);
  alert(`This is your current score: ${score}`);
  response.innerHTML = `Your current score is : <strong>${score}</strong>`;
  // }
}

function removeQuestion() {
  wildlifeQuiz.splice(i, 1);
  console.log(i);
  console.log(wildlifeQuiz[i]);
  console.log(wildlifeQuiz);
}

let quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", getUserInput);
