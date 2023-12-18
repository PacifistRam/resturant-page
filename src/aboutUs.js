const CreatePara = (text) => {
    const para = document.createElement('p');
    para.classList.add('about-us-para');
    para.textContent = text;
    
    return para;
}

const paragraph = CreatePara('Welcome to "RESTRO" , where passion meets palate to redefine the burger experience. At our heart, we are more than just a restaurant; we are curators of culinary delights, artisans of flavor, and creators of memories.');


const CreateAboutUs = () => {
    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.classList.add('about-us-container')
    const image = document.createElement('img')
    image.classList.add('main-image');
    image.src = '../asset/about-us.jpg';
    const aboutUsContainerText = document.createElement('div');
    aboutUsContainerText.classList.add('about-us-container-text')
    const aboutUsHeading = document.createElement('h1');
    aboutUsHeading.textContent = "ABOUT US";
    const aboutUsHeading2 = document.createElement('h2');
    aboutUsHeading2.textContent = "Crafting Culinary Delights, One Burger at a Time";
    const aboutUsHeading3 = document.createElement('h3');
    aboutUsHeading2.textContent = "Indulge in a Symphony of Flavors";
    aboutUsContainer.appendChild(image);
    aboutUsContainer.appendChild(aboutUsContainerText);
    aboutUsContainerText.appendChild(aboutUsHeading);
    aboutUsContainerText.appendChild(aboutUsHeading2);
    aboutUsContainerText.appendChild(aboutUsHeading3);
    aboutUsContainerText.appendChild(paragraph);

    return aboutUsContainer;
}

export default CreateAboutUs;