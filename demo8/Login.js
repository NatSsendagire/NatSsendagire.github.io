document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === "yes") { 
        document.getElementById('tervetuloa_teksti').textContent += " " + localStorage.getItem("nimi");
    
    }
}

function signedin() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","kylla");
}
