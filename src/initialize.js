import CreateHomePage from "./home"
import menu from "./menu";
import CreateAboutUs from "./aboutUs";
import { navbar } from "./navbar";


const loadModule = ( () => {
    const container = document.querySelector('#content');

    function loadPage (content) {
        if (container) {
                    container.innerHTML = "";
                    container.appendChild(navbar);
                    container.appendChild(content);
            
                }
                else {
                    console.log("container not found");
                }
    }

    function loadHomePage() {
        loadPage(CreateHomePage());
    }
    function loadMenu() {
        loadPage(menu);
    }
    function loadAboutUs() {
        loadPage(CreateAboutUs());
    }

    const initializeEventListeners = () => {

        const menuLinks = document.querySelectorAll('li')
        menuLinks.forEach(item => {
            item.addEventListener('click', (e) => {
                const clickedItem = e.target.textContent
                if (clickedItem === 'HOME') {
                    loadHomePage();
                } else if (clickedItem === 'MENU') {
                    loadMenu();
                } else if (clickedItem === 'ABOUT US') {
                    
                    console.log(clickedItem);
                    loadAboutUs();
                }
            })
    
        });
        return menuLinks;
    };

    return {
        loadHomePage,
        initializeEventListeners,
        loadMenu,
        loadAboutUs
    };

})();


export default loadModule;

