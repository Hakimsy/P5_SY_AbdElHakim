window.addEventListener('load', function () {
    const contact = JSON.parse(localStorage.getItem("contact"));
    const orderId = JSON.parse(localStorage.getItem("orderId"));
    const total = JSON.parse(localStorage.getItem('total'));
    merci.innerText = `Merci ${contact.firstName} ! Voici votre numéro de commande : ${orderId}, pour un montant total de : ${total} €. `;
})