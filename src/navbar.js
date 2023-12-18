const CreateNavbar = () => {

    const navbar = document.createElement('nav');
    navbar.classList.add('navigate');

    //Create Logo
    const logo = document.createElement('h1');
    logo.textContent = "RESTRO";
    navbar.appendChild(logo);

    //Create Menu
   const menuItems = ['HOME','MENU','ABOUT US','CONTACT US'];
    const menu = document.createElement('ul')
    menu.classList.add('nav-menu')
    menuItems.forEach((itemText) => {
        const menuItem = document.createElement('li');
        menuItem.textContent = itemText;
        menu.appendChild(menuItem)

    });
    navbar.appendChild(menu);
    return navbar;
};
const navbar = CreateNavbar();
export default CreateNavbar();
export {navbar};