import { mesProduits } from "../data/product.js";
import { addObjetPanier } from "../modules/gestionPanier.js";

const name = document.getElementById("name-product");
const price = document.getElementById("price-product");
const description = document.getElementById("description");
const stock = document.getElementById("stock-available");
const image = document.getElementById("image-product");
const buttonBuy = document.getElementById("buy");

export function getIdParams() {
  const queryString = window.location.search;
  const idParams = new URLSearchParams(queryString);

  return idParams.get("id");
}

function renderFicheProduct() {
  const idUrl = getIdParams();
  const product = mesProduits.find((product) => product.id == idUrl);

  if (!product) {
    console.error("Product not found for ID:", idUrl);
    return;
  }

  image.src = product.image;
  name.textContent = product.nom;
  price.textContent = `${product.prix}.0 FCFA`;
  description.textContent = product.description;
  stock.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon> ${product.stock} produit(s) sont disponibles`;
}
renderFicheProduct();

document.addEventListener("DOMContentLoaded", () => {
  const buttonBuy = document.getElementById("buy");

  if (buttonBuy) {
    buttonBuy.addEventListener("click", addObjetPanier);
  } else {
    console.warn("buttonBuy element not found in the DOM.");
  }
});
