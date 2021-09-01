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
    return (b == 0 ? 0 : a / b)
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
const Operand = {};
Operand.first = 0;
Operand.second = 0;
Operand.operator = '';

userInputs = userInputs.map(function(inp){return inp.addEventListener('click',function(e){
    if (Operand.first == 0){
        if (input.textContent.toString().replace(/\s+/g, '').length == 1 && input.textContent.toString().replace(/\s+/g, '') == 0){
        input.textContent = e.target.textContent;
        console.log(Operand);
}
        else {input.textContent = input.textContent.toString() + e.target.textContent.toString()
}}
    else if (isNaN(+(input.textContent))){
        input.textContent = e.target.textContent.toString();
        Operand.second = input.textContent;

}
    else if (input.textContent != 0){
          input.textContent = input.textContent.toString() + e.target.textContent.toString();
          Operand.second = input.textContent;

}
    
    else {
        Operand.first = 0;
}

})})

userOperates = userOperates.map(function(op){return op.addEventListener('click', function(e){
        if (input.textContent != 0){
             if (Operand.second == 0){
                  Operand.first = input.textContent;
                  input.textContent = e.target.textContent; 
                  Operand.operator = input.textContent;
                }
            else {
                Operand.first = operate((+Operand.first),(+Operand.second), Operand.operator);
                Operand.second = 0;
                input.textContent = e.target.textContent;
                Operand.operator = input.textContent;
                console.log(Operand)
            }
    }
} )})



