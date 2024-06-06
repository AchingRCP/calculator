function sum(a,b){
    return a + b
};

function rest(a,b){
    return a - b
};

function power(a,b){
    return a * b
};

function divide(a,b){
   return a/b
};

let firstNumber = ""
let secondNumber = ""
let operator =""


function operate(x,y,op){
    if (op === "+"){
        return sum(x,y);
    }else if(op === "-"){
        return rest(x,y);
    }else if (op === "*"){
        return power(x,y);
    } else if(op === '/') {
        if(y == 0) {
            return 'No se puede dividir entre 0';
        } else {
        return x / y;
        }
        
    }
}

function getFirstNumber(n){
    let temp = n
    return firstNumber = parseInt(firstNumber + temp)
}

but1 = document.getElementById("but1");
but1.addEventListener("click", () => getFirstNumber("1"));

but2 = document.getElementById("but2");
but2.addEventListener("click", () => getFirstNumber("2"));

but3 = document.getElementById("but3");
but3.addEventListener("click", () => getFirstNumber("3"));

but4 = document.getElementById("but4");
but4.addEventListener("click", () => getFirstNumber("4"));

but5 = document.getElementById("but5");
but5.addEventListener("click", () => getFirstNumber("5"));

but6 = document.getElementById("but6");
but6.addEventListener("click", () => getFirstNumber("6"));

but7 = document.getElementById("but7");
but7.addEventListener("click", () => getFirstNumber("7"));

but8 = document.getElementById("but8");
but8.addEventListener("click", () => getFirstNumber("8"));

but9 = document.getElementById("but6");
but9.addEventListener("click", () => getFirstNumber("9"));

but0 = document.getElementById("but0");
but0.addEventListener("click", () => getFirstNumber("0"));