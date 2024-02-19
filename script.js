function dph(){

    const dphInput = document.getElementById("dphCost").value;

    document.getElementById("dphOutput").innerHTML =  dphInput + (dphInput * (21 / 100));
}

function nonDph(){
    const nonDphInput = document.getElementById("nonDphCost").value;

    document.getElementById("nonDphOutput").innerHTML =  nonDphInput - (nonDphInput * (21 / 100));

}