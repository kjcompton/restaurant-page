export default function(tag, classes= "", text = "") {
    const element = document.createElement(tag);
    element.className = classes;
    element.textContent = text;
    return element;
};
