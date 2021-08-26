let container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
container = document.querySelector('#container');

for (let i = 0; i <= 9999; i++){
    let div = document.createElement('div');
    div.addEventListener('mouseover', function(e){
        console.log(e.target);
        e.target.style.backgroundColor = 'white';
    }, {once:true});
    container.appendChild(div)  
 };



