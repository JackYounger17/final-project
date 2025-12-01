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
        let confirmPassword = $("#confirmPassword").val().trim();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return; // makes sure that password and confirm password are the same value
        }
        let users = JSON.parse(localStorage.getItem("users")) || []; // makes users equal to the stored data / makes users empty list
        let userExists = users.some(user => user.username === username); // checks localstorage to see if new form username exists on the database
        if (userExists) {
            alert("Username already exists. Please choose another one.");
            return;
        }
        users.push({ username: username, password: password }); // new form data is added to users array and put in local storage
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created successfully!");
        document.location.href = "log-in.html";//displays message and returns to the login page
    });
});