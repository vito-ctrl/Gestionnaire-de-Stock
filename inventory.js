const prompt = require('prompt-sync')();

class product {
    constructor(id, name, description, quantite, prix){
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantite = quantite;
        this.prix = prix;
    }
}

let products = [];

function addProduct(){
        const id = products.length + 1;
        const name = prompt("enter product name : ");
        const description = prompt("enter product description : ");
        const quantite = parseInt(prompt("enter product quantite : "));
        const prix = parseFloat(prompt("enter product prix : "));
        const newProduct = new product(id , name, description, quantite, prix);
        products.push(newProduct);
        console.log("product added succefuly");
}
function  listProducts(){
    if (products.length == 0){
        console.log("there is no product");
        return;
    }
    console.log("========= all products ========");

}
let quit = true; 
while(quit){
    console.log("=============== menu ================");
    console.log("1. Ajouter un produit.");
    console.log("2. Afficher tous les produits.");
    console.log("3. Mettre à jour un produit.");
    console.log("4. Supprimer un produit.");
    console.log("5. Quitter.");
    console.log("=====================================");
    
    var chois = parseInt(prompt("enter you chois : "));
    switch(chois){
        case 1:
            addProduct();
            break;
        case 2:
            console.log(addproduct());
            break;
        case 5:
            quit = false;
            break;

        // default:
            // console.log("sf rah salina");
    }

}