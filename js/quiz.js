let mini = true;
// om sidebaren är minimerad och vi drar musen över den så vill vi att den skall dras ut, när musen inte längre är över så
// dras den in igen.
function toggleSidebar() {
    if (mini){
        console.log("opening sidebar");
        document.getElementById("mySidebar").style.width = "250px";
        document.querySelector("main").style.marginLeft = "250px";
        mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "85px";
        document.querySelector("main").style.marginLeft = "85px";
        mini = true;
    }
}

function qS(selector) {
    return document.querySelector(selector);
}

function qSA(selector) {
    return document.querySelectorAll(selector);
}

let remainingGuesses = [], guess = {}, scoreCount = 0, firstGuess = true, subjects = [], firstTry = 0, incorrectGuesses = 0, loading = false;
const testQuestions = [
    {
        question: "Who is Einstein",
        answers: {
            a: "Lars Göran",
            b: "Yo mama",
            c: "Albert Einsten"
        },
        question: "Är David coolast i gruppen?",
        answers: {
            a: "Ja",
            b: "yup",
            c: "Kan du ge dig fan på"
        }

    }
];

qS("#corGuess").innerHTML = `<span>First Try: ${firstTry}</span>`
qS("#failGuess").innerHTML = `<span>Failed Guesses: ${incorrectGuesses}</span>`

function updateScore(){
    qS("#score").innerHTML = `<span>Score: ${scoreCount}</span>`
} 

updateScore();
startWithAllSubjects();

function startWithAllSubjects() {
    remainingGuesses = [];
   
    
}


function addAnswerListeners() {

}
