export default function menu() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "This is our awesome Menu!";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Lobster, Bolognese, Tiramisu and Pie";

    content.appendChild(headline);
    content.appendChild(paragraph);
}
