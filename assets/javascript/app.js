var secondsLeft = 90;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 6;
var quizContent = "";
var questions = [

   {
    question: "1. Who Broke the record for single season passing yards in 1984?",
    choices: ["Dan Marino", "Jim Kelly", "Joe Montana", "John Elway"],
    correctAnswer: 0
   }, 

   {
    question: "2. Who currently holds the most career rushing yards in the NFL?",
    choices: ["Barry Sanders", "Emmitt Smith", "Jim Brown", "Walter Payton"],
    correctAnswer: 1
   },
   
   {
    question: "3. What team went 17-0 in 1972",
    choices: ["Miami Dolphins", "New York Giants", "Pittsburgh Steelers", "San Francisco 49ers"],
    correctAnswer: 0
   },

   {
    question: "4. What team won the first Super Bowl",
    choices: ["Cleveland Browns", "Chicago Bears", "Dallas Cowboys", "Green Bay Packers"],
    correctAnswer: 3
   },

   {
    question: "5. Which head coach has the most Super Bowl victories without a loss?",
    choices: ["Bill Belichick", "Bill Walsh", "Chuck Noll", "Don Shula"],
    correctAnswer: 2
   },

   {
    question: "6. Who current hold the record for most reciving touchdowns in a season?",
    choices: ["Calvin Johnson", "Jerry Rice", "Michael Irvin", "Randy Moss"],
    correctAnswer: 3
   }
];

function startGame(){
    for(i = 0; i < questions.length; i++){
        quizContent += questions[i].question + "<br>"
        + questions[i].choices[0] + "<br>"
        + questions[i].choices[1] + "<br>"
        + questions[i].choices[2] + "<br>"
        + questions[i].choices[3] + "<br>" + "<br>";
    }
    document.getElementById("quizContent").innerHTML = quizContent;
}

function checkAnswers(){

}

function displayResults(){

}