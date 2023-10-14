document.addEventListener("DOMContentLoaded", function () {
    var options = document.querySelectorAll('input[type="radio"]');
    
    options.forEach(function (option) {
        option.addEventListener("change", function () {
            if (this.checked) {
                alert("You selected: " + this.value);
            }
        });
    });
});

function validateForm() {
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password match the criteria
    if (username === "vincent" && password === "6969") {
        // Redirect to the home page (or any other desired page)
        window.location.href = "home.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false; // Prevent form submission
    };
};