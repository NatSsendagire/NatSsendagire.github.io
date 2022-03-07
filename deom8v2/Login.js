document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
if("signedin" === 'yes'){
    document.getElementById('tervetuloa_teksti').textContent += " " + localStorage.getItem("name");
}
}




function signin(){
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("signedin", "yes");
}