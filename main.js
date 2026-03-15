const questions = [
    {
        question: "Seninle ilgili en sevdiğim şey ne?",
        answers: ["Gülüşün", "Sadakatin", "Kaosun", "Her şeyin"],
        correct: 3
    },
    {
        question: "Üzgünsen ne yapmalıyım?",
        answers: ["Seni görmezden gelmek", "Şaka göndermek", "Seni kontrol etmek", "Uyuyor olmak"],
        correct: 2
    },
    {
        question: "Biz birlikte neyiz?",
        answers: ["Normal", "Durdurulamaz", "Tehlikeli", "Kafa Karıştırıcı"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const result = document.getElementById("quizResult");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionText.innerText = current.question;
    answerButtons.innerHTML = "";
    result.innerText = "";
    nextBtn.style.display = "none";

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answerButtons.appendChild(button);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
        result.innerText = "Doğru 💞";
    } else {
        result.innerText = "Yanlış 😌";
    }

    nextBtn.style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    questionText.innerText = "Sınav Bitti 💖";
    answerButtons.innerHTML = "";
    nextBtn.style.display = "none";

    if (score === questions.length) {
        result.innerText = "Beni kelimelere bile gerek kalmadan anlayan sensin! 😍";
    } else {
        result.innerText = "Fena değil... ama daha iyisini yapabileceğini biliyorum😌";
    }
}

loadQuestion();


const reassuranceMessages = [
    "Sandığından çok daha önemlisin.",
    "Her zaman yanındayım. Her zaman.",
    "Hiçbir şeyle yalnız başına yüzleşmek zorunda değilsin.",
    "Önemlisin. Sandığından daha çok."
];

function reassure() {
    const random = reassuranceMessages[Math.floor(Math.random() * reassuranceMessages.length)];
    document.getElementById("reassureText").innerText = random;
}

const compliments = [
    "Gülüşün kötü günleri iyileştiriyor.", 
    "Sandığından daha güçlüsün.", 
    "Hayatı daha ilginç kılıyorsun.",
    "Nadir birisin. Bunu unutma."
];

function compliment() {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById("complimentText").innerText = random;
}

const insideJokes = [
"Gizli: Bunu sık sık söylemem ama, sandığından çok daha fazla şey ifade ediyorsun benim için.",

"Gizli: Kötü günlerimde seninle konuşmak, tahmin edebileceğinden çok daha iyi hissetmemi sağlıyor.",

"Gizli: Kim olduğunla içten içe gurur duyuyorum.",

"Gizli: Normal davransam bile, seni çok önemsiyorum.",

"Gizli: Hayat zorlaşırsa, onu taşımana yardım edeceğim.",

"Gizli: Dünyamdaki en güvenilir insanlardan birisin.",

"Gizli: Kimsenin görmediğini düşündüğün küçük şeyleri fark ediyorum.",

"Gizli: Seni kaybetmek, itiraf edebileceğimden çok daha fazla acı verirdi."
];

function generateJoke() {
    const random = insideJokes[Math.floor(Math.random() * insideJokes.length)];
    document.getElementById("jokeText").innerText = random;
}

const secretMessage ="Bana\u00A0yaptığınız\u00A0her\u00A0şey\u00A0için\u00A0teşekkür\u00A0ederim\u00A0💕";
function showSecretMessage() {
    document.getElementById("secretMessage").style.display = "block";
}
const password = "2207"; // Change this to whatever you want

function unlockSecret() {
    const input = document.getElementById("secretPassword").value.trim();
    const output = document.getElementById("secretResult");

    if(input === password) {
        // Optional: typing effect
        output.innerText = "";
        let i = 0;
        const typing = setInterval(() => {
            output.innerText += secretMessage[i];
            i++;
            if(i >= secretMessage.length) clearInterval(typing);
        }, 30);
    } else {
        output.innerText = "Incorrect password 😔. Try again!";
    }
}
const startDate = new Date("2023-11-15");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("counter").innerText =
    days + " günler ve saymaya devam ediyor 💕";
}

updateCounter();


const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {

  slides[current].classList.remove("active");

  current = index;

  if (current < 0) current = slides.length - 1;
  if (current >= slides.length) current = 0;

  slides[current].classList.add("active");
}

document.addEventListener("keydown", (e) => {

  if (e.key === "ArrowRight") {
    showSlide(current + 1);
  }

  if (e.key === "ArrowLeft") {
    showSlide(current - 1);
  }

});


const targetDate = new Date("May 25, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);