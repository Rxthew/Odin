

function pasta(){

    const element = document.createElement('div');
    const header = document.createElement('h2');
    const para = document.createElement('p');
    const image = new Image();
    
    header.textContent = 'Pasta';
    para.textContent = 'Got to watch those carbs';
    image.src = 'https://cdn.pixabay.com/photo/2015/07/27/19/44/spaghetti-863304_960_720.jpg';
    image.alt = 'pasta_image';
    
    element.appendChild(header);
    element.appendChild(para);
    element.appendChild(image);
    
    return element
    }
    
    document.body.appendChild(pasta());