let parse = JSON.parse(localStorage.getItem('panier'));
let total = 0;

for (let item of parse) {
    let ourson = document.querySelector('.ourson');
    let couleur = document.querySelector('.color-check');
    let quantite = document.querySelector('.quantity-check');
    let prix = document.querySelector('.price-check');
    let prixtotal = document.querySelector('#cartTableTotalPrice');

    total = parseInt(item.price) * parseInt(item.quantity);
    prixtotal.innerText = total;
    ourson.innerText = item.name;
    couleur.innerText = item.color;
    quantite.innerText = item.quantity;
    prix.innerText = item.price;
}

let purchaseBtn = document.querySelector('#purchase-btn');

purchaseBtn.addEventListener('click', function () {
    let nounours = [];
    let contact = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    }

    for (let ours of parse) {
        nounours.push(ours._id);
    }

    let orderTeddies = JSON.stringify({
        contact, nounours
    });

    const rawResponse = fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: orderTeddies
    });

    const data = rawResponse.json();

    localStorage.setItem('contact', JSON.stringify(data.contact));
    localStorage.setItem('orderId', JSON.stringify(data.orderId));
    location.href = "./confirmation.html";
});

