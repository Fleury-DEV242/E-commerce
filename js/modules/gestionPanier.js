import { mesProduits } from "../data/product.js";
import { getIdParams } from "../ui/ficheProduct.js";
import { Panier, Produit } from "../services/storage.js";

export const monPanier = new Panier();

function searchObjet() {
  const idParams = getIdParams();

  const MyObject = mesProduits.find(
    (objectProduct) => objectProduct.id == idParams,
  );
  return MyObject;
}

export function addObjetPanier() {
  const MyObject = searchObjet();
  const myproduct = new Produit(
    MyObject.id,
    MyObject.nom,
    MyObject.prix,
    MyObject.image,
  );

  monPanier.ajouterProduit(myproduct);
  console.log(monPanier.donnees);
}
