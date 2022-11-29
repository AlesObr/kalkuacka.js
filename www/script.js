var number1 = ""
var number2 = ""
var operation = "";

function addNumber(val){
    val = String(val)
    if(operation == ""){
        number1 = number1 + val
        document.getElementById("main").innerHTML = number1;
    }
    else{
        number2 = number2 + val
        document.getElementById("main").innerHTML = number2;
    }
}

function doOperation(){
    switch(operation){
        case "minus":
            number1 = Number(number1) - Number(number2);
            document.getElementById("main").innerHTML = number1;
            number2 = "";
            break;
        case "plus":
            number1 = Number(number1) + Number(number2);
            document.getElementById("main").innerHTML = number1;
            number2 = "";
            break;
        case "krat":
            number1 = Number(number1) * Number(number2);
            document.getElementById("main").innerHTML = number1;
            number2 = "";
            break;
        case "deleno":
            number1 = Number(number1) / Number(number2);
            document.getElementById("main").innerHTML = number1;
            number2 = "";
            break;
        case "umocnit":
            number1 = Math.pow(Number(number1), 2);
            document.getElementById("main").innerHTML = number1;
            number2 = "";
            break;
        case "odmocnit":
            number1 = Math.sqrt(Number(number1), 2);
            document.getElementById("main").innerHTML = number1;
            break;
        case "zlomek":
            number1 = 1/Number(number1);
            document.getElementById("main").innerHTML = number1;
            break
}
}

function secti(){
    if(operation == ""){
        operation = "plus";
    }
    else{
        doOperation();  
    }
}

function odecti(){
    if(operation == ""){
        operation = "minus";
    }
    else{
        doOperation();  
    }
}

function nasob(){
    if(operation == ""){
        operation = "krat";
    }
    else{
        doOperation();  
    }
}

function del(){
    if(operation == ""){
        operation = "deleno";
    }
    else{
        doOperation();  
    }
}

function res(){
    doOperation();
    document.getElementById("main").innerHTML = number1;
    number2 = "";
    operation = "";
}

function vymazNum2(){
    number2 = ""
}

function vymaz(){
    number1 = "";
    number2 = ""
    document.getElementById("sub").innerHTML = number1;
    document.getElementById("main").innerHTML = number2;
}

function umocnit(){
    operation = "umocnit";
    doOperation();
    operation = "";
}

function odmocnit(){
    operation = "odmocnit";
    doOperation();
    operation = "";
}

function zlomkovac(){
    operation = "zlomek";
    doOperation();
    operation = "";
}
function hide(){
    document.getElementById("display").style.visibility ="hidden"
}