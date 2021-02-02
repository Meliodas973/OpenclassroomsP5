const url = 'http://localhost:3000/api/teddies';

fetch(url).then(response => response.json()).then(teddies => {
    console.log("teddies fetch", teddies);
    teddies.forEach((teddy, index) => {
        console.log("index", index);
        let blockTeddy = createTeddy(teddy, index);
        document.querySelector(".peluche").innerHTML += blockTeddy;
        
    });

});

function createTeddy(teddy, index) {
    return  `
    <div class="ours ours_${index + 1}">
        <h3>${teddy.name}</h3>
        <img src="${teddy.imageUrl}" />
        <h4>${teddy.description}</h4>
        <p>${teddy.price}</p>
    </div>`;
}