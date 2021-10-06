export default function soup(){

  const element = document.createElement('div');
  const header = document.createElement('h2');
  const para = document.createElement('p');
  const image = new Image();

  element.setAttribute('id', 'Soup');
  header.textContent = 'Soup';
  para.textContent = 'I am good for you';
  image.src = 'https://cdn.pixabay.com/photo/2019/09/27/09/59/pumpkin-soup-4508015_960_720.jpg';
  image.alt = 'soup_image';

  element.appendChild(header);
  element.appendChild(para);
  element.appendChild(image);

return element
}

