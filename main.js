function sum(a,b){
    return result = a + b
};

function rest(a,b){
    return result = a - b
};

function power(a,b){
    return result = a * b
};

function divide(a,b){
   return result =a/b
};

let firstNumber = ""
let secondNumber = ""
let operator = ""
let result = ""


function operate(x,y,op){
    if (op === "+"){
        sum(x,y);
        pantalla.textContent = result
        secondNumber = ""
        operator = ""
    }else if(op === "-"){
        rest(x,y);
        pantalla.textContent = result
        secondNumber = ""
    }else if (op === "*"){
        power(x,y);
        pantalla.textContent = result
        secondNumber = ""
    } else if(op === '/') {
        if(y == 0) {
            pantalla.textContent = 'No se puede dividir entre 0';
        } else {
            divide(x,y)
            pantalla.textContent = result
            secondNumber = ""
        }
        
    }
}

function getFirstNumber(n){
    if (result == ""){
    let temp = n
    return firstNumber = parseInt(firstNumber + temp)
}}

function getSecondNumber(n){
    let temp = n;
    return secondNumber = parseInt(secondNumber + temp)
}

function getOperator(op){
    return operator = op
}

function getOperation(n){
    if (operator == ""){
        getFirstNumber(n);
        if (result == ""){
            pantalla.textContent = firstNumber;
        }
    }else if(operator !== "" && result == ""){
        getSecondNumber(n)
        pantalla.textContent = secondNumber;
    }else if(result !== "" && operator !== ""){
        firstNumber = result
        getSecondNumber(n)
        pantalla.textContent = secondNumber
    }
}

const but1 = document.getElementById("but1");
but1.addEventListener("click", () => getOperation("1"));

const but2 = document.getElementById("but2");
but2.addEventListener("click", () => getOperation("2"));

const but3 = document.getElementById("but3");
but3.addEventListener("click", () => getOperation("3"));

const but4 = document.getElementById("but4");
but4.addEventListener("click", () => getOperation("4"));

const but5 = document.getElementById("but5");
but5.addEventListener("click", () => getOperation("5"));

const but6 = document.getElementById("but6");
but6.addEventListener("click", () => getOperation("6"));

const but7 = document.getElementById("but7");
but7.addEventListener("click", () => getOperation("7"));

const but8 = document.getElementById("but8");
but8.addEventListener("click", () => getOperation("8"));

const but9 = document.getElementById("but9");
but9.addEventListener("click", () => getOperation("9"));

const but0 = document.getElementById("but0");
but0.addEventListener("click", () => getOperation("0"));

const operator1 = document.getElementById("operator1");
operator1.addEventListener("click", () => getOperator("+"))

const operator2 = document.getElementById("operator2");
operator2.addEventListener("click", () => getOperator("-"))

const operator3 = document.getElementById("operator3");
operator3.addEventListener("click", () => getOperator("*"))

const operator4 = document.getElementById("operator4");
operator4.addEventListener("click", () => getOperator("/"))

const operator5 = document.getElementById("operator5");
operator5.addEventListener("click", () => operate(firstNumber,secondNumber,operator))

const pantalla = document.getElementById("content")

const optbutC = document.getElementById("optbutC")
optbutC.addEventListener("click", () => resetValues())


function resetValues(){
    firstNumber = ""
    secondNumber = ""
    operator = ""
    result = ""
    pantalla.fontSize = "30px"
    pantalla.textContent = ""
    
}