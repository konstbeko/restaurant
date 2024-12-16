export default function contact() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Please contact us!";

    const paragraph = document.createElement("p");
    paragraph.textContent = "larrythelobster@gmail.com Larry the Lobster";

    content.appendChild(headline);
    content.appendChild(paragraph);
}
