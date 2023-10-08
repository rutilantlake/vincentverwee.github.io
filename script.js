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