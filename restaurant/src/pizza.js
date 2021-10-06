export default function pizza(){

    const element = document.createElement('div');
    const header = document.createElement('h2');
    const para = document.createElement('p');
    const image = new Image();
    
    element.setAttribute('id', 'Pizza');
    header.textContent = 'Pizza';
    para.textContent = 'You know you want me';
    image.src = 'https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_960_720.jpg';
    image.alt = 'pizza_image';
    
    element.appendChild(header);
    element.appendChild(para);
    element.appendChild(image);
    
    return element
    }
    
    