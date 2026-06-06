import { monPanier } from "../modules/gestionPanier.js";

const conteneurProduit = document.getElementById("product-content");
const produitsDansLePanier = monPanier.donnees;

function buildDom() {
  const nombreArticle = document.getElementById("number-article");
  nombreArticle.textContent = `${produitsDansLePanier.length} article(s)`;

  const notif = document.getElementById("notif");
  notif.textContent = `${produitsDansLePanier.length}`;
  const number = document.querySelector(".number");
  number.textContent = `${produitsDansLePanier.length}`;

  const somme = document.querySelector(".somme");

  const prices = produitsDansLePanier.map((produit) => produit.prix);

  if (prices.length == 0) {
    console.log("Aucun prix");
    return;
  } else {
    somme.textContent = `${prices.reduce((acc, curr) => acc + curr)}.0 FCFA`;
  }
}
buildDom();

console.log(produitsDansLePanier.length);

function showProductPanier() {
  if (produitsDansLePanier.length == 0) {
    conteneurProduit.innerHTML = `<h3 class="message">AUCUN PRODUIT DANS LE PANIER</h3>`;
    return;
  } else {
    produitsDansLePanier.forEach((produit) => {
      const product = document.createElement("div");
      product.id = "product";

      const information = document.createElement("div");
      information.id = "information";

      const contentImage = document.createElement("div");
      contentImage.id = "image";

      const image = document.createElement("img");
      image.src = produit.image;
      contentImage.append(image);
      information.append(contentImage);

      const info = document.createElement("div");
      info.id = "info";

      const name = document.createElement("h3");
      name.textContent = produit.nom;
      info.append(name);

      const button = document.createElement("button");
      button.id = "delete";
      button.innerHTML = `<ion-icon name="trash-outline"></ion-icon> Supprimer`;
      info.append(button);

      information.append(info);

      const contentPriceAmout = document.createElement("div");
      contentPriceAmout.id = "price-total-amount";

      const price = document.createElement("h2");
      price.textContent = `${produit.prix}.0 FCFA`;
      contentPriceAmout.append(price);

      const total = document.createElement("div");
      total.id = "total";

      const texte = document.createElement("p");
      texte.id = "text";
      texte.textContent = "sous-total";
      total.append(texte);

      const montantTotal = document.createElement("p");
      montantTotal.id = "amount-total";
      montantTotal.textContent = `${produit.prix}.0 FCFA`;
      total.append(montantTotal);

      contentPriceAmout.append(total);

      product.append(information);
      product.append(contentPriceAmout);
      conteneurProduit.append(product);
    });
  }
}
showProductPanier();
