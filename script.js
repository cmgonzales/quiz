const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

function buildQuiz(){}
// storing a place an output

const output = [];

//each question
myQuestion.forEach(
    (currentQuestion, questionNumber) =>{

        const amswer = [];

        for(letter in currentQuestion.answer){}
    }

)


function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

//Question
const myQuestion = [
{
    question: "What noise that warms you of danger?",
    answer: {
        a: "Alarm",
        b: "humming",
        c: "wind"

    },
    correctAnswer: "a"
},

{
    question: "What does a group of musician called",
    answer: {
        a: "Team",
        b: "Band",
        c: "Platoon"

    },
    correctAnswer: "b"
},
{
    question: "What does a person called who works with wood?",
    answer: {
        a: "Carpenter",
        b: "Ice sculpture",
        c: "Teacher"

    },
    correctAnswer: "a"
},
{
    question: "What is 12/3",
    answer: {
        a: "5",
        b: "12",
        c: "4"

    },
    correctAnswer: "b"
},
{
    question: "What is a circular food from Italy",
    answer: {
        a: "Pasta",
        b: "Burger",
        c: "Pizza"

    },
    correctAnswer: "c"
},
]