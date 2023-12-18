const CreatePara = (text) => {
    const para = document.createElement('p');
    para.classList.add('main-para');
    para.textContent = text;
    
    return para;
}

const paragraph = CreatePara("Explores the art of mindful eating, encouraging readers to deeply appreciate the intricate flavours and aromas in every culinary experience");


const CreateHomePage = () => {
    const mainContainer = document.createElement('div')
    mainContainer.classList.add('main-container')
    //--------Main image---------------
    const image = document.createElement('img')
    image.classList.add('main-image');
    image.src = '../asset/restro-main.jpg'

    mainContainer.appendChild(image)
    mainContainer.appendChild(paragraph)

    return mainContainer
    

};
export default CreateHomePage;
