document.addEventListener("DOMContentLoaded", hasSignedIN);

function hasSignedIN(){
let signedin = 'yes';
if(signedin === 'yes'){
    document.getElementById('tervetuloa_teksti').textContent += '   Nathaniel!';
}
}