teddyId = location.search.substring(4);

async function productPage() {
  teddy = await getData();

  let main = document.querySelector(".main-container");

  let image = document.querySelector("#image-produit");
  image.classList.add("imageprod");
  let bearname = document.querySelector("#nom-produit");
  let prix = document.querySelector("#prix-produit");
  let description = document.querySelector("#description-produit");
  let label = document.querySelector("#label-couleur");
  let quantiteOurs = document.querySelector("#quantiteourson");
  let select = document.querySelector("#selection-couleur");
  let button = document.querySelector(".ajout");
  let couleurs = teddy.colors;

  bearname.innerText = teddy.name;
  description.innerText = teddy.description;
  prix.innerText = (Math.round(teddy.price) / 100).toFixed(2) + " €";
  image.src = teddy.imageUrl;
  label.innerText = "Choisissez la couleur";

  for (let i = 0; i < couleurs.length; i++) {
    let option = document.createElement("option");
    option.value = couleurs[i];
    option.innerHTML = couleurs[i];
    select.appendChild(option);
  }

  let cart = [];

  button.addEventListener("click", function (e) {
      e.preventDefault()
    if (quantiteOurs.checkValidity() === true) {
      let product = {
        _id: teddy._id,
        image: teddy.imageUrl,
        name: teddy.name,
        price: teddy.price,
        quantity: parseInt(quantiteOurs.value),
        color: select.value,
      };

      let otherItem = true;

      if (localStorage.getItem("panier") === null) {
        cart.push(product);
        localStorage.setItem("panier", JSON.stringify(cart));
        alert(
          `Vous avez ajouté ${product.quantity} "${product.name}" à votre panier`
        );
      } else {
        cart = JSON.parse(localStorage.getItem("panier"));
        for (let item of cart) {
          if (item._id === product._id && item.color === product.color) {
            item.quantity = product.quantity;
            otherItem = false;
          }
        }
        if (otherItem) cart.push(product);
        localStorage.setItem("panier", JSON.stringify(cart));
        alert(
          `Vous avez ajouté ${product.quantity} "${product.name}" à votre panier`
        );
      }
    }
  });
}

productPage();
