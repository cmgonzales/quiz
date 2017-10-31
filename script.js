//Question
var myQuestion = [
{
    question: "What noise that warms you of danger?",
    answer: "alarm"
},

{
    question: "What does a group of musician called",
    answer: "band"
},
{
    question: "What does a person called who works with wood?",
    answer: "carpenter"
},
{
    question: "What is 12/3",
    answer: 4
},
{
    question: "What is a circular food from Italy",
    answer: "pizza"
},
]

for(var i = 0; i<myQuestion.length; i++){
 
    var question = myQuestion[i].question;
    
    var el = document.getElementById('question' + [i]);
   
    el.textContent = question;
}

function result(){

for(var i = 0; i< myQuestion.length; i++){

    var answer = myQuestion[i].question;

    var guess = document.getElementById("answer", [i]).value;

}
}