let startScreen = document.getElementById("start-screen");
let quizScreen = document.getElementById("quiz-screen");
let resultScreen = document.getElementById("result-screen");

let numOfQuestions = document.getElementById("question-count");
let difficulty = document.getElementById("difficulty");
let startBtn = document.getElementById("start-btn");

let questionCount = document.getElementById("progress");
let questions = document.getElementById("question-text");
let optionsContainer = document.getElementById("options-container");
let nextBtn = document.getElementById("next-btn");

let totalScore = document.getElementById("total-score");
let restartBtn = document.getElementById("restart-btn");

//Questions and Options array
const easyQuizArray = [
    {
        id: "0",
        question: "Which is the most widely spoken language in the world?",
        options: ["Spanish", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "1",
        question: "Which is the only continent in the world without a desert?",
        options: ["North America", "Asia", "Africa", "Europe"],
        correct: "Europe",
    },
    {
        id: "2",
        question: "Who invented Computer?",
        options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
        correct: "Charles Babbage",
    },
    {
        id: "3",
        question: "What do you call a computer on a network that requests files from another computer?",
        options: ["A client", "A host", "A router", "A web server"],
        correct: "A client",
    },
    {
        id: "4",
        question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
        options: ["Peripheral", "Clip art", "Highlight", "Execute"],
        correct: "Peripheral",
    },
    {
        id: "5",
        question: "The main computer that stores the files that can be sent to computers that are networked together is:",
        options: ["Clip art", "Mother board", "Peripheral", "File server"],
        correct: "File server",
    }, {
        id: "6",
        question: "How can you catch a computer virus?",
        options: ["Sending e-mail messages", "Using a laptop during the winter", "Opening e-mail attachments", "Shopping on-line"],
        correct: "Opening e-mail attachments",
    },
    {
        id: "7",
        question: "Google (www.google.com) is a:",
        options: ["Search Engine", "Number in Math", "Directory of images", "Chat service on the web"],
        correct: "Search Engine",
    },
    {
        id: "8",
        question: "Which is not an Internet protocol?",
        options: ["HTTP", "FTP", "STP", "IP"],
        correct: "STP",
    },
    {
        id: "9",
        question: "Which of the following is not a valid domain name?",
        options: ["www.yahoo.com", "www.yahoo.co.uk", "www.com.yahoo", "www.yahoo.co.in"],
        correct: "www.com.yahoo",
    },
];

// ...existing code...

const mediumQuizArray = [
    { 
        id: "m0", 
        question: "What does HTML stand for?", 
        options: ["Hyperlinks Text Markup Language","Hyper Text Markup Language","Home Tool Markup Language","Hyperlinking Text Mark Language"], 
        correct: "Hyper Text Markup Language" 
    },
    { 
        id: "m1", 
        question: "Which sorting algorithm has average case O(n log n)?", 
        options: ["Bubble sort","Insertion sort","Quick sort","Selection sort"], 
        correct: "Quick sort" 
    },
    { 
        id: "m2", 
        question: "Which protocol is used to securely browse the web?", 
        options: ["HTTP","FTP","SMTP","HTTPS"], 
        correct: "HTTPS" 
    },
    { 
        id: "m3", 
        question: "Which data structure uses FIFO order?", 
        options: ["Stack","Queue","Tree","Graph"], 
        correct: "Queue" 
    },
    { 
        id: "m4", 
        question: "What is the main purpose of DNS?", 
        options: ["Encrypt traffic","Translate domain names to IPs","Store website content","Provide email service"], 
        correct: "Translate domain names to IPs" 
    },
    { 
        id: "m5", 
        question: "Which HTML element is used for an unordered list?", 
        options: ["<ol>","<ul>","<li>","<list>"], 
        correct: "<ul>" 
    },
    { 
        id: "m6", 
        question: "Which of these is a NoSQL database?", 
        options: ["MySQL","PostgreSQL","MongoDB","SQLite"], 
        correct: "MongoDB" 
    },
    { 
        id: "m7", 
        question: "What is a CSS selector used for?", 
        options: ["Selecting HTML elements to style","Running JavaScript code","Managing server routes","Compressing images"], 
        correct: "Selecting HTML elements to style" 
    },
    { 
        id: "m8", 
        question: "Which HTTP status code means 'Not Found'?", 
        options: ["200","301","404","500"], 
        correct: "404" 
    },
    { 
        id: "m9", 
        question: "Which keyword declares a constant in JavaScript?", 
        options: ["var","let","const","static"], 
        correct: "const" 
    }
];

const hardQuizArray = [
    { id: "h0", question: "Which number system is commonly used internally by computers?", options: ["Decimal","Hexadecimal","Binary","Roman"], correct: "Binary" },
    { id: "h1", question: "In Big O notation, what is the complexity of binary search on a sorted array?", options: ["O(n)","O(log n)","O(n log n)","O(1)"], correct: "O(log n)" },
    { id: "h2", question: "What does ACID stand for in databases?", options: ["Atomicity, Consistency, Isolation, Durability","Accuracy, Consistency, Integrity, Durability","Atomic, Consistent, Isolated, Durable","Access, Control, Integrity, Durability"], correct: "Atomicity, Consistency, Isolation, Durability" },
    { id: "h3", question: "Which layer of the OSI model handles routing between networks?", options: ["Data Link","Network","Transport","Application"], correct: "Network" },
    { id: "h4", question: "What is the time complexity of merge sort?", options: ["O(n^2)","O(n log n)","O(n)","O(log n)"], correct: "O(n log n)" },
    { id: "h5", question: "Which cryptographic algorithm is asymmetric (uses public/private keys)?", options: ["AES","RSA","SHA-256","MD5"], correct: "RSA" },
    { id: "h6", question: "In RESTful APIs, which HTTP method is typically used to update a full resource?", options: ["GET","POST","PUT","PATCH"], correct: "PUT" },
    { id: "h7", question: "What is a primary key in a relational database?", options: ["A key used to encrypt the DB","A unique identifier for table rows","A foreign reference to another table","A performance index"], correct: "A unique identifier for table rows" },
    { id: "h8", question: "Which technique avoids blocking the main thread in JavaScript for long-running tasks?", options: ["Synchronous loops","Web Workers","Alert dialogs","Blocking XHR"], correct: "Web Workers" },
    { id: "h9", question: "Which of these is a distributed version control system?", options: ["SVN","Git","FTP","SCP"], correct: "Git" }
];

// ...existing code...

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizArray = [];
let totalQuestionsSelected = 0;

function getQuizByDifficulty() {
    if (difficulty.value === "easy") {
        quizArray = easyQuizArray;
    } else if (difficulty.value === "medium") {
        quizArray = mediumQuizArray;
    } else if (difficulty.value === "hard") {
        quizArray = hardQuizArray;
    } else {
        return quizArray = [];
    }
}

function showCorrectAnswer() {
    let correctAnswer = quizArray[currentQuestionIndex].correct;
    let optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach((button) => {
        if (button.innerText === correctAnswer) {
            button.classList.add("correct");
        }
    });
}

function optionCheck(optionBtn) {
    let correctAnswer = quizArray[currentQuestionIndex].correct;

    if (optionBtn.innerText === correctAnswer) {
        optionBtn.classList.add("correct");
        score++;
    } else {
        optionBtn.classList.add("wrong");

        //show correct answer when clicked option is wrong
        setTimeout(showCorrectAnswer, 500);
    }

    //disable all options after selecting one
    let optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach((button) => {
        button.disabled = true;
    });

    //enable next button after selecting an option
    nextBtn.disabled = false;
}

function showQuestion() {
    let currentQuestion = quizArray[currentQuestionIndex];
    if (!currentQuestion) return;

    questions.innerHTML = `${currentQuestion.question}`;
    questionCount.innerHTML = `Question ${currentQuestionIndex + 1}  <span>/ ${totalQuestionsSelected}</span>`;

    optionsContainer.innerHTML = "";
    //disable next button initially
    nextBtn.disabled = true;
    
    currentQuestion.options.forEach((option) => {
        let optionBtn = document.createElement("button");
        optionBtn.innerText = option;
        optionBtn.classList.add("option-btn");
        optionBtn.addEventListener("click", () => {
            optionCheck(optionBtn);
        });

        optionsContainer.appendChild(optionBtn);
    });

    //check if it's the last question
    nextBtn.innerText = (currentQuestionIndex + 1 === totalQuestionsSelected) ? "Show result" : "Next";
}

startBtn.addEventListener("click", () => {
    getQuizByDifficulty();

    if (quizArray.length === 0) {
        alert("Please select a difficulty level to start the quiz.");
        return;
    }

    totalQuestionsSelected = Number(numOfQuestions.value);

    currentQuestionIndex = 0;
    score = 0;

    if (totalQuestionsSelected > quizArray.length) {
        totalQuestionsSelected = quizArray.length;
    }

    startScreen.classList.add("hide");
    quizScreen.classList.remove("hide");
    resultScreen.classList.add("hidden");

    showQuestion();
});

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex + 1 < totalQuestionsSelected) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        quizScreen.classList.add("hide");
        resultScreen.classList.remove("hidden");
        totalScore.innerHTML = `${score} / ${totalQuestionsSelected}`;
    }
});

restartBtn.addEventListener("click", () => {
    // Reset all variables and UI elements to initial state
    currentQuestionIndex = 0;
    score = 0;
    quizArray = [];
    totalQuestionsSelected = 0;
    numOfQuestions.value = "5";
    difficulty.value = "select";
    nextBtn.innerText = "Next";
    nextBtn.disabled = true;

    // Show start screen and hide others
    quizScreen.classList.add("hide");
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hide");
});