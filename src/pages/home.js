import createElement from "../utilities/createElement.js"

export const home = function() {
    const heading = createElement("h1", "hero-heading another-class", "Tabletop Tavern");
    const p = createElement("p", ["hero-subheading"], "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At illum nobis eaque atque alias ducimus, natus eum amet rem error similique praesentium, dicta expedita neque exercitationem nesciunt ab, libero nihil?");
    const button = createElement("button", ["hero-button"], "Call to Action");
    
    return [heading, p, button];
}