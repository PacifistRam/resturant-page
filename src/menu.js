const mainMenuItems = [
    {
        title:'Classic Burger',
        image: ' ../asset/classic-burger.jpg',
        description:'Our not basic burger topped with lettuce,   tomato & shaved red onion',
        price: '$7.95'
    },
    {
        title:'Hickory Burger',
        image: '../asset/hickory-burger.jpg',
        description:'Cheddar cheese, hickory-smoked bacon and smokey barbecue sauce. ',
        price: '$9.95'
    },
    {
        title:'Onion Burger',
        image: '../asset/onion-burger.jpg',
        description:'Caramelized onions and garlic mayo, topped with chopped green onions',
        price: '$8.95'
    },
    {
        title:'Teriyaki Turkey Burger',
        image: '../asset/teriyaki-burger.jpg',
        description:'Roasted turkey dipped in teriyaki sauce, topped with american cheese and grilled onions. ',
        price:'$11.5'
    }
];

const CreateMenu = (menuItems) => {
    const menuContainer = document.createElement('div');
    const mainMenuContainer = document.createElement('div');
    mainMenuContainer.classList.add('main-menu-container');
    menuContainer.appendChild(mainMenuContainer);

    menuItems.forEach(item => {
        //create menu card
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        //Create title
        const title =  document.createElement('h3');
        title.textContent = item.title;
        
        //Create image
        const image =  document.createElement('img');
        image.src = item.image;
       
       
        //Create description
        const description =  document.createElement('p');
        description.textContent = item.description;
        
        //Create price
        const price =  document.createElement('p');
        price.textContent = item.price;

        //append element to menu card
        menuCard.appendChild(title);
        menuCard.appendChild(image);    
        menuCard.appendChild(description);  
        menuCard.appendChild(price);    
        
        //append menu-card to mainmenu conatiner
        mainMenuContainer.appendChild(menuCard);
    });
    return menuContainer
};

const menu = CreateMenu(mainMenuItems);

export default menu;
