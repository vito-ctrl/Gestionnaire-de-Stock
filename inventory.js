const prompt = require('prompt-sync')();

class produit {
    constructor(name, description, quantite, prix){
        this.name = name;
        this.description = description;
        this.quantite = quantite;
        this.prix = prix;
    }
}

const pro = new produit("coc", "dhfh gfdehf", 123, "$99.99");
console.log(`product name is : ${pro.name}`);

