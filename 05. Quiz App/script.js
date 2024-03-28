const questions = [
    {
        question: "Which is the biggest continent in the world?",
        answer:[
            {text:"North America", correct: false},
            {text:"Asia", correct: true},
            {text:"Africa", correct: false},
            {text:"Australia", correct: false},
        ]
    },
    {
        question:"Which is largest island in the world",
        answer:[
            {text:"New Guinea", correct:false},
            {text:"Andaman Nicobar", correct:false},
            {text:"Greenland", correct:true},
            {text:"Hawaii", correct:false},
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answer:[
            {text:"Great Ganga", correct: false},
            {text:"Nile", correct: true},
            {text:"Amazon", correct: false},
            {text:"Niger", correct: false},
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answer:[
            {text:"Indian Ocean", correct: false},
            {text:"Pacific Ocean", correct: true},
            {text:"Arctic Ocean", correct: false},
            {text:"Atlantic Ocean", correct: false},
        ]
    },
    {
        question: "Which is India’s first super computer?",
        answer:[
            {text:"Param8000", correct: true},
            {text:"param80000", correct: false},
            {text:"param800", correct: false},
            {text:"param8", correct: false},
        ]
    },
];

const questionElement=document.getElementById('question');
const answerButtons=document.getElementById('answer-button');
const nextButton=document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct=  answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    };
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}:)`

    nextButton.innerHTML= "Play again";
    nextButton.style.display= "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();