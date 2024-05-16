let faqboxes = document.querySelectorAll(".faqbox-extra");
let faqs = document.querySelectorAll(".faqbox");

faqs.forEach((faqs, index) => {
    faqs.addEventListener("click", () => toggleFaqBox(index));
});

function toggleFaqBox(index) {
    if (faqboxes[index].style.display === "flex") {
        faqboxes[index].style.display = "none";
        
    } else {
        faqboxes.forEach(box => {
            box.style.display = "none";
        });
        faqboxes[index].style.display = "flex";
    }
}
