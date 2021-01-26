const url = 'http://localhost:3000/images/teddy_1.jpg';


let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            let oursEnPeluche = reponse.id.'5beaa8bf1c9d440000a57d94';
            console.log(oursEnPeluche);
        }
    }
}


