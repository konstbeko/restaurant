export default function initialLoad() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Our Amazing Restaurant!";

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "We serve the best food in town. Come visit us today!";

    content.appendChild(headline);
    content.appendChild(paragraph);
}
