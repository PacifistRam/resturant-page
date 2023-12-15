import {navbar} from "./navbar";
import CreateHomePage from "./home";
import menu  from "./menu";

const container = document.querySelector ('#content')


function homePageLoad () {
    //container.innerHTML = "";
    if (container){
       
        container.appendChild(navbar);
        container.appendChild(CreateHomePage());
        
    }
    else {
        console.log("container not found");
    }
    
   
}

function loadMenu () {
    //container.innerHTML = "";
    if (container){
        
        container.appendChild(navbar);
        container.appendChild(menu);
        
    }
    else {
        console.log("container not found");
    }
    
}

// homePageLoad();
loadMenu();
