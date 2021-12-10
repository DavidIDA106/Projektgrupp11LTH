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
    {
        question: "Hur stor andel av det globala utsläppen står livsmedelssektorn för ?",
        a: "15-20 %",
        b: "20-30 %",
        c: "40 - 50%",
        correct: "b",
    },
    {
        question: "Står varje personer i Sverige för 1,5 ton koldioxidekvivalent per år ?",
        a: "Nej",
        b: "Ja",
        c: "Går ej att säga",
        correct: "b",
    },
    {
        question: "Hur många kg mat slänger vi varje år ?",
        a: "19",
        b: "20",
        c: "30",
        correct: "a",
    },
    {
        question: "Hur kan du minska matsvinn ?",
        a: "Se till att förvara maten under direkt solljus",
        b: "Donera hälften av din mat till papperskorgen",
        c: "planera dina köp och inte köpa så mycket",
        correct: "c",
    },
    {
        question: "När är miljömärkningars dag?",
        a: "den 1 januari ",
        b: "den 6 juni ",
        c: "den 17 oktober",
        correct: "c",
    },
    {
        question: "Vad är en av grundidéerna för Bra miljöval",
        a: "Företag ska använda mindre energi",
        b: "Naturresurser ska användas sparsamt ",
        c: "Företag/ tillverkare ska utvecklas för att bli mer skonsammare för miljö",
        correct: "b",
    },
    {
        question: "Hur mycket mer vatten behövs för producera komjölk jämfört med växtbaserade drycker?",
        a: "5x",
        b: "3x",
        c: "2x",
        correct: "b",
    },
    {
        question: "Hur stor andel av den svenska befolkningen bor på landsbygden?",
        a: "15%",
        b: "30%",
        c: "22%",
        correct: "c",
    },
    {
        question: "Vad är verkningsgraden på en elbil?",
        a: "83%",
        b: "85%",
        c: "79%",
        correct: "a",
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
let scoreElem = eId('score_counter');
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
    scoreElem.innerText = "Score: " + scoreCount;
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
        submit.style.background = "#44b927";
    } else{
        scoreCount -= 15;
        
        submit.style.background = "red";
    }
    this.setTimeout(function(){submit.style.background = "#04adc4"}, 500 );

    questionCounter++;

    if(questionCounter < testQuestions.length){
        startQuiz();
        
    } else {
        quiz.innerHTML = `
        <h2>You scored ${scoreCount} out of a possible ${testQuestions.length} points</h2>

        <button onclick="location.reload()">Reload</button>
        `;
        submit.style.display="none";
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

