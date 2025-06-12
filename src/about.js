export const about = function() {

    const heading = document.createElement("h1");
    heading.classList.add("hero-heading");
    heading.textContent = "About";

    const paragraph = document.createElement("p");
    paragraph.classList.add("about-paragraph")
    paragraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut iure ab et fuga alias non? Quod, iste cumque sed esse doloremque provident, veritatis totam optio autem quis quam perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut iure ab et fuga alias non? Quod, iste cumque sed esse doloremque provident, veritatis totam optio autem quis quam perferendis."
    
    content.append(heading, paragraph);
}