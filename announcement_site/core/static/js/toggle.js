document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-more");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const shortText = btn.parentElement.querySelector(".short");
            const fullText = btn.parentElement.querySelector(".full");

            shortText.classList.toggle("d-none");
            fullText.classList.toggle("d-none");

            btn.textContent = fullText.classList.contains("d-none") ? "Read More" : "Read Less";
        });
    });
});
