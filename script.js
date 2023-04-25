function compute(){
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    
    var s_i = p*r*t/100;
    var amount = parseInt(p) + parseFloat(s_i);
    var result = document.getElementById("result");

    var c_year = new Date().getFullYear() + parseInt(years);

    if(p<=0){
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = " If you deposit $" + "<mark>" + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of $" + amount + ",\<br\>in the year " + year + "\<br\>";
    }

}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval ;
}
