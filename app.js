let faqboxes = document.querySelectorAll(".faqbox-extra");
let svgs = document.querySelectorAll("svg");

// Loop through each SVG element and add event listener
svgs.forEach((svg, index) => {
    svg.addEventListener("click", () => toggleFaqBox(index));
});

function toggleFaqBox(index) {
    // If the clicked FAQ box is currently displayed, hide it; otherwise, display it
    if (faqboxes[index].style.display === "flex") {
        faqboxes[index].style.display = "none";
    } else {
        // First, hide all FAQ boxes
        faqboxes.forEach(box => {
            box.style.display = "none";
        });
        // Then, display the clicked FAQ box
        faqboxes[index].style.display = "flex";
    }
}
