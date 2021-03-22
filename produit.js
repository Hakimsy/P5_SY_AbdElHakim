teddyId = location.search.substring(4);


async function productPage() {
    teddy = await getData();


    let main = document.querySelector('main');

    let image = document.querySelector('#image-produit');
    let bearname = document.querySelector('#nom-produit');
    let prix = document.querySelector('#prix-produit');
    let description = document.querySelector('#description-produit');
    let label = document.querySelector('#label-couleur');
    let quantiteOurs = document.querySelector('#quantiteourson');
    let select = document.querySelector('#selection-couleur');
    let button = document.querySelector('.ajout');
    let couleurs = teddy.colors;
    

    bearname.innerText = teddy.name;
    description.innerText = teddy.description;
    prix.innerText = (Math.round(teddy.price) / 100).toFixed(2) + " €";
    image.src = teddy.imageUrl;
    label.innerText = "Choisissez la couleur";


    for (let i = 0; i < couleurs.length; i++) {
        let option = document.createElement('option');
        option.value = couleurs[i];
        option.innerHTML = couleurs[i];
        select.appendChild(option);
    };


    let cart = [];

    button.addEventListener('click', function (event) {
        event.preventDefault();
        let product = {
            _id: teddy._id,
            image: teddy.imageUrl,
            name: teddy.name,
            price: teddy.price,
            quantity: parseInt(quantiteOurs.value),
            color: select.value
        };

        if (localStorage.getItem("panier")) {
            let parse = JSON.parse(localStorage.getItem("panier"));
            // for (let item of cart) {
            //     if (item._id === product._id) {
            //         item.quantity++;
            //     }
            // }
            cart.push(product);
            localStorage.setItem("panier", JSON.stringify(cart));
            alert("Votre produit ajouté");
        } else {
            cart.push(product);
            localStorage.setItem("panier", JSON.stringify(cart));
            alert("Votre produit a été ajouté au panier");
        }
    });


};






productPage();


// teddyId = location.search.substring(4);


// async function productPage() {
//     teddy = await getData();


//     let main = document.querySelector('main');

//     let image = document.querySelector('#image-produit');
//     let bearname = document.querySelector('#nom-produit');
//     let prix = document.querySelector('#prix-produit');
//     let description = document.querySelector('#description-produit');
//     let label = document.querySelector('#label-couleur');
//     let select = document.querySelector('#selection-couleur');
//     let button = document.querySelector('.ajout');
//     let couleurs = teddy.colors;


//     bearname.innerText = teddy.name;
//     description.innerText = teddy.description;
//     prix.innerText = (Math.round(teddy.price) / 100).toFixed(2) + " €";
//     image.src = teddy.imageUrl;
//     label.innerText = "Choisissez la couleur";


//     for (let i = 0; i < couleurs.length; i++) {
//         let option = document.createElement('option');
//         option.value = couleurs[i];
//         option.innerHTML = couleurs[i];
//         select.appendChild(option);
//     };

//     let product = {
//         _id: teddy._id,
//         image: teddy.imageUrl,
//         name: teddy.name,
//         price: teddy.price,
//         quantity: 1,
//         color: select.value
//     };

//     let cart = [];
//     button.addEventListener('click', function (event) {
//         event.preventDefault();
//         if (localStorage.getItem("panier")) {
//             let parse = JSON.parse(localStorage.getItem("panier"));
//             for (let item of cart) {
//                 if (item._id === product._id) {
//                     item.quantity++;
//                     console.log(item.quantity);
//                 }
//             }
//             localStorage.setItem("panier", JSON.stringify(cart));
//             alert("Votre produit ajouté");
//         } else {
//             cart.push(product);
//             localStorage.setItem("panier", JSON.stringify(cart));
//             alert("Votre produit a été ajouté au panier");
//         }
//     });



// };


// productPage();


// function addProduct() {

//     } else {
//         cart = JSON.parse(localStorage.getItem('cart'));

//         for (let item of cart) {
//             if (product._id === item._id) {
//                 item.quantity++;
//             }
//         }

//     }
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
// }








// fetch(`http://localhost:3000/api/teddies/${teddyId}`)
//     .then((teddy) => teddy.json())
//     .then(teddy => {

//         let main = document.querySelector('main');

//         let image = document.querySelector('#image-produit');
//         let bearname = document.querySelector('#nom-produit');
//         let prix = document.querySelector('#prix-produit');
//         let description = document.querySelector('#description-produit');
//         let label = document.querySelector('#label-couleur');
//         let select = document.querySelector('#selection-couleur');
//         let button = document.querySelector('#ajouter');
//         let couleurs = teddy.colors;


//         bearname.innerText = teddy.name;
//         description.innerText = teddy.description;
//         prix.innerText = (Math.round(teddy.price) / 100).toFixed(2) + " €";
//         image.src = teddy.imageUrl;
//         label.innerText = "Choisissez la couleur";


//         for (let i = 0; i < couleurs.length; i++) {
//             let option = document.createElement('option');
//             option.value = couleurs[i];
//             option.innerHTML = couleurs[i];
//             select.appendChild(option);
//         }

//         let cart = [];

//         let product = {
//             id: teddy._id,
//             image: teddy.imageUrl,
//             name: teddy.name,
//             price: teddy.price,
//             quantity: 1,
//             color: select.value
//         };
//         cart.push(product);
//     });

