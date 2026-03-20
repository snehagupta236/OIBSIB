// Register User
function register() {
    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem(username, password);
    alert("Registration Successful!");
    window.location.href = "index.html";
}

// Login User
function login() {
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;

    const storedPass = localStorage.getItem(username);

    if (storedPass === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
}

// Check Authentication
function checkAuth() {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "index.html";
    } else {
        document.getElementById("welcomeText").innerText = "Hello, " + user;
    }
}

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}