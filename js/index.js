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
let counter = 1;
let qCount = document.getElementById("q-counter");
qCount.innerHTML = counter + " of 10";
let question;
let i;
let userChoice;
let choices;
let y;
let correctAnswer;
let score = 0;
let response;
let quizForm;
let submitButton = document.getElementById("submit-btn");
let playAgainBtn = document.getElementById("play-again");
let quitGameBtn = document.getElementById("quit-game");

function askQuestion() {
  question = document.getElementById("question");
  i = Math.floor(Math.random() * wildlifeQuiz.length);
  // console.log(i); // for debugging
  question.innerHTML = wildlifeQuiz[i][0];
  console.log(question.innerHTML);
  correctAnswer = wildlifeQuiz[i][1][0];
  console.log(`Correct option is : ${correctAnswer}`); //

  displayChoice();
}
askQuestion();
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
  shuffle(wildlifeQuiz[i][1]);

  let a1 = document.getElementById("a1");
  let a2 = document.getElementById("a2");
  let a3 = document.getElementById("a3");
  let a4 = document.getElementById("a4");

  a1.innerHTML = wildlifeQuiz[i][1][0];
  a2.innerHTML = wildlifeQuiz[i][1][1];
  a3.innerHTML = wildlifeQuiz[i][1][2];
  a4.innerHTML = wildlifeQuiz[i][1][3];
}

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
  for (y = 0; y < choices.length; y++) {
    if (choices[y].checked) {
      userChoice = choices[y].value;
      response = document.getElementById("response");
    }
  }
  checkAnswer(userChoice);
}
let tickIcon = document.createElement("span");
tickIcon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;

let xIcon = document.createElement("span");
xIcon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
let labelElement;
// let chosenAnswer;
function checkAnswer(selectedOption) {
  console.log("User answer: " + selectedOption);
  if (wildlifeQuiz.length === 1) {
    nextQButton.style.display = "none";
    playAgainBtn.style.display = "inline-block";
  }
  if (selectedOption === correctAnswer) {
    for (x = 0; x < choices.length; x++) {
      if (choices[x].checked) {
        // chosenAnswer = choices[x];
        let radioId = choices[x].id;
        let theLabel = document.querySelector('label[for="' + radioId + '"]');
        theLabel.appendChild(tickIcon);
        console.log(theLabel.innerHTML);
      }
    }
    console.log("User inputted correct answer");
    keepScore();
  }
  if (selectedOption !== correctAnswer) {
    for (x = 0; x < choices.length; x++) {
      if (choices[x].checked) {
        // chosenAnswer = choices[x];
        let radioId = choices[x].id;
        let theLabel = document.querySelector('label[for="' + radioId + '"]');
        theLabel.appendChild(xIcon);
        console.log(theLabel.innerHTML);
      }
    }
  }
  if (wildlifeQuiz.length === 1) {
    response.innerHTML = "GAME OVER! Your final score is : " + score;
    nextQButton.style.display = "none";
    document.getElementById("q-heading").innerHTML = "Quiz complete!";
  }
}
// console.log(tickIcon.innerHTML);
// let xIcon = document.createElement("span");
// xIcon.innerHTML =
//   tickIcon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
// let labelElement;
// let chosenAnswer;
// function checkAnswer(selectedOption) {
//   console.log("User answer: " + selectedOption);
//   for (x = 0; x < choices.length; x++) {
//     if (choices[x].checked && selectedOption === correctAnswer) {
//       let radioId = choices[x].id;
//       let theLabel = document.querySelector('label[for="' + radioId + '"]');
//       theLabel.appendChild(tickIcon);
//       console.log(theLabel.innerHTML);
//       console.log("User inputted correct answer");
//       keepScore();
//     } else if (choices[x].checked) {
//       let radioId = choices[x].id;
//       let theLabel = document.querySelector('label[for="' + radioId + '"]');
//       theLabel.appendChild(xIcon);
//       console.log(theLabel.innerHTML);
//     }

//     // console.log("User inputted incorrect answer");
//   }
// }
function keepScore() {
  score++;
  response.innerHTML = `Your current score is : <strong>${score}</strong>`;
}

function qCounter() {
  counter++;
  qCount.textContent = counter + " of 10";
}

function getNextQ(event) {
  event.preventDefault();
  removeQuestion();
  console.log(wildlifeQuiz);
  quizForm.reset();
  askQuestion();
  qCounter();
}

nextQButton = document.getElementById("next-q");
nextQButton.addEventListener("click", getNextQ);
nextQButton.addEventListener("click", removeNextQBtn);

quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", getUserInput);
quizForm.addEventListener("submit", removeSubmitBtn);
function removeQuestion() {
  wildlifeQuiz.splice(i, 1);
}

function removeSubmitBtn() {
  if (wildlifeQuiz.length === 1) {
    nextQButton.style.display = "none";
    submitButton.style.display = "none";
  } else {
    submitButton.style.display = "none";
    nextQButton.style.display = "inline-block";
    console.log(
      "submit button: ",
      submitButton.style.display,
      "next button: ",
      nextQButton.style.display
    );
  }
}

function removeNextQBtn() {
  nextQButton.style.display = "none";
  submitButton.style.display = "inline-block";
  console.log(
    "submit button: ",
    submitButton.style.display,
    "next button: ",
    nextQButton.style.display
  );
}

playAgainBtn.addEventListener("click", playAgain);

function playAgain() {
  location.reload(true);
}

quitGameBtn.addEventListener("click", quitGame);

function quitGame() {
  location.reload(true);
}
