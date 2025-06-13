import createElement from "../utilities/createElement.js";

export const about = function() {
    const h1 = createElement("h1", "hero-heading", "About");
    const paragraph = createElement("p", "about-paragraph", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut iure ab et fuga alias non? Quod, iste cumque sed esse doloremque provident, veritatis totam optio autem quis quam perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut iure ab et fuga alias non? Quod, iste cumque sed esse doloremque provident, veritatis totam optio autem quis quam perferendis.")
    
    return [h1, paragraph];
}