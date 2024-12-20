const prompt = require('prompt-sync')();

// classe for product 

class product {
    constructor(id, name, description, quantite, prix){
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantite = quantite;
        this.prix = prix;
    }
}

// array to store products
let products = [];

// fuction that add products
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

// function that list products
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

// function that update products
function updateProduct(){

    // for user to see products that he can update 
    listProducts();

    const updateId = prompt("enter the product id : ");

    // find the product that have the same id that user enter
    const productToUpdate = products.find(index => index.id == updateId);

    // condution for wrong id
    if(!productToUpdate){
        console.log(`no product have id ${updateId}`);
        return;
    }

    // ask user for updated product info
    console.log("1 . update quantity");
    console.log("2 . update prix");
    console.log("3 . update tow for them");

    let choix = parseInt(prompt("enter your choix : "));
    switch (choix){
        case 1:
            productToUpdate.quantite = parseInt(prompt("enter new quantite : "));
            break;
        case 2:
            productToUpdate.prix = parseFloat(prompt("enter a new prix : "));
            break;
        case 3:
            productToUpdate.quantite = parseInt(prompt("enter new quantite : "));
            productToUpdate.prix = parseFloat(prompt("enter a new prix : "));
            break;
        default:
            console.log("wrong choix");
    }
    console.log("product update succefuly");
}

// function that delete project
function deleteProduct(){
    // 
    listProducts();

    const deleteId  = parseInt(prompt("enter deleted product id : "));

    const productToDelete = deleteId - 1;

    if(productToDelete === -1){
        console.log("product not found");
        return;
    }

    const sure = prompt("are you sure you want to delete product (yes / no)");

    if(sure.toLowerCase() === 'yes'){

        products.splice(productToDelete, 1);

        products.forEach((product, index) => {
            product.id = index + 1;
        });
        console.log("product deleted succesfuly");
    }else{
        console.log("deletion is cansled");
    }

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
    
    var chois = parseInt(prompt("enter your choix : "));
    switch(chois){
        case 1:
            addProduct();
            break;
        case 2:
            listProducts();
            break;
        case 3:
            updateProduct();
            break;
        case 4:
            deleteProduct();
            break;
        case 5:
            quit = false;
            break;

        // default:
            // console.log("sf rah salina");
    }

}