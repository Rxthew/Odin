

function pizza(){

    const element = document.createElement('div');
    const header = document.createElement('h2');
    const para = document.createElement('p');
    const image = new Image();
    
    header.textContent = 'Pizza';
    para.textContent = 'You may you think you eat me, but you are actually consumed by me :)';
    image.src = 'https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_960_720.jpg';
    image.alt = 'pizza_image';
    
    element.appendChild(header);
    element.appendChild(para);
    element.appendChild(image);
    
    return element
    }
    
    document.body.appendChild(pizza());