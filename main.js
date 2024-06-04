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
