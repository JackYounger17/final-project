$(document).ready(function () {
    if (localStorage.getItem("isLoggedIn") === "true") {
        alert("You are already logged in.");
        document.location.href = "index.html"; // if already logged in it will send back to homepage and display mesage
        return;
    }
    $("#loginForm").submit(function (empty) {
        empty.preventDefault(); //stops empty forms from being entered
        let username = $("#username").val().trim();
        let password = $("#password").val().trim();
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.username === username && user.password === password); // checks if the details given match whats on the localstorage
        if (user) {
            alert("Login successful!");
            localStorage.setItem("isLoggedIn", "true"); // if user logs in it sets log in status in local data to true
            document.location.href = "index.html"; // redirects to the home page
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});