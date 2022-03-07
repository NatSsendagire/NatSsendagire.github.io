document.addEventListener("DOMContentLoaded", hasSignedIN);

function hasSignedIN(){
let signedin = 'yes';
if(signedin === 'yes'){
    document.getElementById('tervetuloa_teksti').textContent += " " + localStorage.getItem("name");
}
}




function signin(){
    localStorage.setItem("name", document.getElementById("name").value);
}