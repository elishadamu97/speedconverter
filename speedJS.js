function submitButton(){
    var meter = document.getElementById('ms').value;
    var calc1 = meter/1000;
    var calc2 = 1/3600;
    var calc3 = parseFloat(calc1/calc2).toFixed(2);
    if (meter == ''){
        alert("Insert a number to perform this action"); 
    }
    else{
        document.getElementById('innertext').innerHTML = calc3 + "km/hr";
    }
}
function submitButton1(){
    var meter = document.getElementById('kh').value;
    var calc4 = meter*1000;
    var calc5 = 3600;
    var calc6 = parseFloat(calc4/calc5).toFixed(2);
    if (meter == ''){ 
        var a = alert("Insert a number to perform this action"); 
        console.log(a)
    }
    else{
        document.getElementById('innertext').innerHTML = calc6 + "m/s";
    }   
}
function refreshButton(){
    document.getElementById('ms').value = '';
    document.getElementById('kh').value = '';
    document.getElementById('innertext').innerHTML = '';
   // document.getElementById('inneralign').innerHTML = '';
}





  




