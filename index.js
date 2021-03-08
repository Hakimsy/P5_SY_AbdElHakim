async function displayData() {
    let data = await getData();

    const main = document.querySelector('main');

    for (let i = 0; i < data.length; i++) {
        let cadre = document.createElement('section');
        let image = document.createElement('img');
        let bearname = document.createElement('h2');
        let prix = document.createElement('h4');
        let lienprod = document.createElement('a');

        let vraiprix = (Math.round(data[i].price) / 100).toFixed(2);

        image.src = data[i].imageUrl;
        bearname.innerText = data[i].name;
        prix.innerText = vraiprix + " €";
        lienprod.href = `produit.html?id=${data[i]._id}`;
        lienprod.innerText = `Cliquez pour les détails`;

        main.append(cadre, image, bearname, vraiprix, lienprod);

    }


}




displayData();











