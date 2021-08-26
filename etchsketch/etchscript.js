let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

container = document.querySelector('#container');
let grids; 
let bttn = document.createElement('button');
bttn.setAttribute('id','erase');
bttn.textContent = 'Reset';
bttn.addEventListener('click', function(){
    let whites = document.querySelectorAll('.white');
    for (let x = 0; x < whites.length;x++){
        whites[x].classList.toggle('white', false)
    }
    grids = prompt('Choose your grid dimensions. The higher the number the thinner the brush');
    if (grids > 100 | grids < 1){grids = 100};
    container.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
    container.style.gridTemplateRows =  `repeat(${grids},1fr)`;

})

let header = document.querySelector('#header')
header.appendChild(bttn);

for (let i = 0; i <= 9999; i++){
    let div = document.createElement('div');
    div.addEventListener('mouseover', function(e){
        e.target.classList.toggle('white', true);
    });
    div.addEventListener('click', function(e){
        e.target.classList.toggle('white', false);
    })   
    container.appendChild(div)  
 };



