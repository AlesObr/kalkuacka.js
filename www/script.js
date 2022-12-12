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


$(document).ready(function(){
    console.log("načteno")
    $("#nula").click(function(){
        addNumber(0);
    })
    $("#one").click(function(){
        addNumber(1);
    })
    $("#two").click(function(){
        addNumber(2);
    })
    $("#three").click(function(){
        addNumber(3);
    })
    $("#four").click(function(){
        addNumber(4);
    })
    $("#five").click(function(){
        addNumber(5);
    })
    $("#six").click(function(){
        addNumber(6);
    })
    $("#seven").click(function(){
        addNumber(7);
    })
    $("#eight").click(function(){
        addNumber(8);
    })
    $("#nine").click(function(){
        addNumber(9);
    })
    $("#dot").click(function(){
        addNumber(".");
    })
    $("#C").click(function(){
        vymaz();
    })
    $("#deleno").click(function(){
        del();
    })
    $("#krat").click(function(){
        nasob();
    })
    $("#minus").click(function(){
        odecti();
    })
    $("#result").click(function(){
        res();
    })
    $("#plus").click(function(){
        secti();
    })
    $("#1x").click(function(){
        zlomkovac();
    })
    $("#x2").click(function(){
        umocnit();
    })
    $("#odmocnina").click(function(){
        odmocnit();
    })
    $("#plusminus").click(function(){
        if(operation == ""){
            number1 = Number(number1)*-1
            document.getElementById("main").innerHTML = number1;
        }
        else{
            number2 = Number(number2)*-1
            document.getElementById("main").innerHTML = number2;
        }
    })
})