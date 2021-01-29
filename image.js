// const url = 'http://localhost:3000/images/teddy_1.jpg';


// let requete = new XMLHttpRequest();
// requete.open('GET', url);
// requete.responseType = 'json';
// requete.send();

// requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//         if (requete.status === 200) {
//             let reponse = requete.response;
//             let oursEnPeluche = reponse.id.'5beaa8bf1c9d440000a57d94';
//             console.log(oursEnPeluche);
//         }
//     }
// }



// let img = document.createElement('img');
// img.src = "./img/teddy_1.jpg"

// let div = document.getElementsByClassName('ours_')
// div.appendChild(img);



// let img = document.createElement('img');
// img = img.src "./img/teddy_1.jpg";

// document.body.append(ours_1);


// let image = ['teddy_1.jpg', 'teddy_2.jpg', 'teddy_3.jpg', 'teddy_4.jpg', 'teddy_5.jpg']

// function demarrage() {    
// }
// window.addEventListener("load", demarrage);



// let url = 'http://localhost:3000/images/teddy_1.jpg';

// function image() {
//     let img = url;
//     console.log(img);
// }



// const url = 'http://localhost:3000/api/teddies';

// let requete = new XMLHttpRequest();

// requete.open('GET', url);
// requete.responseType = 'json';
// requete.send();

// requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//         if (requete.statis === 200) {
//             let reponse = requete.response;
//             console.log(reponse);
//         }
//     }
// }


const url = 'http://localhost:3000/api/teddies';

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            let peluche = reponse[0][4];
            document.querySelector('ours_1').img = peluche;
        }
    }
}