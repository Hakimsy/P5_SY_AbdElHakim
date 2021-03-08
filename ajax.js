const url = 'http://localhost:3000/api/teddies/';
let teddyId = "";

async function getData() {
    let response = await fetch(url + teddyId);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        return data = await response.json();
    }
}
