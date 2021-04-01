let cart = JSON.parse(localStorage.getItem('panier'));
let prixtotal = document.querySelector('#cartTableTotalPrice');

let totalOurs = 0;
let total = 0;

let content;

for (let item of cart) {
    let entete = document.querySelector('#cartTable');

    let ourson = document.createElement('div');
    ourson.classList.add('ourson');

    let couleur = document.createElement('p');
    let name = document.createElement('h3');
    let quantite = document.createElement('p');
    let prix = document.createElement('p');
    totalOurs = parseInt(item.price) * parseInt(item.quantity);
    totalOurs = (Math.round(totalOurs) / 100).toFixed(2);
    name.innerText = `${item.name}`;
    couleur.innerText = `Couleur : ${item.color}`;
    quantite.innerText = `Quantité : ${item.quantity}`;
    prix.innerText = `Prix total : ${totalOurs} €` ;



    entete.append(ourson);
    ourson.append(name, prix, quantite, couleur);
};

for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
}

total = (Math.round(total) / 100).toFixed(2);
prixtotal.innerText = `${total} €`;


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

// function removeItem() {
//     for (let i = 0; i < cart.length; i++) {
//         let cart = JSON.parse(cart[i]);
//         if (cart._id == 3) {
//             cart.splice(i, 1);
//         }
//     }
// };






