let purchaseBtn = document.querySelector('#purchase-btn');
let yourCart = document.getElementById('cart');
let form = document.getElementsByTagName('form')[0];
let informations = document.querySelector('.container');

if (localStorage.getItem('panier') !== null) {

    let cart = JSON.parse(localStorage.getItem('panier'));

    let titre = document.createElement('h2');
    titre.innerText = "Votre panier";
    titre.className = "panier-titre";

    let articles = document.createElement('div');
    articles.id = "elements";

    let prixtotal = document.createElement('h3');
    prixtotal.id = "prix-total";

    yourCart.append(titre, articles, prixtotal);


    let totalOurs = 0;
    let total = 0;

    // let content;

    for (let item of cart) {
        let entete = document.querySelector('#elements');

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
        prix.innerText = `Prix total : ${totalOurs} €`;



        entete.append(ourson);
        ourson.append(name, prix, quantite, couleur);
    };

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }

    total = (Math.round(total) / 100).toFixed(2);
    prixtotal.innerText = `Total des aricles : ${total} €`;

    let products = [];

    purchaseBtn.addEventListener('click', function () {
        debugger;
    
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

        if (form.checkValidity() === true) {
            
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
                console.log(rawResponse.status);
                console.log(rawResponse.statusText);
                if (rawResponse.status === 200 || rawResponse.status === 201) {
                    localStorage.setItem('contact', JSON.stringify(content.contact));
                    localStorage.setItem('orderId', JSON.stringify(content.orderId));
                    localStorage.setItem('total', JSON.stringify(total));
                    window.location.href = "confirmation.html";
                }
            })();
           
        }
    });

} else {


    let emptyCart = document.createElement('h2');
    emptyCart.id = "panier-vide";

    emptyCart.innerText = "Votre panier est vide veuillez retourner à l'accueil. "
    yourCart.append(emptyCart);

    informations.style.visibility = 'hidden';

}

