export class Produit {
  constructor(id, nom, prix, image) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.image = image;
  }
}

export class Panier {
  #panierDeProduits = [];

  constructor() {
    const donneesDupanier = localStorage.getItem("produitsDuPanier");
    if (donneesDupanier != null) {
      this.#panierDeProduits = JSON.parse(donneesDupanier);
    } else {
      console.log("Mémoire vide");
    }
  }

  get donnees() {
    return this.#panierDeProduits;
  }

  ajouterProduit(itemProduit) {
    this.#panierDeProduits.push(itemProduit);
    this.save();
  }
  save() {
    localStorage.setItem(
      "produitsDuPanier",
      JSON.stringify(this.#panierDeProduits),
    );
  }
}
