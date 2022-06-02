const quizData = [
    {
        question: 'What does CSS stands for?',
        a: 'Car Sit Shock',
        b: 'Cascading Style Sheet',
        c: 'Correct Rent Style ',
        d: 'none of the above',
        correct: 'b',
    }, 
    {
        question: 'What of the following is not a backend Language?',
        a: 'PHP',
        b: 'Laravel',
        c: 'Django',
        d: 'HTML',
        correct: 'd',
    },
    {
        question: 'Which of the following is not a programming language?',
        a: 'Javascript',
        b: 'Python',
        c: 'C++',
        d: 'Machine',
        correct: 'd',
    }, 
    {
        question: 'What does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: 'Json Object Mutation',
        c: 'Aplication Programming Interface',
        d: 'Cascading Style Sheet',
        correct: 'a',
    }, 
    {
        question: 'Which of the following is not required for frontend development',
        a: 'HTML',
        b: 'PHP',
        c: 'React',
        d: 'Javascript',
        correct: 'b',
    },
]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();
 
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 
}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });

}


submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else{
            quiz.innerHTML = 
            `<h2>You answered correctly at 
            ${score}/${quizData.length} 
            questions.</h2> 
            
            <button onclick="location.reload()">
            Reload</button>` 
        }
    }


    
});
    
    
        