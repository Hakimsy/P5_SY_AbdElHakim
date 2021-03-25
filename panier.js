let cart = JSON.parse(localStorage.getItem('panier'));
let total = 0;
let content;

for (let item of cart) {
    let ourson = document.createElement('tr');
    let entete = document.querySelector('#cartTableBody');
    let couleur = document.createElement('td');
    let quantite = document.createElement('td');
    let prix = document.createElement('td');
    let lastEl = document.createElement('td');
    let prixtotal = document.querySelector('#cartTableTotalPrice');

    total = parseInt(item.price) * parseInt(item.quantity);
    prixtotal.innerText = total;
    ourson.innerText = item.name;
    couleur.innerText = item.color;
    quantite.innerText = item.quantity;
    prix.innerText = item.price;
    lastEl.innerHTML = `<i class="fa fa-trash"></i>`;
    

    entete.append(ourson);
    ourson.append(couleur, quantite, prix, lastEl);
}

let purchaseBtn = document.querySelector('#purchase-btn');

let products = [];

purchaseBtn.addEventListener('click', function () {
    let contact = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    }

    for (let ours of cart) {
        products.push(ours._id);
    }

    let orderTeddies = JSON.stringify({
        contact, products
    });
    (async () => {

        const rawResponse = await fetch("http://localhost:3000/api/teddies/order", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: orderTeddies
        });
        let content = await rawResponse.json();
        alert(content.contact);
        localStorage.setItem('contact', JSON.stringify(content.contact));
        localStorage.setItem('orderId', JSON.stringify(content.orderId));
        localStorage.setItem('total', JSON.stringify(total));
    })();

});






