async function displayData() {
    let data = await getData();

    const main = document.querySelector('main');

    for (let i = 0; i < data.length; i++) {
        let cadre = document.createElement('div');
        cadre.classList.add('minicontainer');

        let leftDiv = document.createElement('div');
        leftDiv.classList.add('beardiv');

        let rightDiv = document.createElement('div');
        rightDiv.classList.add('textcontainer');

        let image = document.createElement('img');
        image.classList.add('bearimg')

        let bearname = document.createElement('h2');
        let prix = document.createElement('h4');
        let description = document.createElement('p');
        let lienprod = document.createElement('a');

        let vraiprix = (Math.round(data[i].price) / 100).toFixed(2);

        description.innerText = data[i].description;
        image.src = data[i].imageUrl;
        bearname.innerText = data[i].name;
        prix.innerText = vraiprix + " €";
        lienprod.href = `produit.html?id=${data[i]._id}`;
        lienprod.innerText = `Cliquez pour les détails`;

        main.append(cadre);
        cadre.append(leftDiv, rightDiv);
        leftDiv.append(image);
        rightDiv.append(bearname, prix, description, lienprod);

    }


}




displayData();











