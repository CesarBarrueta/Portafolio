
let panel = document.getElementsByClassName("panel");
console.log(panel);
let a = "";
let num1 = "";
let num2 = "";
let op = {
    operador: "",
    x: ""
};

const clear_pantalla = () => {
    panel = document.getElementsByClassName("panel");
    panel[0].innerHTML = " ";
    a = "";
    op.operador="";
    op.x="";
}

const agregar_num = (num)=>{
    a += num;
    panel[0].textContent = a;
}

const operacion = (operador) => {
    
    if(op.x === ""){
        op.x = a;
        op.operador = operador;
        panel[0].innerHTML = " ";
        a = "";
    }else{
        op.x = equal();
        a="";
        op.operador = operador;
    }
}

const equal = () => {
    switch(op.operador){
        case '+':
            res = (Number(op.x) + Number(a)).toString();
            panel[0].textContent = res;
            return res;
        case '-':
            res = (Number(op.x) - Number(a)).toString();
            panel[0].textContent = res;
            return res;
        case '/':
            res = (Number(op.x) / Number(a)).toString();
            panel[0].textContent = res;
            return res;
        case '*':
            res = (Number(op.x) * Number(a)).toString();
            panel[0].textContent = res;
            return res;
        case '%':
            res = (Number(op.x) % Number(a)).toString();
            panel[0].textContent = res;
            return res;
    }
}