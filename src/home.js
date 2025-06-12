export const home = function() {



    const heading = document.createElement("h1");
    heading.classList.add("hero-heading");
    heading.textContent = "Tabletop Tavern";

    const p = document.createElement("p");
    p.classList.add("hero-subheading");
    p.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At illum nobis eaque atque alias ducimus, natus eum amet rem error similique praesentium, dicta expedita neque exercitationem nesciunt ab, libero nihil?"

    const button = document.createElement("button");
 
    button.classList.add("hero-button");
    button.textContent = "Call to Action";


    content.append(heading, p, button);
}

