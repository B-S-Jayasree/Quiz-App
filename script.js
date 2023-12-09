const questions=[
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which animal is known as the Ship of the Desert?",
        answers: [
            {text: "Camel", correct: true},
            {text: "Cheetah", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What country has the highest life expectancy?",
        answers: [
            {text: "China", correct: false},
            {text: "France", correct: false},
            {text: "Hong Kong", correct: true},
            {text: "Japan", correct: false},
        ]
    },
    {
        question: "What was the most common surname in the United States?",
        answers: [
            {text: "Miller", correct: false},
            {text: "Wilson", correct: false},
            {text: "Williams", correct: false},
            {text: "Smith", correct: true},
        ]
    },
    {
        question: "Which planet hass the most moons?",
        answers: [
            {text: "Uranus", correct: false},
            {text: "Saturn", correct: true},
            {text: "Mercury", correct: false},
            {text: "Earth", correct: false},
        ]
    },
    {
        question: "What company was initially known as Blue Ribbon Sports?",
        answers: [
            {text: "Puma", correct: false},
            {text: "Nike", correct: true},
            {text: "Adidas", correct: false},
            {text: "Cosco", correct: false},
        ]
    },
    {
        question: "Which is the only body part that is fully grown from birth?",
        answers: [
            {text: "Eyes", correct: true},
            {text: "Teeth", correct: false},
            {text: "Hair", correct: false},
            {text: "Nail", correct: false},
        ]
    },
    {
        question: "What is meant by Acrophobia?",
        answers: [
            {text: "Fear of weight", correct: false},
            {text: "Fear of Aquarium", correct: false},
            {text: "Fear of height", correct: true},
            {text: "Fear of darkness", correct: false},
        ]
    },
    {
        question: "How many heart does an Octopus have?",
        answers: [
            {text: "3", correct: true},
            {text: "1", correct:false },
            {text: "4", correct: false},
            {text: "7", correct: false},
        ]
    },
    {
        question: "Where is the strongest human muscle located ?",
        answers: [
            {text: "Foot", correct: false},
            {text: "Hands", correct: false},
            {text: "Jaw", correct: true},
            {text: "Knee", correct: false},
        ]
    },
    {
        question: "What is the only continent with land in all four hemisphere?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Africa", correct: true},
            {text: "Antarctica", correct: false},
            {text: "Europe", correct: false},
        ]
    },
    {
        question: "Which river flows through the Grand Canyon?",
        answers: [
            {text: "Tigris River", correct: false},
            {text: "Mississippi River", correct: false},
            {text: "Nile River", correct: false},
            {text: "Colorado River", correct: true},
        ]
    },
    {
        question: "On what continent would you find the world's largest desert?",
        answers: [
            {text: "Africa", correct: false},
            {text: "Asia", correct: false},
            {text: "Antarctica", correct: true},
            {text: "America", correct: false},
        ]
    },
    {
        question: "What country drinks the most coffee?",
        answers: [
            {text: "Finland", correct: true},
            {text: "Green land ", correct: false},
            {text: "Italy", correct: false},
            {text: "Britain", correct: false},
        ]
    },
    {
        question: "Pink Ladies and Granny Smiths are types of what fruit?",
        answers: [
            {text: "Kiwi", correct: false},
            {text: "Rambutan ", correct: false},
            {text: "Orange", correct: false},
            {text: "Apple", correct: true},
        ]
    },
    {
        question: "Giddha is the folk dance of ?",
        answers: [
            {text: "Punjab", correct: true},
            {text: "Odisha", correct: false},
            {text: "Rajasthan", correct: false},
            {text: "Gujarat", correct: false},
        ]
    },
    {
        question: "Who was the first president of India?",
        answers: [
            {text: "K.R.Narayanan", correct: false},
            {text: "Dr. Jawaharlal Nehru ", correct: false},
            {text: "Dr.Rajendra Prasad", correct: true},
            {text: "Sardar Vallabhbhai Patel", correct: false},
        ]
    },
    {
        question: "What is the statue of liberty in ?",
        answers: [
            {text: "Germany", correct: false},
            {text: "New York", correct: true},
            {text: "Brazil", correct: false},
            {text: "Iran", correct: false},
        ]
    },
    {
        question: "Baby of horse is called ?",
        answers: [
            {text: "Calf", correct: false},
            {text: "Cub", correct: false},
            {text: "Poult", correct: false},
            {text: "Colt", correct: true},
        ]
    },
    {
        question: "What crop is famously grown in the region of Darjeeling?",
        answers: [
            {text: "Tea leaves", correct: true},
            {text: "Coffee", correct: false},
            {text: "Sugarcane", correct: false},
            {text: "Tobacco", correct: false},
        ]
    }    
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
