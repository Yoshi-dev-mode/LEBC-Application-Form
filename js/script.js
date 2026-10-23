const baptismCheckbox = document.getElementById("baptizedCheck");
const applicationLink = document.getElementById("registerBtn");
const eligibilityNote = document.getElementById("eligibilityNote");

if (baptismCheckbox && applicationLink) {
    const updateApplicationLink = () => {
        const isConfirmed = baptismCheckbox.checked;

        applicationLink.classList.toggle("button-enabled", isConfirmed);
        applicationLink.classList.toggle("button-disabled", !isConfirmed);
        applicationLink.setAttribute("aria-disabled", String(!isConfirmed));
        applicationLink.tabIndex = isConfirmed ? 0 : -1;

        if (eligibilityNote) {
            eligibilityNote.textContent = isConfirmed
                ? "You can now continue to the application form."
                : "Confirm the statement to enable the application link.";
        }
    };

    applicationLink.addEventListener("click", (event) => {
        if (!baptismCheckbox.checked) {
            event.preventDefault();
        }
    });

    baptismCheckbox.addEventListener("change", updateApplicationLink);
    updateApplicationLink();
}