function hozzaad(){
    let szerzo = (document.getElementById("szerzo").value)
    let cim = (document.getElementById("cim").value)
    let ertekeles = (document.getElementById("ertekeles").value)
    document.getElementById("lista").innerHTML += "<li>"+ szerzo +": " + cim + " " + ertekeles + "*"; "</li>"
    document.getElementById("szerzo").value=""          
    document.getElementById("cim").value=""  
    document.getElementById("ertekeles").value="1"     
}

function kedvencek(){
    let szerzo = (document.getElementById("szerzo").value)
    let cim = (document.getElementById("cim").value)
    document.getElementById("kedvencek").innerHTML += "<li>"+ szerzo +": " + cim + "</li>"     
}

