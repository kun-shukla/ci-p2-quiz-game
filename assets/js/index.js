//Array of quiz questions
let wildlifeQuiz = [
  //each element in the array has the question in position[0]. The possible answers to the question is stored in a nested array in position[1] with the correct answer located in position[0] of the nested array.
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

// Setup global variables
let i, y, x, userChoice, choices, correctAnswer, question, username;
let counter = 1;
let score = 0;

// Element to link with HTML ID
let qCount = document.getElementById("q-counter");
let response = document.getElementById("response");
let submitButton = document.getElementById("submit-btn");
let nextQButton = document.getElementById("next-q");
let playAgainBtn = document.getElementById("play-again");
let quitGameBtn = document.getElementById("quit-game");
let quizForm = document.getElementById("quiz-form"); //Triggers 'quit game' listener

//Font Awesome icons for depicting correct/incorrect answers within span tag.
let tickIcon = document.createElement("span");
let xIcon = document.createElement("span");

// Assign innerHTML content to element
qCount.innerHTML = counter + " of 10";
tickIcon.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>`;
xIcon.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #e32400;"></i>`;

//Set up of Functions

/**
 * Game starts here with a 'Enter name' user prompt
 */
function gameStart() {
  enterUsername(); // function call for prompting user to enter a username

  askQuestion(); // function call for displaying randomised questions / choices
}

/**
 * Prompts user to enter a username.
 */
function enterUsername() {
  username = prompt(
    "Welcome to the Wildlife Quiz!\nPlease enter your name, to start the game! "
  );
  // If user does not enter a value. The displayed username at the end of the game will be "Gamer" instead.
  if (username) {
    return;
  } else {
    username = "Gamer";
  }
}

/**
 * Displays a randomised question with corresponding choices.
 */
function askQuestion() {
  question = document.getElementById("question");
  i = Math.floor(Math.random() * wildlifeQuiz.length);
  question.innerHTML = wildlifeQuiz[i][0];
  console.log(question.innerHTML);
  correctAnswer = wildlifeQuiz[i][1][0]; // Correct answer is stored here before it is randomised
  console.log(`Correct option is : ${correctAnswer}`); //

  displayChoice(); // callback function for displaying choices.
}

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

/**
 * Displays randomised array of choices so answer is not always in first position
 */
function displayChoice() {
  shuffle(wildlifeQuiz[i][1]); // shuffle function referenced above

  // label tag variables
  let a1 = document.getElementById("a1");
  let a2 = document.getElementById("a2");
  let a3 = document.getElementById("a3");
  let a4 = document.getElementById("a4");

  // choices are displayed within the label tags (post shuffle)
  a1.innerHTML = wildlifeQuiz[i][1][0];
  a2.innerHTML = wildlifeQuiz[i][1][1];
  a3.innerHTML = wildlifeQuiz[i][1][2];
  a4.innerHTML = wildlifeQuiz[i][1][3];
}

/**
 * Event listener for retrieving user selected option and checks it against the correct answer. Is triggered when the form is submitted by clicking the 'submit answer' button
 */
function getUserInput(event) {
  event.preventDefault(); // prevents default form submission answer

  // radio 'input' tag variables
  let ans1 = document.getElementById("ans1");
  let ans2 = document.getElementById("ans2");
  let ans3 = document.getElementById("ans3");
  let ans4 = document.getElementById("ans4");

  // Add value attribute to input tags
  ans1.value = wildlifeQuiz[i][1][0];
  ans2.value = wildlifeQuiz[i][1][1];
  ans3.value = wildlifeQuiz[i][1][2];
  ans4.value = wildlifeQuiz[i][1][3];

  choices = document.getElementsByName("choice"); // retrieves array of input tags by common 'name' attribute value 'choice'

  // for loop for checking each element in the array to find the user selected radio button.
  for (y = 0; y < choices.length; y++) {
    if (choices[y].checked) {
      userChoice = choices[y].value; // value of selected option is stored here
    }
  }
  checkAnswer(userChoice); // call back function to capture 'userChoice' variable as a parameter for the 'checkAnswer' function
}

/**
 * Checks selected option against the correct answer and indicates correct/incorrect response
 */
function checkAnswer(selectedOption) {
  console.log("User answer: " + selectedOption);
  //Prevents user from selecting 'next question' and 'submit' buttons after the last question is displayed.
  if (wildlifeQuiz.length === 1) {
    submitButton.style.display = "none";
    quitGameBtn.style.display = "none";
    nextQButton.style.display = "none";
    playAgainBtn.style.display = "inline-block";
  }

  //Will run if user chooses correct option and displays a 'tick' mark against the chosen answer
  if (selectedOption === correctAnswer) {
    for (x = 0; x < choices.length; x++) {
      if (choices[x].checked) {
        // nested if condition for finding the 'checked' radio button
        let radioId = choices[x].id; // the selected radio button's id is used to identify the corresponding label tag (line 185 below)
        let theLabel = document.querySelector('label[for="' + radioId + '"]'); //
        theLabel.appendChild(tickIcon); // 'tick' mark displays against the respective label tag
        console.log(theLabel.innerHTML);
      }
    }
    console.log("User inputted correct answer");
    keepScore(); // score is added if chosen option is correct
  }
  // Similar to above 'if' block but only runs if the selected option is incorrect
  //if (selectedOption !== correctAnswer) {
  else {
    for (x = 0; x < choices.length; x++) {
      if (choices[x].checked) {
        let radioId = choices[x].id;
        let theLabel = document.querySelector('label[for="' + radioId + '"]');
        theLabel.appendChild(xIcon);
        console.log(theLabel.innerHTML);
      }
    }
  }

  //Applies to both if conditions above (within the checkAnswer function) - displays the final score after the last question has been answered and checked for correct/incorrect response.
  if (wildlifeQuiz.length === 1) {
    response.innerHTML = `Hey, ${username}! You Have Completed The Quiz!<strong> Final Score : ${score}</strong>`;
    document.getElementById("q-heading").innerHTML = "Quiz complete!"; //counter heading text changes to indicate end of game.
  }
}

/**
 * Tracks user score increments by 1 when user answer is correct
 */
function keepScore() {
  score++;
  response.innerHTML = `Your current score is : <strong>${score}</strong>`;
}

/**
 * counter for the 'number of questions left' heading on top of page
 */
function qCounter() {
  counter++;
  qCount.textContent = counter + " of 10";
}

/**
 * Event listener function triggered by the 'next question' button.
 */
function getNextQ() {
  removeQuestion(); // removes answered question from array
  console.log(wildlifeQuiz);
  quizForm.reset(); // resets form to deselect the selected radio button from the previous question
  askQuestion(); // asks the next question
  qCounter(); // increments quiz counter heading by 1
}

/**
 * Removes the answered question from the array so that the same questions does not reappear during the current game.
 */
function removeQuestion() {
  wildlifeQuiz.splice(i, 1); // the 'i' variable indicates the current position of the question to be removed, in the array
}

/**
 *Stops 'submit' button from displaying and presents user with 'next question' button instead - prevents user from accidentally submitting the answer more than once.
 */
function removeSubmitBtn() {
  if (wildlifeQuiz.length === 1) {
  } else {
    submitButton.style.display = "none";
    nextQButton.style.display = "inline-block";
  }
}

/**
 * Prevents user jumping head to next question before submission. Hides 'next q' button and makes 'submit' button reappear.
 */
function removeNextQBtn() {
  submitButton.style.display = "inline-block";
  nextQButton.style.display = "none";
}

// option for playing game again after quiz is completed by the user
function playAgain() {
  location.reload(true);
}

/**
 * option for quitting the game (depicted as a FontAwesome 'refresh' icon)
 */
function quitGame() {
  location.reload(true); // page hard refresh
}

//List of event listener triggers
nextQButton.addEventListener("click", getNextQ); //Triggers 'next question' listener

nextQButton.addEventListener("click", removeNextQBtn); //Triggers 'remove next q button' listener after user clicks on 'next question' button

quizForm.addEventListener("submit", getUserInput); // Triggers the 'user input' listener when user clicks on 'submit answer' button

quizForm.addEventListener("submit", removeSubmitBtn); //Triggers 'remove submit button' listener after user clicks on the 'submit answer' button

playAgainBtn.addEventListener("click", playAgain); //Triggers 'play again' listener

quitGameBtn.addEventListener("click", quitGame); //Triggers 'quit game' listener

//The start of the game
gameStart();
