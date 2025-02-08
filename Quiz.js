const url = "https://www.myjsons.com/v/quizgame";
let answers = []; // Stores selected answers
let selectedOption = null; // Stores currently selected option
let UserName = "Username";
let quizData = null;
let numOfQue, shuffleQue, currentQue = 0, quizStatua = 0;

// Store username in session storage if not already set
if (!sessionStorage.getItem("Username")) {
    sessionStorage.setItem("Username", UserName);
}

// Fetch quiz data from API
async function fetchData() {
    try {
        ShowAlertView("Getting things ready...");
        const response = await fetch(url);
        quizData = await response.json();
        
        // Set quiz title and topic
        document.getElementById("title1").innerText = quizData.title;
        document.getElementById("topic1").innerText = quizData.topic;
        numOfQue = quizData.questions.length;

        // Generate a random sequence of question indices
        if (!isNaN(numOfQue) && numOfQue > 0) {
            shuffleQue = generateUniqueRandomNumbers(numOfQue);
        }

        loadQuestion(); // Load first question
        hideAlertView(); // Hide alert popup
        startTimer(((quizData.duration)*60), document.getElementById("timer")); // Start countdown timer
    } catch (error) {
        ShowAlertView("Failed to fetch quiz data. Please reload.");
    }
}

// Start quiz timer
function startTimer(duration, display) {
    let timer = duration;
    let interval = setInterval(() => {
        let minutes = Math.floor(timer / 60);
        let seconds = (timer % 60).toString().padStart(2, '0');
        document.getElementById("time").innerText = `${minutes}:${seconds}`;

        // Stop timer and show result if time is up
        if (--timer < 0 && quizStatua === 0) {
            clearInterval(interval);
            ShowAlertEnd("Time's up!");
            showResult();
        }
    }, 1000);
}

// Fetch quiz data when the window loads
window.onload = fetchData;

// Display stored username
document.getElementById("username2").innerText = sessionStorage.getItem("Username");

// Event listener for option selection
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("label").forEach(label => {
        label.addEventListener("click", function () {
            // Remove previous selection highlight
            document.querySelectorAll("label").forEach(l => l.classList.remove("bg-red-800"));
            this.classList.add("bg-red-800");
            selectedOption = this.innerText; // Store selected option
        });
    });
});

// Load current question and options
function loadQuestion() {
    document.getElementById("Que").innerText = `Que. ${quizData.questions[shuffleQue[currentQue]].description}`;
    quizData.questions[shuffleQue[currentQue]].options.forEach((option, index) => {
        document.getElementById(`o${index + 1}`).innerText = option.description;
    });
}

// Handle next question logic
function nextQue() {
    if (!selectedOption) {
        ShowAlertView("Please select an option before proceeding!");
        return;
    }
    
    answers.push(selectedOption); // Store selected answer
    selectedOption = null;
    document.querySelectorAll("label").forEach(label => label.classList.remove("bg-red-800"));
    
    if (++currentQue < numOfQue) {
        if (currentQue === numOfQue - 1) {
            // Change next button to indicate quiz end
            document.getElementById("next").innerText = "END Quiz";
            document.getElementById("next").style.backgroundColor = "red";
        }
        document.getElementById("Qnumber").innerText = currentQue + 1;
        loadQuestion(); // Load next question
    } else {
        document.getElementById("questions").style.display = "none";
        showResult(); // Display final result
    }
}

// Show end alert message
function ShowAlertEnd(message) {
    document.getElementById("questions").style.display = "none";
    document.getElementById("alertview").style.display = "grid";
    document.getElementById("OKbutton").style.display = "none";
    document.getElementById("alertText").innerText = message;
}

// Show alert message
function ShowAlertView(message) {
    document.getElementById("questions").style.display = "none";
    document.getElementById("alertview").style.display = "grid";
    document.getElementById("alertText").innerText = message;
}

// Hide alert message
function hideAlertView() {
    document.getElementById("alertview").style.display = "none";
    document.getElementById("questions").style.display = "grid";
}

// Generate a unique shuffled sequence of numbers from 0 to n-1
function generateUniqueRandomNumbers(n) {
    let numbers = Array.from({ length: n }, (_, i) => i);
    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

// Calculate and display final quiz score
function showResult() {
    let score = answers.reduce((acc, answer, i) => {
        let questionIndex = shuffleQue[i];
        let options = quizData.questions[questionIndex].options;
        let correctOption = options.find(opt => opt.is_correct);
        return answer === correctOption.description ? acc + 4 : acc - 1;
    }, 0);

    document.getElementById("MainResult").style.display = "flex";
    document.getElementById("showResult").innerText = score;
    quizStatua = 1;
}

// Redirect user to main screen
function mainScreen() {
    window.location.href = "index.html";
}
