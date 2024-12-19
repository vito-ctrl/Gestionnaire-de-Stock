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
        console.log("\n======== add product ===========\n");
        const id = products.length + 1;
        const name = prompt("enter product name : ");
        const description = prompt("enter product description : ");
        const quantite = parseInt(prompt("enter product quantite : "));
        const prix = parseFloat(prompt("enter product prix : "));
        console.log("\n===================================");
        const newProduct = new product(id , name, description, quantite, prix);
        products.push(newProduct);
        console.log("product added succefuly\n");
}
function  listProducts(){
    if (products.length == 0){
        console.log("\nthere is no product\n");
        return;
    }
    console.log("========= all products ========");
    products.forEach(element => {
        console.log(`id : ${element.id}`);
        console.log(`name : ${element.name}`);
        console.log(`description : ${element.description}`);
        console.log(`quantite : ${element.quantite}`);
        console.log(`prix : ${element.prix}`);
    });

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
            listProducts();
            break;
        case 5:
            quit = false;
            break;

        // default:
            // console.log("sf rah salina");
    }

}