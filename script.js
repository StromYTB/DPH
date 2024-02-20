function dph(){

    const dphInput = document.getElementById("dphCost").value;

    document.getElementById("dphOutput").innerHTML = (dphInput * 1.21 ).toFixed(2);
}

function nonDph(){
    const nonDphInput = document.getElementById("nonDphCost").value;

    document.getElementById("nonDphOutput").innerHTML =  (nonDphInput / 1.21).toFixed(2);

}