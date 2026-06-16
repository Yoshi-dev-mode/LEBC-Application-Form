const checkBox = document.getElementById("baptizedCheck");
const registerBtn = document.getElementById("registerBtn");

checkBox.addEventListener("change", function () {
    if (this.checked) {
        registerBtn.classList.remove("disabled");
        registerBtn.onclick = null; // enable click
    } else {
        registerBtn.classList.add("disabled");
        registerBtn.onclick = function () {
            return false;
        };
    }
});