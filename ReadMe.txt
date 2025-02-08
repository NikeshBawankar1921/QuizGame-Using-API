# 🎯 Quiz Game

## 📌 Overview
The **Quiz Game** is a web-based application that dynamically fetches quiz data from an API and provides an interactive multiple-choice quiz experience. The game allows users to answer questions within a given time limit and calculates scores based on correct and incorrect answers.

## ✨ Features
✅ Fetches quiz data from an API  
✅ Dynamically displays quiz questions and multiple-choice options  
✅ ⏳ Timer functionality for the quiz session  
✅ 📊 Tracks and stores user responses  
✅ 🎯 Calculates the final score based on correct and incorrect answers  
✅ 🔔 Custom alert messages for user feedback  
✅ 🖥️ User-friendly UI with smooth interactivity  

## 🛠️ Technologies Used
- **🌐 HTML**: Structure of the quiz interface
- **🎨 CSS (Tailwind CSS)**: Styling and UI enhancements
- **⚡ JavaScript**: Fetching quiz data, handling events, and managing game logic
- **🔗 API Integration**: Fetches questions from `https://www.myjsons.com/v/quizgame`

## 🚀 Installation & Setup
1. 📥 Clone or download the repository.
2. 🌐 Ensure you have a working internet connection to fetch data from the API.
3. 🏁 Open `index.html` in a browser to start the quiz.

## 📂 File Structure
```
/quiz-game
│── 📄 index.html       # Main UI of the Quiz Game
│── 🎨 output.css       # Tailwind CSS styles
│── 📜 Quiz.js          # JavaScript logic for quiz functionality
│── 📖 README.md        # Project documentation
│── 🖼️ /Image           # Folder containing images (icons, backgrounds, etc.)
```

## 🎮 How to Play
1️⃣ **Enter Your Name** - The user must enter a valid name (only letters) before starting.  
2️⃣ **Start Quiz** - The quiz fetches questions from the API and begins.  
3️⃣ **Select an Answer** - Click on a multiple-choice option to select an answer.  
4️⃣ **Next Question** - Click the 'Next' button to proceed to the next question.  
5️⃣ **Timer** - The quiz must be completed within the given time.  
6️⃣ **Final Score** - After answering all questions or when time is up, the final score is displayed.  

## 🔧 JavaScript Functionality
### 📡 `fetchData()`
- Fetches quiz data from the API and initializes the game.

### ❓ `loadQuestion()`
- Loads the current question and its multiple-choice options dynamically.

### ⏭️ `nextQue()`
- Saves the selected answer and moves to the next question.

### ⏳ `startTimer(duration, display)`
- Starts and updates the countdown timer for the quiz.

### 🏆 `showResult()`
- Calculates the score and displays the quiz result.

## ⚠️ Custom Alerts
- 🔔 Alerts are used for error messages, quiz completion, and invalid inputs.
- Uses the `ShowAlertView()` function to display alerts.

## 🔮 Future Enhancements
- 🔐 Add user authentication for saving progress.
- 📚 Implement different quiz categories.
- 🏆 Include a leaderboard for competitive gameplay.

## 📜 License
This project is open-source and available for personal and educational use.

## 👨‍💻 Developed by
**Nikesh Bawankar**

---
Enjoy playing the **Quiz Game**! 🚀🎉

