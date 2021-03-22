const contact = JSON.parse(localStorage.getItem("contact"));
const orderId = JSON.parse(localStorage.getItem("orderId"));
const total = JSON.parse(localStorage.getItem('total'));

let merci = document.querySelector('#merci');

merci.innerText = `Merci ${contact.city} ${total} ${orderId}`;