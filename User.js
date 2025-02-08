function saveuser() {
    let userInput = document.getElementById("userName").value.trim();

    // Regular expression to allow only letters (no numbers or special characters)
    let nameRegex = /^[A-Za-z\s]+$/;

    if (userInput === "") {
        alert("Enter User Name");
        return;
    }

    if (!nameRegex.test(userInput)) {
        alert("Only letters are allowed in the name.");
        return;
    }

    UserName = userInput;
    sessionStorage.setItem("Username", UserName);

    try {
        document.getElementById("headerusername").innerText = UserName;
    } catch (e) {
        ShowAlertView(e);
    }

    window.location.href = "Quiz.html";
}
