const testQuestions = [
    {
        question: "Vem är bäst i världen?",
        a: "Dave the slave",
        b: "David Petersson",
        c: "David Fetersson",
        d: "Who's that guuuuy",
        correct: "a",
    },
    {
    
        question: "Hur mycket av den här designen är baxad?",
        a: "Eeh det behöver vi inte tänka på",
        b: "Inte så viktigt",
        c: "Vet du hur många löss det finns i världen?",
        d: "blablabla",
        correct: "b",
    }
]

function qS(selector) {
    return document.querySelector(selector);
}

function qSA(selector) {
    return document.querySelectorAll(selector);
}

function eId(id) {
    return document.getElementById(id);
}


const quiz = eId('quiz');
const submit = eId('submit');
let questionElem = eId('question');
let answerElems = qSA('.answer');
let aText = eId('a_text');
let bText = eId('b_text');
let cText = eId('c_text');
let dText = eId('d_text');

let scoreCount = 0;
let questionCounter = 0;

startQuiz();

function startQuiz(){

    deselectAnswers();

    let currentData = testQuestions[questionCounter];
    questionElem.innerText = currentData.question;
    aText.innerText = currentData.a;
    bText.innerText = currentData.b;
    cText.innerText = currentData.c;
    dText.innerText = currentData.d;
}

function deselectAnswers(){
    answerElems.forEach(element => element.checked = false);
}

function selected(){
    let answer;

    answerElems.forEach(element => {
        if(element.checked) {
            answer = element;
        }
    })
    return answer;
}

submit.addEventListener('click', () => {
    const answer = selected();

    if(answer == question.correct){
        scoreCount++;
    }

    questionCounter++;

    if(questionCounter < testQuestions.length){
        startQuiz();
    } else {
        quiz.innerHTML = `
        <h2>You answered ${scoreCount}/${testQuestions.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>
        `
    }
})


let mini = true;
// om sidebaren är minimerad och vi drar musen över den så vill vi att den skall dras ut, när musen inte längre är över så
// dras den in igen.
function toggleSidebar() {
    if (mini){
        console.log("opening sidebar");
        document.getElementById("mySidebar").style.width = "250px";
        mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "85px";
        mini = true;
    }
}

function qS(selector) {
    return document.querySelector(selector);
}

function qSA(selector) {
    return document.querySelectorAll(selector);
}

