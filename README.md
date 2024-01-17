# Wildlife quiz-game

This web application is a quiz game based on a wildlife theme. The quiz consists of 10 randomly displayed questions with four possible answers to choose from. This app has been built for purposes of entertainment and has been designed for users of all age groups with its straight forward, simple-to-use and responsive one-page design. 

The live link can be found here - [Wildlife Quiz Game](https://kun-shukla.github.io/ci-p2-quiz-game/)

![Wildlife Quiz Am I Responsive Image](assets//docs/readme-images/am-i-responsive.png)

[Image Source - Am I Responsive](https://ui.dev/amiresponsive)

## Design
The app's black and white color theme gives a simple and striking look and feel to the interface. In addition to this, the catchy background 'QUIZ' image is meant to further enhance a positive emotional experience for the user.

## Features

### Pre-game screen

![enter-username](assets/docs/readme-images/enter-username.png)

The opening screen is a user prompt for entering a name. The name once inputted is stored and is displayed at the end of the game alongwith the user's final score.

### Game screen

![quiz-ui](assets/docs/readme-images/quiz-ui.png)

The quiz features an easy to use, intuitive UI. The appealing background 'wallpaper' effect provides a fun and playful look and feel and ties in well with the app's purpose to entertain. The user is presented with four answer options to choose from - each option (which is actually a label tag, with the corresponding radio buttons hidden), when hovered over with the mouse pointer, provides visual feedback and acts as a call-to-action. If the 'Submit Answer' button is clicked on without choosing any of the options a default browser prompt is triggered indicating to the user that they need to choose an option before proceeding. There is also a 'refresh' button at the bottom which allows users to restart the game if they so wish to.

### Answer feedback 

![Answer feedback](assets/docs/readme-images/answer-check.png)

Once the user has clicked on the 'Submit answer' button (in the previous screenshot), the selected option displays either a green 'tick' or red 'cross' indicating a right or wrong answer respectively. If the answer is correct the 'current score' is incremented by 1. In addition, the 'Submit Answer' button is no longer displayed and is replaced by a 'next question' button (therefore preventing an accidental click). On clicking the 'next question' button the next question is displayed and the 'question counter' below the 'Play the Quiz' heading increments by 1.

### 'End of game' screen

![Answer feedback](assets/docs/readme-images/end-of-game.png)

Once the last question has been answered (depicting an incorrect answer in this example) the question counter display text changes to 'quiz complete', below the user inputted name is displayed along with a message displaying thier final score. In addition to this, the 'next question' and 'refresh' buttons are replaced with a 'play again!' button. 









