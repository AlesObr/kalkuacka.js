var number1 = ""
var number2 = ""
var operation = "";

function addNumber(val){
    console.log(val)
    val = String(val)
    number1 = number1 + val
    document.getElementById("main").innerHTML = number1;
}

function secti(operation)