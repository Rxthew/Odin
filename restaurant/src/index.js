import pizza from './pizza';
import pasta from './pasta';
import soup from './soup';


(function restaurant(){

const container = document.createElement('div');
container.setAttribute('id','contents');
document.body.appendChild(container);


const addHeader = (function (){
    const headerCont = document.createElement('span');
    const header = document.createElement('h1');
    header.textContent = 'Welcome to the Restaurant';

    headerCont.appendChild(header);
    container.appendChild(headerCont);

})();

const tabs = (function (){
    const tabContainer = document.createElement('div');

    let pizzaTab = document.createElement('button');
    let pastaTab = document.createElement('button');
    let soupTab =  document.createElement('button');

    pizzaTab.textContent = 'Pizza';
    pastaTab.textContent = 'Pasta';
    soupTab.textContent = 'Soup';

    pizzaTab.setAttribute('id', 'pizzaBtn');
    pastaTab.setAttribute('id', 'pastaBtn');
    soupTab.setAttribute('id', 'soupBtn');

    tabContainer.appendChild(pizzaTab);
    tabContainer.appendChild(pastaTab);
    tabContainer.appendChild(soupTab);

    container.appendChild(tabContainer);

    return {
          'pizzaBtn': [pizzaTab, pizza],
          'pastaBtn': [pastaTab, pasta], 
          'soupBtn': [soupTab,soup], 
        }
})()

const defaultIsSoup = (function(){
    const s = soup();
    s.setAttribute('class', 'active');
    container.appendChild(s);
})()

const removeContents = function(elem){
    elem.parentNode.removeChild(elem);

};

const generateContents = function(event){
    const active = tabs[`${event.target.id}`][1]();
    active.setAttribute('class', 'active');
    container.appendChild(active);

};

const addTabEvents = (function(){
    const remove = () => document.querySelector('.active');
    Object.keys(tabs).forEach(
        function(key){
                tabs[key][0].onclick = function(button){
                if (remove().id !== button.target.textContent){
                 removeContents(remove());
                 generateContents(button);
                }
            }
        })

})();

})();