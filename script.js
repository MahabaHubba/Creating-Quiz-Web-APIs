const quizData = [{
    id: "a",

    question: "What is the name of the Pokemon mascot?",
    a: "Charmander",
    b: "Jiggypuff",
    c: "Lego",
    d: "Pikachu", 
    correct: "d" , 
 }, 

{
    id: "b",
    question: "What is the name of the main protagonisty of Pokemon?",
    a: "Ash",
    b: "Brock",
    c: "Misty",
    d: "Jesse", 
    correct: "a"
},

{
    id:"c",
    question: "What is the name of the thieves in Pokemon",
    a: "Team Rocket",
    b: "Team Crystal",
    c: "Team Red",
    d: "Team Diamond", 
    correct: "a" , 
},

{
    id:"d",
    question: "What is the name of the rival in Pokemon",
    a: "Giovani",
    b: "Blaine",
    c: "Gary",
    d: "Ereka", 
},

];

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 100;
setInterval(setTime, 1000);

function setTime() {
  --totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

let currentQuestion = 0;
let score = 0;

function monkey() {

    let i = 100;
    
    do {
      i = i - 1;
      console.log(i)
    } while (i > 0);
    

    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBtn = document.getElementById('submit');

    function loadQuestion() {
        const currentQuizData = quizData[currentQuestion];

        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }


    function getSelected() {
        const selected = document.querySelector('input[name="answer"]:checked');
        return selected ? selected.id : null;
    }

    function checkAnswer() {
        const answer = getSelected();

        if (answer === quizData[currentQuestion].correct) {
            score++;
            totalSeconds += 10;
        } else {
            totalSeconds = totalSeconds - 10
        }
        

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();

        } else {
            displayFinalScore('Quiz completed. Your score:', score);
        }

    }

    function restartQuiz(){
        currentQuestion = 0;
        score= 0;
        totalSeconds = 100;

        const finalScoreContainer = document.getElementById('final-score');
        finalScoreContainer.innerHTML = ""
        loadQuestion();
    }

    function displayFinalScore() {
        const finalScoreContainer = document.getElementById('final-score');
        finalScoreContainer.innerHTML = `Quiz completed. Your final score: ${score}`;
    }
    
    loadQuestion();

    submitBtn.addEventListener('click', checkAnswer);
    const restartBtn = document.getElementById('restart');
    restartBtn.addEventListener('click', restartQuiz);

}

monkey();