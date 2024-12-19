const prompt = require('prompt-sync')();

class produit {
    constructor(id, name, description, quantite, prix){
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantite = quantite;
        this.prix = prix;
    }
    great(){
       console.log(`djfhewf${this.name}`);
    }
}
while(1){
    console.log("=============== menu ================");
    console.log("1. Ajouter un produit.");
    console.log("2. Afficher tous les produits.");
    console.log("3. Mettre à jour un produit.");
    console.log("4. Supprimer un produit.");
    console.log("5. Quitter.");
    console.log("=====================================");

    var chois = prompt("enter you chois : ");
    switch(chois){
        case 1:
            function addproduct(){
                for(let i = 0; chois == 1; i++){
                    const id = console.log(`id = ${i + 1}`);
                    const name = prompt("enter product name : ");
                    const description = prompt("enter product description : ");
                    const quantite = prompt("enter product quantite : ");
                    const prix = prompt("enter product prix : ");
                    return new produit(id , name, description, quantite, prix);
                }
            }
        case 2:
            console.log(addproduct());
        case 5
    }

}