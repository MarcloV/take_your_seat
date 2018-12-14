

function randomPlace() {

    document.getElementById("seat").innerHTML = "";
    document.getElementById('name').innerHTML = "";

    var plc = [];

    var nP = document.getElementById('num').value;


    while (plc.length < nP) {
        var rPlc = Math.floor(Math.random() * nP)+1;
        if (!plc.includes(rPlc)) {

            plc.push(rPlc);

            document.getElementById("seat").innerHTML += rPlc + ", ";

            document.getElementById('name').innerHTML += "stagiare" + plc.length + " ";

        }
    }

    console.log(plc);

}
