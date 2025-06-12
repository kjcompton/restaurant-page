export const menu = function() {

    const heading = document.createElement("h1");
    heading.classList.add("hero-heading");
    heading.textContent = "Menu";

    const menuItem1Container = document.createElement("div");
    const menuItem1 = document.createElement("p");
    const menuItem1Description = document.createElement("p");

    menuItem1Container.classList.add("menu-item-container")

    menuItem1.classList.add("menu-item-title");
    menuItem1.textContent = "Chicken Fingers";

    menuItem1Description.classList.add("menu-item-description");
    menuItem1Description.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quae alias dicta, cupiditate similique impedit quidem hic perferendis quod maiores, magnam quo provident repellat quis placeat voluptas. Autem, molestiae perspiciatis.";

    menuItem1Container.append(menuItem1, menuItem1Description)

    const menuItem2Container = document.createElement("div");
    const menuItem2 = document.createElement("p");
    const menuItem2Description = document.createElement("p");

    menuItem2Container.classList.add("menu-item-container")

    menuItem2.classList.add("menu-item-title");
    menuItem2.textContent = "Cheese Burger";

    menuItem2Description.classList.add("menu-item-description");
    menuItem2Description.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quae alias dicta, cupiditate similique impedit quidem hic perferendis quod maiores, magnam quo provident repellat quis placeat voluptas. Autem, molestiae perspiciatis.";

    menuItem2Container.append(menuItem2, menuItem2Description)

    const menuItem3Container = document.createElement("div");
    const menuItem3 = document.createElement("p");
    const menuItem3Description = document.createElement("p");

    menuItem3Container.classList.add("menu-item-container")

    menuItem3.classList.add("menu-item-title");
    menuItem3.textContent = "Salad";

    menuItem3Description.classList.add("menu-item-description");
    menuItem3Description.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quae alias dicta, cupiditate similique impedit quidem hic perferendis quod maiores, magnam quo provident repellat quis placeat voluptas. Autem, molestiae perspiciatis.";

    menuItem3Container.append(menuItem3, menuItem3Description)
    


    content.append(heading, menuItem1Container, menuItem2Container, menuItem3Container);
}