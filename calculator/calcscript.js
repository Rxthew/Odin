function add (a,b){
    return a + b;
};

function subtract(a,b){
    return(b > a ? 0 : a - b)
}

function multiply(a,b){
    return a * b;
}

function divide (a,b){
    if (b == 0){
        alert('Fun fact: Dividing by 0 is a cry for help. Good luck on getting your soul back.');
        return 0
    }
    else {
        return a/b
    }
}

function operate(a,b,operator){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case String.fromCharCode(215):
            return multiply(a,b);
        case String.fromCharCode(247):
            return divide(a,b);
    }
}

const input = document.querySelector('#input');
let userInputs = Array.from(document.querySelectorAll('.numbtn'));
let userOperates = Array.from(document.querySelectorAll('.operate'));
const execute = document.querySelector('#execute');
const clear = document.querySelector('#clear');
const Operand = {};
Operand.first = 0;
Operand.second = 0;
Operand.operator = '';

execute.addEventListener('click', function(){
    if (Operand.operator != ''){
    Operand.first = operate((+Operand.first),(+Operand.second), Operand.operator);
    }
    input.textContent = Operand.first;
    Operand.first = 0;
    Operand.second = 0;
    Operand.operator = 0;
});

clear.addEventListener('click',function(){
    Operand.first = 0;
    Operand.second = 0;
    Operand.operator = 0;
    input.textContent = 0;
})

userInputs = userInputs.map(function(inp){return inp.addEventListener('click',function(e){
    if (Operand.first == 0){
        input.textContent = e.target.textContent;
        Operand.first = input.textContent;
        console.log(Operand);
    }

    else if ((isNaN(+(input.textContent)))){
        input.textContent = e.target.textContent;
        Operand.second = input.textContent;            
        }
    
    else if (input.textContent == 0){
        input.textContent = e.target.textContent;
    }

    else if (Operand.second == 0) {
        input.textContent = input.textContent.toString() + e.target.textContent.toString();
    }

    else {
        input.textContent = input.textContent.toString() + e.target.textContent.toString();
        Operand.second = input.textContent;
    }
}

)})

userOperates = userOperates.map(function(op){return op.addEventListener('click', function(e){
         if (Operand.second == 0){
                  if (input.textContent == 0){
                    input.textContent = e.target.textContent; 
                    Operand.operator = input.textContent;
                  }
                   else {
                     Operand.first = input.textContent;
                     input.textContent = e.target.textContent; 
                     Operand.operator = input.textContent;
                }
                }
        else {
                Operand.first = operate((+Operand.first),(+Operand.second), Operand.operator);
                Operand.second = 0;
                input.textContent = e.target.textContent;
                Operand.operator = input.textContent;
                console.log(Operand)
            }
    
} )})



