import createElement from "../utilities/createElement.js"

export const menu = function() {

    const menu = [
        {
            name: "Chicken Fingers",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quae alias dicta, cupiditate similique impedit quidem hic perferendis quod maiores, magnam quo provident repellat quis placeat voluptas. Autem, molestiae perspiciatis.",
        },
        {
            name: "Cheese Burger",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quae alias dicta, cupiditate similique impedit quidem hic perferendis quod maiores, magnam quo provident repellat quis placeat voluptas. Autem, molestiae perspiciatis.",
        },
        {
            name: "Salad",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quae alias dicta, cupiditate similique impedit quidem hic perferendis quod maiores, magnam quo provident repellat quis placeat voluptas. Autem, molestiae perspiciatis.",
        },
        {
            name: "Egg Rolls",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quae alias dicta, cupiditate similique impedit quidem hic perferendis quod maiores, magnam quo provident repellat quis placeat voluptas. Autem, molestiae perspiciatis.",
        },
        {
            name: "Soup",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quae alias dicta, cupiditate similique impedit quidem hic perferendis quod maiores, magnam quo provident repellat quis placeat voluptas. Autem, molestiae perspiciatis.",
        },
    ];

    const heading = createElement("h1", "hero-heading", "Menu");
    const menuContainer = createElement("div", "menu-container");

    menu.forEach(item => {
        const itemContainer = createElement("div", "menu-item-container");
        const itemName = createElement("p", "menu-item-title", item.name);
        const itemDescription = createElement("p", "menu-item-description", item.description);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        menuContainer.appendChild(itemContainer);
    });

    return [heading, menuContainer];
}