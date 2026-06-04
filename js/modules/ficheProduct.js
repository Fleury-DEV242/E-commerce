import { mesProduits } from "../data/product.js";

const name = document.getElementById("name-product");
const price = document.getElementById("price-product");
const description = document.getElementById("description");
const stock = document.getElementById("stock-available");
const image = document.getElementById("image-product");
function getIdParams() {
  const queryString = window.location.search;
  const idParams = new URLSearchParams(queryString);

  return idParams.get("id");
}

function renderFicheProduct() {
  const idUrl = getIdParams();
  const product = mesProduits.find((product) => product.id == idUrl);
  console.log(product);

  image.src = product.image;
  name.textContent = product.nom;
  price.textContent = product.prix + ".0" + " FCFA";
  description.textContent = product.description;
  stock.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon> ${product.stock} produit(s) sont disponibles`;
}
renderFicheProduct();
