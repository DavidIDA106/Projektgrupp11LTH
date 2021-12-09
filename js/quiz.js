const testQuestions = [
    {
        question: "På vilket sätt innebär mer skog bättre luft?",
        a: "Växterna absorberar CO2 och spottar ut O2",
        b: "Träden absorberar O2 och spottar ut CO2.",
        c: "Träden absorberar både O2 och CO2.",
        correct: "a",
    },
    {
    
        question: "Hur många procent av avskogningen beror på agrikulturen?",
        a: "Ca 80%",
        b: "Ca 75%",
        c: "70%",
        correct: "a",
    },
    {
        question: "Vad beror i huvudsak avskogningen i Sri Lanka på?",
        a: "Skogsbränder",
        b: "Gruvarbete",
        c: "Kommersiellt jordbruk",
        correct: "c",
    },
    {
        question: "Med hur många procentenheter har Kenyas skog reducerats?",
        a: "8",
        b: "4",
        c: "12",
        correct: "b",
    },
    {
        question: "Hur mycket mindre co2 utsläpp innebär en vegetariskt baserad kost jämfört med en köttbaserad kost?",
        a: "2.5X",
        b: "2.0X",
        c: "1.5X",
        correct: "a",
    },
    {
        question: "Hur mycket vatten krävs för att producera ett enda kycklingbröst?",
        a: "Köp mer halvfabrikat",
        b: "Laga mer mat hemma med när producerade råvaror",
        c: "Ät mindre leverpastej ",
        correct: "b",

    },
    {
        question: "Vart i världen produceras mest palmolja?",
        a: "Ryssland",
        b: "Colombia",
        c: "Malaysia och Indonesien",
        correct: "c",
    },
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

let scoreCount = 0;
let questionCounter = 0;

startQuiz();

function startQuiz(){

    deselectAnswers();

    const currentData = testQuestions[questionCounter];
    questionElem.innerText = currentData.question;
    aText.innerText = currentData.a;
    bText.innerText = currentData.b;
    cText.innerText = currentData.c;
}

function deselectAnswers(){
    answerElems.forEach(element => element.checked = false);
}

function selected(){
    let answer;

    answerElems.forEach(element => {
        if(element.checked) {
            answer = element.id;
        }
    })
    return answer;
}

submit.addEventListener('click', () => {
    const answer = selected();

    if(answer === testQuestions[questionCounter].correct){
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

