console.log("Hello World");

let wildlifeQuiz = [
  [
    "What is the largest big cat in the world?",
    ["Tiger", "Lion", "Cheetah", "Jaguar"],
  ],

  ["Which mammal can fly?", ["Bat", "Penguin", "Kangaroo", "Elephant"]],

  [
    "What is the world's largest land mammal?",
    ["Elephant", "Giraffe", , "Rhino", "Hippopotamus"],
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
console.log(wildlifeQuiz[0][1]);

// document.getElementById("a1").innerHTML = "";

let question;
let i;
function askQuestion() {
  question = document.getElementById("question");
  i = Math.floor(Math.random() * (wildlifeQuiz.length - 1));
  question.innerHTML = wildlifeQuiz[i][0];
  // console.log(i);
  // console.log(wildlifeQuiz[i][0]);
}
askQuestion();

let a1;
let a2;
let a3;
let a4;

function displayChoice() {
  wildlifeQuiz[i][1].sort();
  console.log(wildlifeQuiz[i][1]);
  //   console.log(wildlifeQuiz);

  a1 = document.getElementById("a1");
  a2 = document.getElementById("a2");
  a3 = document.getElementById("a3");
  a4 = document.getElementById("a4");

  a1.innerHTML = wildlifeQuiz[i][1][0];
  a2.innerHTML = wildlifeQuiz[i][1][1];
  a3.innerHTML = wildlifeQuiz[i][1][2];
  a4.innerHTML = wildlifeQuiz[i][1][3];
}

displayChoice();
