import { mesProduits } from "../data/product.js";

function initialisationCatalogue() {
  const catalogue = document.getElementById("catalogue-produit");

  mesProduits.forEach((produit) => {
    const cardProduit = document.createElement("div");
    cardProduit.classList.add("card-produit");

    const imageProduit = document.createElement("img");
    imageProduit.src = produit.image;

    const info = document.createElement("div");
    info.classList.add("info-produit");

    const name = document.createElement("h3");
    name.textContent = produit.nom;
    info.append(name);

    const description = document.createElement("p");
    description.textContent = produit.description;
    info.append(description);

    const price = document.createElement("h4");
    price.textContent = produit.prix + " FCFA";
    info.append(price);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    
    const buttonDetails = document.createElement("a");
    buttonDetails.href = `../../product.html?id=${produit.id}`;
    buttonDetails.classList.add("button-details");
    buttonDetails.textContent = "Détails";

    const buttonAchat = document.createElement("button");
    buttonAchat.classList.add("button-achat");
    buttonAchat.textContent = "Acheter";

    buttonContainer.append(buttonDetails);
    buttonContainer.append(buttonAchat);

    cardProduit.append(imageProduit);
    cardProduit.append(info);
    cardProduit.append(buttonContainer);
    catalogue.append(cardProduit);
  });
}

export { initialisationCatalogue };
