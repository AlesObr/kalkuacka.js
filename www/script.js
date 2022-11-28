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
            document.getElementById("sub").innerHTML = number1;
            number2 = "";
            break;
        case "plus":
            number1 = Number(number1) + Number(number2);
            document.getElementById("sub").innerHTML = number1;
            number2 = "";
            break;
        case "krat":
            number1 = Number(number1) * Number(number2);
            document.getElementById("sub").innerHTML = number1;
            number2 = "";
            break;
        case "deleno":
            number1 = Number(number1) / Number(number2);
            document.getElementById("sub").innerHTML = number1;
            number2 = "";
            break;
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
    number1 = "";
    document.getElementById("main").innerHTML = number1;
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